import React from 'react';
import { Gamepad2, ArrowLeft, Search, Home } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const { setCommandPaletteOpen } = useApp();

  return (
    <div className="py-20 text-center max-w-lg mx-auto space-y-6 animate-in fade-in duration-200">
      <div className="w-24 h-24 rounded-3xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto text-4xl font-extrabold shadow-2xl">
        404
      </div>

      <div className="space-y-2">
        <h1 className="font-heading font-extrabold text-3xl text-white">
          Level Not Found
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          The wiki page or game compendium you are looking for has been moved, archived, or doesn&apos;t exist yet.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <Home size={15} />
          <span>Return Home</span>
        </button>

        <button
          type="button"
          onClick={() => setCommandPaletteOpen(true)}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Search size={15} />
          <span>Search WikiGame</span>
        </button>
      </div>
    </div>
  );
};
