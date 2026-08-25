import React from 'react';
import { GameCharacter } from '../../types';
import { Sparkles, Shield, User } from 'lucide-react';

interface CharactersSectionProps {
  characters: GameCharacter[];
  gameTitle: string;
}

export const CharactersSection: React.FC<CharactersSectionProps> = ({ characters, gameTitle }) => {
  if (!characters || characters.length === 0) {
    return (
      <div className="p-8 text-center bg-zinc-900/40 rounded-xl border border-zinc-800 text-zinc-500">
        No character profiles added yet for {gameTitle}. Be the first to contribute!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
            Key Characters & Cast
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Heroes, antagonists, and notable figures in {gameTitle}.
          </p>
        </div>
        <span className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md border border-zinc-700">
          {characters.length} Profiles
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {characters.map((char) => (
          <div
            key={char.id}
            className="flex flex-col bg-[#11141d] border border-zinc-800/80 hover:border-zinc-700 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-900">
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#11141d] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="font-heading font-bold text-lg text-white drop-shadow-md">
                  {char.name}
                </h3>
                <span className="text-xs font-semibold text-blue-400 block drop-shadow-xs">
                  {char.role}
                </span>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-1 justify-between gap-3 text-xs">
              <p className="text-zinc-300 leading-relaxed">
                {char.description}
              </p>

              {char.abilities && char.abilities.length > 0 && (
                <div className="pt-3 border-t border-zinc-800/80">
                  <span className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider block mb-1.5 flex items-center gap-1">
                    <Sparkles size={11} className="text-amber-400" /> Signature Abilities & Traits
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {char.abilities.map((ability) => (
                      <span
                        key={ability}
                        className="px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 font-medium text-[11px] border border-zinc-700/50"
                      >
                        {ability}
                      </span>
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
