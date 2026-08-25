import React from 'react';
import { useApp } from '../context/AppContext';
import { GameCard } from '../components/common/GameCard';
import { Heart, ArrowLeft, Gamepad2 } from 'lucide-react';

interface FavoritesPageProps {
  onNavigate: (path: string) => void;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({ onNavigate }) => {
  const { games, favorites } = useApp();

  const favoriteGames = games.filter(g => favorites.includes(g.id));

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      <div>
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-medium">
          <button type="button" onClick={() => onNavigate('/')} className="hover:text-white">Home</button>
          <span>/</span>
          <span className="text-blue-400 font-semibold">Favorites</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-center gap-3">
          <Heart size={32} className="text-rose-500 fill-rose-500" />
          <span>My Favorite Video Games</span>
        </h1>
        <p className="text-sm text-zinc-400 mt-1">
          Your bookmarked games, builds, and walkthrough wiki pages stored securely in local state.
        </p>
      </div>

      {favoriteGames.length > 0 ? (
        <div className="space-y-4">
          <div className="text-xs text-zinc-400">
            <span>You have <strong className="text-white">{favoriteGames.length}</strong> games saved</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onSelectGame={(slug) => onNavigate(`/games/${slug}`)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="py-20 text-center bg-[#11141d] rounded-3xl border border-zinc-800 space-y-4 max-w-lg mx-auto p-8 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
            <Heart size={30} />
          </div>
          <h3 className="font-heading font-bold text-xl text-white">
            No Bookmarked Games Yet
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Click the heart icon on any game card or detail banner to build your personalized gaming library.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/games')}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white inline-flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <Gamepad2 size={15} />
            <span>Explore All Games</span>
          </button>
        </div>
      )}
    </div>
  );
};
