import React from 'react';
import { useApp } from '../context/AppContext';
import { PLATFORMS_DATA } from '../data/platforms';
import { PlatformBadge } from '../components/common/PlatformBadge';
import { GameCard } from '../components/common/GameCard';
import { Layers, ArrowRight, ArrowLeft } from 'lucide-react';

interface PlatformsPageProps {
  platformSlug?: string;
  onNavigate: (path: string) => void;
}

export const PlatformsPage: React.FC<PlatformsPageProps> = ({ platformSlug, onNavigate }) => {
  const { games } = useApp();

  const selectedPlatform = platformSlug
    ? PLATFORMS_DATA.find(p => p.slug.toLowerCase() === platformSlug.toLowerCase())
    : null;

  const platformGames = selectedPlatform
    ? games.filter(g => g.platforms.some(plat => plat.toLowerCase() === selectedPlatform.name.toLowerCase()))
    : [];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-medium">
          <button type="button" onClick={() => onNavigate('/')} className="hover:text-white">Home</button>
          <span>/</span>
          {selectedPlatform ? (
            <>
              <button type="button" onClick={() => onNavigate('/platforms')} className="hover:text-white">Platforms</button>
              <span>/</span>
              <span className="text-blue-400 font-semibold">{selectedPlatform.name}</span>
            </>
          ) : (
            <span className="text-blue-400 font-semibold">Gaming Platforms</span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-center gap-3">
              <Layers size={32} className="text-blue-400" />
              <span>{selectedPlatform ? `${selectedPlatform.name} Games & Wikis` : 'Browse by Gaming Platform'}</span>
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              {selectedPlatform
                ? selectedPlatform.description
                : 'Explore titles tailored for your hardware: PC, console, handheld, mobile, and sandbox engines.'}
            </p>
          </div>

          {selectedPlatform && (
            <button
              type="button"
              onClick={() => onNavigate('/platforms')}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 inline-flex items-center gap-2 self-start sm:self-auto"
            >
              <ArrowLeft size={14} /> Back to All Platforms
            </button>
          )}
        </div>
      </div>

      {/* Selected Platform Detail */}
      {selectedPlatform ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Found <strong className="text-white">{platformGames.length}</strong> games available on {selectedPlatform.name}</span>
          </div>

          {platformGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {platformGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onSelectGame={(slug) => onNavigate(`/games/${slug}`)}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-[#11141d] rounded-2xl border border-zinc-800 text-zinc-500">
              No games currently indexed for this platform.
            </div>
          )}
        </div>
      ) : (
        /* All Platforms Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORMS_DATA.map((platform) => {
            const count = games.filter(g => g.platforms.some(p => p.toLowerCase() === platform.name.toLowerCase())).length;

            return (
              <div
                key={platform.slug}
                onClick={() => onNavigate(`/platforms/${platform.slug}`)}
                className="p-6 rounded-2xl bg-[#11141d] border border-zinc-800/80 hover:border-blue-500/50 transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <PlatformBadge platform={platform.name} size="md" showIcon />
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {count} Games
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    {platform.description}
                  </p>

                  <div className="text-[11px] text-zinc-500 font-mono">
                    Hardware: {platform.deviceTypes}
                  </div>
                </div>

                <div className="pt-5 flex items-center justify-between text-xs font-semibold text-blue-400 opacity-90 group-hover:opacity-100 border-t border-zinc-800/60 mt-4">
                  <span>View {platform.name} Games</span>
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
