import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { GameCard } from '../components/common/GameCard';
import { PlatformBadge } from '../components/common/PlatformBadge';
import { RatingStars } from '../components/common/RatingStars';
import { GENRES_DATA } from '../data/genres';
import { PLATFORMS_DATA } from '../data/platforms';
import { PlatformType, GameGenre } from '../types';
import { Search, Filter, SlidersHorizontal, LayoutGrid, List, RotateCcw, Flame, Star, Sparkles, ChevronRight } from 'lucide-react';

interface GamesListPageProps {
  onNavigate: (path: string) => void;
  initialSearch?: string;
  initialGenre?: string;
  initialPlatform?: string;
  initialSort?: string;
}

export const GamesListPage: React.FC<GamesListPageProps> = ({
  onNavigate,
  initialSearch = '',
  initialGenre = 'All',
  initialPlatform = 'All',
  initialSort = 'rating'
}) => {
  const { games } = useApp();

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [selectedPlatform, setSelectedPlatform] = useState(initialPlatform);
  const [sortBy, setSortBy] = useState(initialSort);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    if (initialSearch) setSearchTerm(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    if (initialGenre) setSelectedGenre(initialGenre);
  }, [initialGenre]);

  useEffect(() => {
    if (initialPlatform) setSelectedPlatform(initialPlatform);
  }, [initialPlatform]);

  // Filter and sort games
  const filteredGames = useMemo(() => {
    return games
      .filter((game) => {
        // Search term matching
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase().trim();
          const matchTitle = game.title.toLowerCase().includes(q);
          const matchDev = game.developer.toLowerCase().includes(q) || game.publisher.toLowerCase().includes(q);
          const matchGenre = game.genres.some(g => g.toLowerCase().includes(q));
          const matchChars = game.characters?.some(c => c.name.toLowerCase().includes(q));
          if (!matchTitle && !matchDev && !matchGenre && !matchChars) return false;
        }

        // Genre matching
        if (selectedGenre !== 'All') {
          const match = game.genres.some(g => g.toLowerCase() === selectedGenre.toLowerCase());
          if (!match) return false;
        }

        // Platform matching
        if (selectedPlatform !== 'All') {
          const match = game.platforms.some(p => p.toLowerCase() === selectedPlatform.toLowerCase());
          if (!match) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'newest') return b.releaseYear - a.releaseYear;
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        if (sortBy === 'popular') return b.ratingCount - a.ratingCount;
        return 0;
      });
  }, [games, searchTerm, selectedGenre, selectedPlatform, sortBy]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedGenre('All');
    setSelectedPlatform('All');
    setSortBy('rating');
  };

  const hasActiveFilters = searchTerm !== '' || selectedGenre !== 'All' || selectedPlatform !== 'All';

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-medium">
          <button type="button" onClick={() => onNavigate('/')} className="hover:text-white">Home</button>
          <span>/</span>
          <span className="text-blue-400 font-semibold">Games Database</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          All Video Game Wikis
        </h1>
        <p className="text-sm text-zinc-400 mt-1">
          Explore complete game compendiums, walkthroughs, weapon stats, and community guides.
        </p>
      </div>

      {/* Control Bar: Search + Filter Inputs */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#11141d] border border-zinc-800 space-y-4 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by game title, developer, or character..."
              className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
            />
          </div>

          {/* Genre Select */}
          <div className="md:col-span-3">
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-hidden focus:border-blue-500"
            >
              <option value="All">All Genres</option>
              {GENRES_DATA.map((g) => (
                <option key={g.slug} value={g.name}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>

          {/* Platform Select */}
          <div className="md:col-span-3">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-hidden focus:border-blue-500"
            >
              <option value="All">All Platforms</option>
              {PLATFORMS_DATA.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sub-bar: Sort + View toggles + Reset */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-800/80 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-semibold">Sort by:</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'rating', label: 'Highest Rating' },
                { id: 'newest', label: 'Release Year' },
                { id: 'popular', label: 'Most Rated' },
                { id: 'title', label: 'Title (A-Z)' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSortBy(s.id)}
                  className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                    sortBy === s.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw size={13} />
                <span>Reset Filters</span>
              </button>
            )}

            <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-zinc-800 text-blue-400' : 'text-zinc-500 hover:text-zinc-300'
                }`}
                title="Grid View"
              >
                <LayoutGrid size={15} />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-zinc-800 text-blue-400' : 'text-zinc-500 hover:text-zinc-300'
                }`}
                title="List View"
              >
                <List size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Result stats */}
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>Showing <strong className="text-white">{filteredGames.length}</strong> video games</span>
        {hasActiveFilters && (
          <span className="text-blue-400">Filtered results</span>
        )}
      </div>

      {/* Results View */}
      {filteredGames.length > 0 ? (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onSelectGame={(slug) => onNavigate(`/games/${slug}`)}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                onClick={() => onNavigate(`/games/${game.slug}`)}
                className="group p-4 rounded-xl bg-[#11141d] hover:bg-[#151924] border border-zinc-800/80 hover:border-blue-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-16 h-20 rounded-lg object-cover bg-zinc-800 shrink-0"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-bold text-base text-white group-hover:text-blue-400 transition-colors">
                        {game.title}
                      </h3>
                      <span className="text-xs font-mono text-zinc-400">({game.releaseYear})</span>
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-1">
                      {game.developer} &bull; {game.publisher}
                    </p>

                    <div className="flex flex-wrap items-center gap-1 pt-1">
                      {game.genres.map((g) => (
                        <span key={g} className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 pt-2 sm:pt-0 border-zinc-800 shrink-0">
                  <RatingStars score={game.rating} count={game.ratingCount} size="sm" />
                  <div className="flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                    <span>View Wiki</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="py-16 text-center bg-[#11141d] rounded-2xl border border-zinc-800 space-y-4">
          <Filter size={36} className="mx-auto text-zinc-600" />
          <h3 className="font-heading font-bold text-lg text-white">
            No games found matching criteria
          </h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            Try adjusting your search terms, clearing selected genres or platforms.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};
