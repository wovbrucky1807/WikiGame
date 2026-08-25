import React, { useState } from 'react';
import { GameItem } from '../../types';
import { Sword, Shield, Zap, Sparkles, Filter } from 'lucide-react';

interface ItemsSectionProps {
  items: GameItem[];
  gameTitle: string;
}

export const ItemsSection: React.FC<ItemsSectionProps> = ({ items, gameTitle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!items || items.length === 0) {
    return (
      <div className="p-8 text-center bg-zinc-900/40 rounded-xl border border-zinc-800 text-zinc-500">
        No gear or item compendium available for {gameTitle} yet.
      </div>
    );
  }

  const categories = ['All', ...Array.from(new Set(items.map(i => i.category)))];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(i => i.category === selectedCategory);

  const getRarityBadge = (rarity?: GameItem['rarity']) => {
    switch (rarity) {
      case 'Mythic':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-xs shadow-amber-500/20';
      case 'Legendary':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/40 shadow-xs shadow-orange-500/20';
      case 'Epic':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
      case 'Rare':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'Uncommon':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      default:
        return 'bg-zinc-800 text-zinc-400 border-zinc-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
            Weapons, Items & Equipment
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Encyclopedia of gear, arsenal, and special artifacts in {gameTitle}.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-[#11141d] border border-zinc-800/80 hover:border-zinc-700 rounded-xl overflow-hidden shadow-md transition-all duration-200"
          >
            <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-900">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#11141d] via-black/20 to-transparent" />
              
              <div className="absolute top-2.5 left-2.5">
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-black/70 text-zinc-300 backdrop-blur-xs border border-white/10">
                  {item.category}
                </span>
              </div>

              {item.rarity && (
                <div className="absolute top-2.5 right-2.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getRarityBadge(item.rarity)}`}>
                    {item.rarity}
                  </span>
                </div>
              )}
            </div>

            <div className="p-4 flex flex-col flex-1 justify-between gap-3 text-xs">
              <div>
                <h3 className="font-heading font-bold text-base text-white">
                  {item.name}
                </h3>
                <p className="text-zinc-400 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.stats && Object.keys(item.stats).length > 0 && (
                <div className="pt-3 border-t border-zinc-800/80 bg-zinc-900/40 p-2.5 rounded-lg">
                  <span className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider block mb-1.5 flex items-center gap-1">
                    <Zap size={11} className="text-amber-400" /> Item Attributes & Stats
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    {Object.entries(item.stats).map(([key, val]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-zinc-500 text-[10px]">{key}</span>
                        <span className="font-semibold text-zinc-200">{String(val)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
