import React from 'react';
import { useApp } from '../../context/AppContext';
import { Maximize2, Play, Image as ImageIcon } from 'lucide-react';

interface GallerySectionProps {
  screenshots: string[];
  youtubeTrailerId?: string;
  gameTitle: string;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ screenshots, youtubeTrailerId, gameTitle }) => {
  const { setLightboxImage } = useApp();

  return (
    <div className="space-y-8">
      {/* Official YouTube Trailer */}
      {youtubeTrailerId && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Play size={18} className="text-red-500 fill-red-500" />
            <h3 className="font-heading font-bold text-lg text-white">
              Official Gameplay Trailer
            </h3>
          </div>

          <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeTrailerId}?rel=0`}
              title={`${gameTitle} Official Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}

      {/* Screenshot Gallery */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon size={18} className="text-blue-400" />
            <h3 className="font-heading font-bold text-lg text-white">
              High-Resolution Screenshots
            </h3>
          </div>
          <span className="text-xs text-zinc-500 font-mono">
            Click to expand fullscreen
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {screenshots.map((src, index) => (
            <div
              key={index}
              onClick={() => setLightboxImage(src)}
              className="group relative aspect-16/10 rounded-xl overflow-hidden border border-zinc-800 hover:border-blue-500/60 bg-zinc-900 cursor-pointer shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <img
                src={src}
                alt={`${gameTitle} Screenshot ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                <span className="p-2.5 rounded-full bg-blue-600/90 text-white shadow-lg">
                  <Maximize2 size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
