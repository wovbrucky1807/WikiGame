import React from 'react';
import { GameMap } from '../../types';
import { MapPin, Navigation, Compass } from 'lucide-react';

interface MapsSectionProps {
  maps: GameMap[];
  gameTitle: string;
}

export const MapsSection: React.FC<MapsSectionProps> = ({ maps, gameTitle }) => {
  if (!maps || maps.length === 0) {
    return (
      <div className="p-8 text-center bg-zinc-900/40 rounded-xl border border-zinc-800 text-zinc-500">
        No map locations recorded for {gameTitle} yet.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
            World Atlas & Locations
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Regions, zones, combat maps, and points of interest in {gameTitle}.
          </p>
        </div>
        <span className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md border border-zinc-700">
          {maps.length} Maps
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {maps.map((map) => (
          <div
            key={map.id}
            className="flex flex-col bg-[#11141d] border border-zinc-800/80 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative aspect-16/9 w-full overflow-hidden bg-zinc-900">
              <img
                src={map.image}
                alt={map.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#11141d] via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white drop-shadow-md">
                    {map.name}
                  </h3>
                  <span className="text-xs font-medium text-blue-400 block drop-shadow-xs">
                    {map.type}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-4 text-xs">
              <p className="text-zinc-300 leading-relaxed">
                {map.description}
              </p>

              {map.pointsOfInterest && map.pointsOfInterest.length > 0 && (
                <div className="pt-3 border-t border-zinc-800/80">
                  <span className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider block mb-2 flex items-center gap-1">
                    <MapPin size={11} className="text-rose-400" /> Key Points of Interest
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {map.pointsOfInterest.map((poi) => (
                      <span
                        key={poi}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 text-[11px] font-medium border border-zinc-700/60"
                      >
                        <Compass size={10} className="text-blue-400" />
                        {poi}
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
