import React, { useState } from 'react';
import { Search, Heart, Shield, LogIn, UserPlus, Menu, X, Command, Sparkles, BookOpen, Layers, Gamepad2, Compass } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { UserAvatar } from './UserAvatar';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const { currentUser, favorites, setCommandPaletteOpen, setAuthModalOpen, setAuthMode, logout } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: Gamepad2 },
    { name: 'Games', path: '/games', icon: BookOpen },
    { name: 'Genres', path: '/genres', icon: Compass },
    { name: 'Platforms', path: '/platforms', icon: Layers },
    { name: 'Community', path: '/community', icon: Sparkles },
    { name: 'About', path: '/about', icon: Shield },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090b10]/90 backdrop-blur-md border-b border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={() => handleNavClick('/')}
              className="text-left font-heading font-extrabold text-2xl tracking-tight text-white hover:opacity-95 transition-opacity cursor-pointer flex items-center gap-1.5 focus:outline-hidden"
            >
              <span>Wiki</span>
              <span className="text-blue-500">Game</span>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-zinc-400 bg-zinc-800/90 px-1.5 py-0.5 rounded border border-zinc-700 ml-1 hidden sm:inline-block">
                Wiki
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <button
                    key={link.path}
                    type="button"
                    onClick={() => handleNavClick(link.path)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                      active
                        ? 'bg-blue-600/15 text-blue-400 font-semibold border border-blue-500/30'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                    }`}
                  >
                    <span>{link.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Search bar & User controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button (Ctrl+K) */}
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(true)}
              className="flex items-center justify-between gap-3 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-lg text-xs transition-all w-36 sm:w-60 focus:outline-hidden cursor-pointer"
              title="Search WikiGame (Ctrl+K)"
            >
              <div className="flex items-center gap-2">
                <Search size={14} className="text-zinc-400" />
                <span className="truncate">Search games, wiki...</span>
              </div>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 font-mono text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-700/60">
                <Command size={10} /> K
              </kbd>
            </button>

            {/* Favorites Icon */}
            <button
              type="button"
              onClick={() => handleNavClick('/favorites')}
              aria-label="Favorites"
              className={`relative p-2 rounded-lg border transition-colors cursor-pointer ${
                isActive('/favorites')
                  ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border-zinc-800'
              }`}
              title="Favorites"
            >
              <Heart size={18} className={favorites.length > 0 ? 'fill-rose-500/20' : ''} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-bold text-[10px] rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* User Profile / Auth Actions */}
            {currentUser ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer focus:outline-hidden"
                >
                  <UserAvatar
                    avatar={currentUser.avatar}
                    name={currentUser.displayName || currentUser.username}
                    role={currentUser.role}
                    size="sm"
                    showBadge
                  />
                  <span className="hidden md:inline-block text-xs font-semibold text-zinc-200 max-w-[100px] truncate">
                    @{currentUser.username}
                  </span>
                </button>

                {/* User Dropdown */}
                {userDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setUserDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-[#121620] border border-zinc-800 rounded-xl shadow-xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-3 py-2 border-b border-zinc-800">
                        <p className="text-sm font-semibold text-white truncate">
                          {currentUser.displayName}
                        </p>
                        <p className="text-xs text-zinc-400 truncate">
                          @{currentUser.username} &bull;{' '}
                          <span className="capitalize text-blue-400 font-medium">{currentUser.role}</span>
                        </p>
                      </div>

                      <div className="py-1">
                        <button
                          type="button"
                          onClick={() => {
                            handleNavClick(`/users/${currentUser.username}`);
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800/80 hover:text-white rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span>My Profile & Stats</span>
                          <span className="text-[10px] text-zinc-500 font-mono">
                            {currentUser.reputation} REP
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            handleNavClick('/favorites');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800/80 hover:text-white rounded-lg transition-colors cursor-pointer"
                        >
                          My Favorites ({favorites.length})
                        </button>

                        {currentUser.role === 'admin' && (
                          <button
                            type="button"
                            onClick={() => {
                              handleNavClick('/admin');
                              setUserDropdownOpen(false);
                            }}
                            className="w-full text-left px-3 py-2 text-xs font-semibold text-amber-400 hover:bg-amber-500/10 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                          >
                            <Shield size={13} />
                            <span>Admin Dashboard</span>
                          </button>
                        )}
                      </div>

                      <div className="pt-1 border-t border-zinc-800">
                        <button
                          type="button"
                          onClick={() => {
                            logout();
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('login');
                    setAuthModalOpen(true);
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <LogIn size={14} />
                  <span>Login</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('register');
                    setAuthModalOpen(true);
                  }}
                  className="hidden sm:inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm hover:shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <UserPlus size={14} />
                  <span>Register</span>
                </button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors focus:outline-hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-[#0c0f17] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-zinc-800/80">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors text-left ${
                    active
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                  }`}
                >
                  <Icon size={16} />
                  <span>{link.name}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            {currentUser?.role === 'admin' && (
              <button
                type="button"
                onClick={() => handleNavClick('/admin')}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center gap-2"
              >
                <Shield size={15} />
                Admin Dashboard
              </button>
            )}

            {!currentUser && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('login');
                    setAuthModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 py-2 rounded-lg text-xs font-semibold bg-zinc-800 text-white hover:bg-zinc-700"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('register');
                    setAuthModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
