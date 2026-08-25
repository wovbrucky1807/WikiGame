import React, { useState } from 'react';
import { Game } from '../../types';
import { RatingStars } from '../common/RatingStars';
import { PlatformBadge } from '../common/PlatformBadge';
import { Heart, Sparkles, Share2, Calendar, Building, Globe, ExternalLink, PenTool, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface GameBannerProps {
  game: Game;
  onContribute: () => void;
}

export const GameBanner: React.FC<GameBannerProps> = ({ game, onContribute }) => {
  const { isFavorite, toggleFavorite, userRatings, rateGame, addToast } = useApp();
  const [ratingModalOpen, setRatingModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const favorited = isFavorite(game.id);
  const currentRating = userRatings[game.id];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    addToast('Link Copied', 'Game wiki URL copied to clipboard!', 'info');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#0d1017] border-b border-zinc-800/80">
      {/* Background Banner Image with atmospheric blur and gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={game.bannerImage || game.coverImage}
          alt={game.title}
          className="w-full h-full object-cover object-center opacity-25 filter blur-xs"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#090b10] via-[#090b10]/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-[#090b10] via-[#090b10]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-6 font-medium">
          <a href="#/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="#/games" className="hover:text-white transition-colors">Games</a>
          <span>/</span>
          <span className="text-blue-400 font-semibold">{game.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Game Cover Poster */}
          <div className="lg:col-span-3 sm:max-w-[280px] w-full mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-700/60 shadow-2xl bg-zinc-900 aspect-3/4">
              <img
                src={game.coverImage}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs font-mono font-bold text-white">
                {game.releaseYear}
              </div>
            </div>

            {/* Quick action buttons below poster */}
            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => toggleFavorite(game.id)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  favorited
                    ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/20'
                    : 'bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/60'
                }`}
              >
                <Heart size={16} className={favorited ? 'fill-white' : ''} />
                <span>{favorited ? 'In Favorites' : 'Add to Favorites'}</span>
              </button>

              <button
                type="button"
                onClick={onContribute}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/40 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <PenTool size={15} />
                <span>Contribute to Wiki</span>
              </button>
            </div>
          </div>

          {/* Game Details Info */}
          <div className="lg:col-span-9 space-y-5">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {game.genres.map((genre) => (
                  <span
                    key={genre}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-950/60 text-blue-300 border border-blue-800/50"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                {game.title}
              </h1>

              {game.tagline && (
                <p className="text-base sm:text-lg text-zinc-300 font-normal mt-2 leading-relaxed max-w-3xl">
                  {game.tagline}
                </p>
              )}
            </div>

            {/* Metas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xs text-xs">
              <div>
                <span className="text-zinc-500 uppercase tracking-wider block font-semibold text-[10px] mb-1">
                  Developer
                </span>
                <span className="font-medium text-zinc-200">{game.developer}</span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase tracking-wider block font-semibold text-[10px] mb-1">
                  Publisher
                </span>
                <span className="font-medium text-zinc-200">{game.publisher}</span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase tracking-wider block font-semibold text-[10px] mb-1">
                  Release Date
                </span>
                <span className="font-medium text-zinc-200">{game.releaseDate}</span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase tracking-wider block font-semibold text-[10px] mb-1">
                  Metacritic
                </span>
                <span className="font-bold text-emerald-400">
                  {game.metacriticScore ? `${game.metacriticScore}/100` : '95/100'}
                </span>
              </div>
            </div>

            {/* Platforms */}
            <div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                Available Platforms
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {game.platforms.map((p) => (
                  <PlatformBadge key={p} platform={p} size="md" />
                ))}
              </div>
            </div>

            {/* Rating Section & User Interaction Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800/80">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
                  <div className="text-2xl font-extrabold text-amber-400 font-mono">
                    {game.rating.toFixed(1)}
                  </div>
                  <div>
                    <RatingStars score={game.rating} count={game.ratingCount} size="md" showNumeric={false} />
                    <span className="text-[11px] text-zinc-400 block mt-0.5">
                      Based on {game.ratingCount.toLocaleString()} gamer ratings
                    </span>
                  </div>
                </div>

                {/* Rate this game button / interactive rating */}
                <div className="hidden sm:block">
                  <span className="text-[11px] text-zinc-400 block mb-1">
                    {currentRating ? `Your Rating: ${currentRating}/10` : 'Rate this game:'}
                  </span>
                  <RatingStars
                    score={currentRating || 0}
                    interactive
                    onRate={(val) => rateGame(game.id, val)}
                    size="md"
                    showNumeric={false}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleShare}
                  className="px-3.5 py-2 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Share Wiki Page"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                  <span>{copied ? 'Copied' : 'Share'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
