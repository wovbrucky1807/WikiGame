import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GameCard } from '../components/common/GameCard';
import { GENRES_DATA } from '../data/genres';
import { PLATFORMS_DATA } from '../data/platforms';
import {
  Flame,
  Sparkles,
  Star,
  Search,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Gamepad2,
  Users,
  Compass,
  CheckCircle,
  Play
} from 'lucide-react';
import { PlatformBadge } from '../components/common/PlatformBadge';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { games, setCommandPaletteOpen } = useApp();
  const [heroSearch, setHeroSearch] = useState('');

  // Featured games
  const featuredGames = games.filter(g => g.isTrending || g.isTopRated);
  const heroGame = featuredGames[0] || games[0];

  const trendingGames = games.filter(g => g.isTrending);
  const topRatedGames = [...games].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const newReleases = games.filter(g => g.isNewRelease || g.releaseYear >= 2024).slice(0, 4);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      onNavigate(`/games?search=${encodeURIComponent(heroSearch.trim())}`);
    } else {
      setCommandPaletteOpen(true);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16 animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#0b0e14] shadow-2xl">
        {/* Background Image & Effects */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroGame?.bannerImage || heroGame?.coverImage}
            alt={heroGame?.title || 'WikiGame Hero'}
            className="w-full h-full object-cover object-center opacity-30 filter blur-xs"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#090b10] via-[#090b10]/80 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-[#090b10] via-[#090b10]/60 to-transparent" />
        </div>

        <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-5xl space-y-6">
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
            <Sparkles size={14} />
            <span>The Free Community Gaming Encyclopedia</span>
          </div>

          {/* Hero Heading */}
          <div className="space-y-3">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1]">
              Explore Complete Lore, Builds, Guides & Game Wikis.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              WikiGame is an open encyclopedia for video games. Discover character stats, interactive maps, equipment, walkthroughs, and PC specs — 100% free with zero paywalls.
            </p>
          </div>

          {/* Search bar inside Hero */}
          <form onSubmit={handleHeroSearch} className="max-w-2xl">
            <div className="relative flex items-center bg-zinc-900/90 border border-zinc-700/80 rounded-2xl p-1.5 shadow-2xl focus-within:border-blue-500 transition-colors backdrop-blur-md">
              <Search size={20} className="text-zinc-400 ml-3 shrink-0" />
              <input
                type="text"
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                placeholder="Search games, characters, weapon builds (e.g. Elden Ring, Valorant, Jett)..."
                className="w-full bg-transparent text-white placeholder-zinc-500 text-xs sm:text-sm px-3 py-2 focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shrink-0 cursor-pointer"
              >
                Search Wiki
              </button>
            </div>
          </form>

          {/* Popular Search Quick Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-zinc-400 font-semibold">Trending Searches:</span>
            {['Elden Ring', 'Valorant', 'GTA V', 'Minecraft', 'Cyberpunk 2077', 'Roblox'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => onNavigate(`/games?search=${encodeURIComponent(term)}`)}
                className="px-2.5 py-1 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Featured Spotlight Card */}
          {heroGame && (
            <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1">
                  <Flame size={14} className="stroke-[2.5]" /> Spotlight:
                </span>
                <span className="font-semibold text-white text-sm">{heroGame.title}</span>
                <span className="text-xs text-zinc-400">&bull; {heroGame.genres.slice(0, 2).join(', ')}</span>
              </div>

              <button
                type="button"
                onClick={() => onNavigate(`/games/${heroGame.slug}`)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Read Full Wiki & Guides</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#11141d] border border-zinc-800/80 flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Gamepad2 size={22} />
          </div>
          <div>
            <div className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              {games.length}+
            </div>
            <div className="text-xs text-zinc-400">Indexed Game Wikis</div>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#11141d] border border-zinc-800/80 flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <BookOpen size={22} />
          </div>
          <div>
            <div className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              1,250+
            </div>
            <div className="text-xs text-zinc-400">Guides & Lore Pages</div>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#11141d] border border-zinc-800/80 flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Users size={22} />
          </div>
          <div>
            <div className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              100%
            </div>
            <div className="text-xs text-zinc-400">Free Open Platform</div>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-[#11141d] border border-zinc-800/80 flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Sparkles size={22} />
          </div>
          <div>
            <div className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Community
            </div>
            <div className="text-xs text-zinc-400">Peer Reviewed Revisions</div>
          </div>
        </div>
      </section>

      {/* Trending Games Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame size={22} className="text-amber-400" />
            <div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Trending Games
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Most visited wiki pages and active community discussions this week.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/games')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
          >
            <span>View All</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onSelectGame={(slug) => onNavigate(`/games/${slug}`)}
            />
          ))}
        </div>
      </section>

      {/* Top Rated Games Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star size={22} className="text-amber-400 fill-amber-400" />
            <div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Top Rated Masterpieces
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Critically acclaimed titles with the highest community and Metacritic ratings.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/games?sort=rating')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
          >
            <span>See Top Rankings</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topRatedGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onSelectGame={(slug) => onNavigate(`/games/${slug}`)}
            />
          ))}
        </div>
      </section>

      {/* Browse By Genres Cards */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass size={22} className="text-blue-400" />
            <div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Browse by Genre
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Dive into specific game archetypes, from vast RPGs to competitive FPS titles.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/genres')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
          >
            <span>All Genres</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GENRES_DATA.slice(0, 8).map((genre) => (
            <div
              key={genre.slug}
              onClick={() => onNavigate(`/genres/${genre.slug}`)}
              className="group p-5 rounded-2xl bg-[#11141d] border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-blue-400 transition-colors">
                    {genre.name}
                  </h3>
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    {genre.count} Games
                  </span>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {genre.description}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs font-semibold text-blue-400 opacity-90 group-hover:opacity-100">
                <span>Explore {genre.name}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse By Platform Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Supported Gaming Platforms
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Filter wikis by hardware, desktop, console, mobile, and browser environments.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/platforms')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
          >
            <span>All Platforms</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {PLATFORMS_DATA.map((platform) => (
            <button
              key={platform.slug}
              type="button"
              onClick={() => onNavigate(`/platforms/${platform.slug}`)}
              className="p-4 rounded-xl bg-[#11141d] hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-center transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center gap-2"
            >
              <PlatformBadge platform={platform.name} size="sm" showIcon />
              <span className="text-[11px] text-zinc-500 font-mono">{platform.deviceTypes}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Community Call to Action */}
      <section className="p-8 sm:p-12 rounded-3xl bg-linear-to-r from-blue-950/40 via-[#11141d] to-[#11141d] border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
            <CheckCircle size={14} />
            <span>Join 10,000+ Gamers</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Have a game build, lore secret, or guide to share?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            WikiGame is maintained entirely by gamers like you. Submit edits, update boss strategies, or add missing system requirements to earn reputation points.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => onNavigate('/community')}
            className="px-6 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all cursor-pointer text-center"
          >
            Visit Community Hub
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/about')}
            className="px-6 py-3 rounded-xl text-sm font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors text-center cursor-pointer"
          >
            Learn How It Works
          </button>
        </div>
      </section>
    </div>
  );
};
