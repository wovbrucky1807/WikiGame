import React from 'react';
import { Heart, Sparkles, Github, Shield, Terminal, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#07090d] border-t border-zinc-800/80 text-zinc-400 mt-20 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-zinc-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="text-left font-heading font-extrabold text-2xl tracking-tight text-white flex items-center gap-1 cursor-pointer focus:outline-hidden"
            >
              <span>Wiki</span>
              <span className="text-blue-500">Game</span>
            </button>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              The free gaming encyclopedia created for gamers by gamers. Discover characters, lore, gameplay walkthroughs, maps, weapon stats, and community guides with zero paid walls.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono bg-blue-950/40 text-blue-400 border border-blue-800/40 px-2.5 py-1 rounded-md">
                <Sparkles size={13} /> 100% Free & Open Tier
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono bg-zinc-900 text-zinc-400 border border-zinc-800 px-2.5 py-1 rounded-md">
                <Globe size={13} /> Vercel Ready
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-zinc-300">
              Encyclopedia
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/games')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  All Games Database
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/genres')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Browse Genres
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/platforms')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Supported Platforms
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/favorites')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Saved Favorites
                </button>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-zinc-300">
              Community & Wiki
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/community')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Community Hub
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/community')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Wiki Contributions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  About Project & Tech
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/admin')}
                  className="hover:text-amber-400 transition-colors text-left text-amber-500/80"
                >
                  Admin Moderator Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-zinc-300">
              Zero-Cost Architecture
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Engineered with modern React, TypeScript, Tailwind CSS, and lightweight persistent local state. Deployable directly to Vercel Free Tier without required paid APIs.
            </p>
            <div className="text-[11px] font-mono text-zinc-500 pt-1">
              PORT: 3000 &bull; Local / Prod
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="font-semibold text-zinc-300">WikiGame</span>
            <span>&bull; The encyclopedia for gamers.</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span>Zero Paid API Requirement</span>
            <span>&bull;</span>
            <span className="text-blue-400/90 font-medium">Community Driven</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
