import React, { useState } from 'react';
import { Game } from '../../types';
import { RatingStars } from './RatingStars';
import { PlatformBadge } from './PlatformBadge';
import { Heart, ChevronRight, Sparkles, Flame, Gamepad2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface GameCardProps {
  game: Game;
  onSelectGame?: (slug: string) => void;
  featured?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  onSelectGame,
  featured = false
}) => {
  const { isFavorite, toggleFavorite } = useApp();
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const favorited = isFavorite(game.id);

  const handleClick = (e: React.MouseEvent) => {
    // Prevent trigger if clicking favorite button
    if ((e.target as HTMLElement).closest('.fav-btn')) return;
    if (onSelectGame) {
      onSelectGame(game.slug);
    } else {
      window.location.hash = `#/games/${game.slug}`;
    }
  };

  const imageSrc = imageError ? game.bannerImage || game.coverImage : game.coverImage;

  return (
    <div
      id={`game-card-${game.slug}`}
      onClick={handleClick}
      className="group relative flex flex-col bg-[#11141d] hover:bg-[#151924] border border-zinc-800/80 hover:border-blue-500/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.25)]"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-900">
        {!isLoaded && !imageError && (
          <div className="absolute inset-0 bg-zinc-800/60 animate-pulse" />
        )}

        {imageError && !imageSrc ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-600 p-4 text-center">
            <Gamepad2 size={32} className="text-zinc-700 mb-1" />
            <span className="text-xs font-semibold text-zinc-400">{game.title}</span>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={game.title}
            onLoad={() => setIsLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#11141d] via-transparent to-black/30 pointer-events-none" />

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap items-center gap-1.5 z-10">
          {game.isTrending && (
            <span className="inline-flex items-center gap-1 bg-amber-500/90 text-black font-bold text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-sm shadow-md">
              <Flame size={12} className="stroke-[3]" /> Trending
            </span>
          )}
          {game.isNewRelease && (
            <span className="inline-flex items-center gap-1 bg-blue-600/90 text-white font-bold text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-sm shadow-md">
              <Sparkles size={11} /> New
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          type="button"
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(game.id);
          }}
          className={`fav-btn absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 ${
            favorited
              ? 'bg-rose-500/90 text-white shadow-lg shadow-rose-500/30'
              : 'bg-black/60 text-zinc-400 hover:text-white hover:bg-black/80'
          }`}
        >
          <Heart size={15} className={favorited ? 'fill-white' : ''} />
        </button>

        {/* Release Year Pill */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-sm text-zinc-300 text-[11px] font-medium px-2 py-0.5 rounded-md border border-white/10">
          {game.releaseYear}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Title */}
          <h3 className="font-heading font-bold text-base md:text-lg text-white group-hover:text-blue-400 transition-colors line-clamp-1">
            {game.title}
          </h3>

          {/* Tagline / Developer */}
          <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
            {game.tagline || game.developer}
          </p>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap items-center gap-1.5">
          {game.genres.slice(0, 3).map((g) => (
            <span
              key={g}
              className="text-[11px] font-medium bg-zinc-800/80 text-zinc-300 px-2 py-0.5 rounded-md border border-zinc-700/50"
            >
              {g}
            </span>
          ))}
          {game.genres.length > 3 && (
            <span className="text-[10px] text-zinc-500">+{game.genres.length - 3}</span>
          )}
        </div>

        {/* Platforms */}
        <div className="flex flex-wrap items-center gap-1 pt-1 border-t border-zinc-800/70">
          {game.platforms.slice(0, 3).map((p) => (
            <PlatformBadge key={p} platform={p} size="sm" />
          ))}
          {game.platforms.length > 3 && (
            <span className="text-[10px] text-zinc-400 font-mono pl-1">
              +{game.platforms.length - 3}
            </span>
          )}
        </div>

        {/* Footer info: Rating & View Button */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800/50 mt-auto">
          <RatingStars score={game.rating} count={game.ratingCount} size="sm" />

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 opacity-90 group-hover:opacity-100 transition-all group-hover:translate-x-0.5">
            View Game <ChevronRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
};
