import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ToastContainer } from './components/common/ToastContainer';
import { AuthModal } from './components/common/AuthModal';
import { ContributeModal } from './components/common/ContributeModal';
import { CommandPalette } from './components/common/CommandPalette';
import { Lightbox } from './components/common/Lightbox';

// Pages
import { HomePage } from './pages/HomePage';
import { GamesListPage } from './pages/GamesListPage';
import { GameDetailPage } from './pages/GameDetailPage';
import { GenresPage } from './pages/GenresPage';
import { PlatformsPage } from './pages/PlatformsPage';
import { CommunityPage } from './pages/CommunityPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { FavoritesPage } from './pages/FavoritesPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>('/');

  // Parse path from window hash or default to /
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#/, '') || '/';
      setCurrentPath(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = `#${path}`;
  };

  // Route Resolver
  const renderCurrentPage = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} />;
    }

    // 2. Games List & search query / filter
    if (currentPath.startsWith('/games')) {
      // Check if it's a specific game slug: /games/[slug]
      const parts = currentPath.split('/');
      if (parts.length >= 3 && parts[2]) {
        // May contain search params or hash anchor: e.g. elden-ring or elden-ring#guides
        const slug = parts[2].split('?')[0].split('#')[0];
        return <GameDetailPage slug={slug} onNavigate={navigate} />;
      }

      // Check query params for /games?search=...
      const searchIndex = currentPath.indexOf('?');
      let initialSearch = '';
      let initialGenre = 'All';
      let initialPlatform = 'All';
      let initialSort = 'rating';

      if (searchIndex !== -1) {
        const queryParams = new URLSearchParams(currentPath.slice(searchIndex));
        initialSearch = queryParams.get('search') || '';
        initialGenre = queryParams.get('genre') || 'All';
        initialPlatform = queryParams.get('platform') || 'All';
        initialSort = queryParams.get('sort') || 'rating';
      }

      return (
        <GamesListPage
          onNavigate={navigate}
          initialSearch={initialSearch}
          initialGenre={initialGenre}
          initialPlatform={initialPlatform}
          initialSort={initialSort}
        />
      );
    }

    // 3. Genres Page: /genres or /genres/[slug]
    if (currentPath.startsWith('/genres')) {
      const parts = currentPath.split('/');
      const genreSlug = parts.length >= 3 ? parts[2] : undefined;
      return <GenresPage genreSlug={genreSlug} onNavigate={navigate} />;
    }

    // 4. Platforms Page: /platforms or /platforms/[slug]
    if (currentPath.startsWith('/platforms')) {
      const parts = currentPath.split('/');
      const platformSlug = parts.length >= 3 ? parts[2] : undefined;
      return <PlatformsPage platformSlug={platformSlug} onNavigate={navigate} />;
    }

    // 5. Community: /community
    if (currentPath.startsWith('/community')) {
      return <CommunityPage onNavigate={navigate} />;
    }

    // 6. User Profile: /users/[username]
    if (currentPath.startsWith('/users')) {
      const parts = currentPath.split('/');
      const username = parts.length >= 3 && parts[2] ? parts[2] : 'alex_gamer';
      return <UserProfilePage username={username} onNavigate={navigate} />;
    }

    // 7. Favorites: /favorites
    if (currentPath.startsWith('/favorites')) {
      return <FavoritesPage onNavigate={navigate} />;
    }

    // 8. Admin Portal: /admin
    if (currentPath.startsWith('/admin')) {
      return <AdminDashboardPage onNavigate={navigate} />;
    }

    // 9. About: /about
    if (currentPath.startsWith('/about')) {
      return <AboutPage onNavigate={navigate} />;
    }

    // 10. 404
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-zinc-100 flex flex-col selection:bg-blue-600 selection:text-white font-sans">
      {/* Sticky Navbar */}
      <Navbar currentPath={currentPath} onNavigate={navigate} />

      {/* Main Page Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Global Modals & Notifications */}
      <CommandPalette onNavigate={navigate} />
      <AuthModal />
      <ContributeModal />
      <Lightbox />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
