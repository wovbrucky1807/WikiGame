import React from 'react';
import { useApp } from '../context/AppContext';
import { GENRES_DATA } from '../data/genres';
import { GameCard } from '../components/common/GameCard';
import { Compass, ArrowRight, ArrowLeft } from 'lucide-react';

interface GenresPageProps {
  genreSlug?: string;
  onNavigate: (path: string) => void;
}

export const GenresPage: React.FC<GenresPageProps> = ({ genreSlug, onNavigate }) => {
  const { games } = useApp();

  const selectedGenre = genreSlug
    ? GENRES_DATA.find(g => g.slug.toLowerCase() === genreSlug.toLowerCase())
    : null;

  const genreGames = selectedGenre
    ? games.filter(g => g.genres.some(genre => genre.toLowerCase() === selectedGenre.name.toLowerCase()))
    : [];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-medium">
          <button type="button" onClick={() => onNavigate('/')} className="hover:text-white">Home</button>
          <span>/</span>
          {selectedGenre ? (
            <>
              <button type="button" onClick={() => onNavigate('/genres')} className="hover:text-white">Genres</button>
              <span>/</span>
              <span className="text-blue-400 font-semibold">{selectedGenre.name}</span>
            </>
          ) : (
            <span className="text-blue-400 font-semibold">Game Genres</span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-center gap-3">
              <Compass size={32} className="text-blue-400" />
              <span>{selectedGenre ? `${selectedGenre.name} Video Games` : 'Browse Game Genres'}</span>
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              {selectedGenre
                ? selectedGenre.description
                : 'Explore games by category, mechanic, pace, and story depth.'}
            </p>
          </div>

          {selectedGenre && (
            <button
              type="button"
              onClick={() => onNavigate('/genres')}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 inline-flex items-center gap-2 self-start sm:self-auto"
            >
              <ArrowLeft size={14} /> Back to All Genres
            </button>
          )}
        </div>
      </div>

      {/* Selected Genre Detail View */}
      {selectedGenre ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Found <strong className="text-white">{genreGames.length}</strong> games in {selectedGenre.name}</span>
          </div>

          {genreGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {genreGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onSelectGame={(slug) => onNavigate(`/games/${slug}`)}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-[#11141d] rounded-2xl border border-zinc-800 text-zinc-500">
              No games currently indexed in this genre.
            </div>
          )}
        </div>
      ) : (
        /* All Genres Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GENRES_DATA.map((genre) => {
            const count = games.filter(g => g.genres.some(gn => gn.toLowerCase() === genre.name.toLowerCase())).length;

            return (
              <div
                key={genre.slug}
                onClick={() => onNavigate(`/genres/${genre.slug}`)}
                className="p-6 rounded-2xl bg-[#11141d] border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                      {genre.name}
                    </h3>
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {count} Games
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {genre.description}
                  </p>
                </div>

                <div className="pt-5 flex items-center justify-between text-xs font-semibold text-blue-400 opacity-90 group-hover:opacity-100 border-t border-zinc-800/60 mt-4">
                  <span>Browse {genre.name}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
