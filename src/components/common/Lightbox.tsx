import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { X, ZoomIn } from 'lucide-react';

export const Lightbox: React.FC = () => {
  const { lightboxImage, setLightboxImage } = useApp();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [setLightboxImage]);

  if (!lightboxImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={() => setLightboxImage(null)} />

      <div className="relative max-w-5xl max-h-[90vh] w-full z-10 flex flex-col items-center">
        <button
          type="button"
          onClick={() => setLightboxImage(null)}
          className="absolute -top-12 right-0 text-zinc-400 hover:text-white bg-zinc-900/80 p-2 rounded-full border border-zinc-800 transition-colors cursor-pointer"
          title="Close Lightbox (ESC)"
        >
          <X size={20} />
        </button>

        <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
          <img
            src={lightboxImage}
            alt="Fullscreen Screenshot"
            className="max-h-[85vh] w-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
