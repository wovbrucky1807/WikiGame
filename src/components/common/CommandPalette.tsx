import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Gamepad2, User as UserIcon, BookOpen, Compass, Layers, ArrowRight, CornerDownLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { GENRES_DATA } from '../../data/genres';
import { PLATFORMS_DATA } from '../../data/platforms';

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: 'game' | 'character' | 'guide' | 'genre' | 'platform';
  url: string;
  image?: string;
  meta?: string;
}

interface CommandPaletteProps {
  onNavigate: (path: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ onNavigate }) => {
  const { commandPaletteOpen, setCommandPaletteOpen, games } = useApp();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (commandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [commandPaletteOpen]);

  // Compute search results across games, characters, guides, genres, and platforms
  const results: SearchResult[] = React.useMemo(() => {
    if (!query.trim()) {
      // Default top suggestions / trending
      const trendingGames = games.filter(g => g.isTrending || g.isTopRated).slice(0, 4);
      return [
        ...trendingGames.map(g => ({
          id: g.id,
          title: g.title,
          subtitle: `${g.developer} • ${g.genres.slice(0, 2).join(', ')}`,
          type: 'game' as const,
          url: `/games/${g.slug}`,
          image: g.coverImage,
          meta: `★ ${g.rating}`
        })),
        {
          id: 'genre-rpg',
          title: 'RPG Games',
          subtitle: 'Explore role-playing games with deep progression',
          type: 'genre' as const,
          url: '/genres/rpg',
          meta: 'Genre'
        },
        {
          id: 'platform-pc',
          title: 'PC Gaming Hub',
          subtitle: 'High frame rate titles and modding',
          type: 'platform' as const,
          url: '/platforms/pc',
          meta: 'Platform'
        }
      ];
    }

    const q = query.toLowerCase().trim();
    const list: SearchResult[] = [];

    // 1. Match Games (title, developer, publisher, genres)
    games.forEach((game) => {
      const matchTitle = game.title.toLowerCase().includes(q);
      const matchDev = game.developer.toLowerCase().includes(q) || game.publisher.toLowerCase().includes(q);
      const matchGenre = game.genres.some(g => g.toLowerCase().includes(q));

      if (matchTitle || matchDev || matchGenre) {
        list.push({
          id: `game-${game.id}`,
          title: game.title,
          subtitle: `${game.developer} (${game.releaseYear}) • ${game.genres.join(', ')}`,
          type: 'game',
          url: `/games/${game.slug}`,
          image: game.coverImage,
          meta: `★ ${game.rating}`
        });
      }

      // 2. Match Characters in game
      game.characters?.forEach((char) => {
        if (char.name.toLowerCase().includes(q) || char.role.toLowerCase().includes(q)) {
          list.push({
            id: `char-${char.id}`,
            title: char.name,
            subtitle: `${char.role} in ${game.title}`,
            type: 'character',
            url: `/games/${game.slug}#characters`,
            image: char.image,
            meta: 'Character'
          });
        }
      });

      // 3. Match Guides in game
      game.guides?.forEach((guide) => {
        if (guide.title.toLowerCase().includes(q) || guide.category.toLowerCase().includes(q)) {
          list.push({
            id: `guide-${guide.id}`,
            title: guide.title,
            subtitle: `${guide.category} for ${game.title} by @${guide.author}`,
            type: 'guide',
            url: `/games/${game.slug}#guides`,
            meta: 'Guide'
          });
        }
      });
    });

    // 4. Match Genres
    GENRES_DATA.forEach((genre) => {
      if (genre.name.toLowerCase().includes(q) || genre.description.toLowerCase().includes(q)) {
        list.push({
          id: `genre-${genre.slug}`,
          title: `${genre.name} Games`,
          subtitle: genre.description,
          type: 'genre',
          url: `/genres/${genre.slug}`,
          meta: 'Genre'
        });
      }
    });

    // 5. Match Platforms
    PLATFORMS_DATA.forEach((plat) => {
      if (plat.name.toLowerCase().includes(q) || plat.description.toLowerCase().includes(q)) {
        list.push({
          id: `plat-${plat.slug}`,
          title: plat.name,
          subtitle: plat.deviceTypes,
          type: 'platform',
          url: `/platforms/${plat.slug}`,
          meta: 'Platform'
        });
      }
    });

    return list.slice(0, 10);
  }, [query, games]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (results.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % (results.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        selectResult(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setCommandPaletteOpen(false);
    }
  };

  const selectResult = (res: SearchResult) => {
    setCommandPaletteOpen(false);
    onNavigate(res.url);
  };

  if (!commandPaletteOpen) return null;

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'game':
        return <Gamepad2 size={16} className="text-blue-400" />;
      case 'character':
        return <UserIcon size={16} className="text-purple-400" />;
      case 'guide':
        return <BookOpen size={16} className="text-emerald-400" />;
      case 'genre':
        return <Compass size={16} className="text-amber-400" />;
      case 'platform':
        return <Layers size={16} className="text-cyan-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={() => setCommandPaletteOpen(false)} />

      <div className="relative w-full max-w-2xl bg-[#0f121a] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 gap-3 bg-zinc-900/60">
          <Search size={18} className="text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search WikiGame: games, characters, genres, guides, platforms..."
            className="w-full bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-zinc-400 hover:text-white p-1 rounded-md"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1 divide-y divide-zinc-900">
          {results.length > 0 ? (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => selectResult(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-600/15 border border-blue-500/40 text-white'
                      : 'hover:bg-zinc-800/60 text-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-9 h-9 rounded-lg object-cover bg-zinc-800 shrink-0"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center shrink-0">
                        {getTypeIcon(item.type)}
                      </div>
                    )}

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white truncate">
                          {item.title}
                        </span>
                        {item.meta && (
                          <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                            {item.meta}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 pl-2">
                    {isSelected && (
                      <span className="text-[11px] text-blue-400 font-medium flex items-center gap-1">
                        Select <CornerDownLeft size={11} />
                      </span>
                    )}
                    <ArrowRight size={14} className="text-zinc-600" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-zinc-500 space-y-2">
              <Gamepad2 size={32} className="mx-auto text-zinc-600" />
              <p className="text-sm font-medium">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs">Try searching for Minecraft, Valorant, GTA V, or RPG.</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-zinc-950/80 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <span>&uarr;&darr; Navigate</span>
            <span>&crarr; Select</span>
            <span>ESC Close</span>
          </div>
          <span>WikiGame Instant Search</span>
        </div>
      </div>
    </div>
  );
};
