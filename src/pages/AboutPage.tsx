import React from 'react';
import { Shield, Sparkles, Terminal, Globe, Heart, CheckCircle2, Code2, Database, Zap } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
          <button type="button" onClick={() => onNavigate('/')} className="hover:text-white">Home</button>
          <span>/</span>
          <span className="text-blue-400 font-semibold">About WikiGame</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          About WikiGame
        </h1>
        <p className="text-base text-zinc-300 leading-relaxed">
          The 100% free, community-powered gaming encyclopedia built with modern web technologies, zero subscription requirements, and transparent peer contributions.
        </p>
      </div>

      {/* Zero Cost Philosophy */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#11141d] border border-blue-500/30 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-blue-400">
          <Sparkles size={22} />
          <h2 className="font-heading font-bold text-xl text-white">
            100% Free & Open Tier Commitment
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          WikiGame was designed from the ground up to operate with zero compulsory monthly hosting costs. It does not demand paid commercial domain names, expensive rate-limited APIs, or proprietary databases.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
            <span className="font-semibold text-white block mb-1">Zero Paid APIs</span>
            <span className="text-zinc-400">Self-contained verified compendium and peer-submitted edits.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
            <span className="font-semibold text-white block mb-1">Free Tier Deployment</span>
            <span className="text-zinc-400">Instant static / SSR export ready for Vercel Free Tier.</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
            <span className="font-semibold text-white block mb-1">Persistent Storage</span>
            <span className="text-zinc-400">Local client persistence with optional Firebase Free Firestore sync.</span>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="space-y-4">
        <h2 className="font-heading font-bold text-2xl text-white flex items-center gap-2">
          <Code2 size={24} className="text-blue-400" />
          <span>Technology Architecture</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#11141d] border border-zinc-800 space-y-1.5">
            <div className="font-semibold text-white text-sm">React 19 & TypeScript</div>
            <p className="text-zinc-400">Modern component state, type-safe models for games, characters, and items.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#11141d] border border-zinc-800 space-y-1.5">
            <div className="font-semibold text-white text-sm">Tailwind CSS 4</div>
            <p className="text-zinc-400">High-contrast dark gaming aesthetic with responsive layouts and smooth micro-interactions.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#11141d] border border-zinc-800 space-y-1.5">
            <div className="font-semibold text-white text-sm">Lucide Vector Icons</div>
            <p className="text-zinc-400">Clean, crisp vector glyphs without bulky graphic asset overhead.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#11141d] border border-zinc-800 space-y-1.5">
            <div className="font-semibold text-white text-sm">Command Palette & Instant Filter</div>
            <p className="text-zinc-400">Keyboard shortcuts (Ctrl+K) and sub-millisecond local search indexing.</p>
          </div>
        </div>
      </div>

      {/* Deployment Instructions for User */}
      <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
        <div className="flex items-center gap-2 text-white font-heading font-bold text-base">
          <Terminal size={18} className="text-emerald-400" />
          <span>Local Development & Free Production Deployment</span>
        </div>
        <p className="text-xs text-zinc-400">
          In development, this app runs locally at <code className="text-blue-300 font-mono">http://localhost:3000</code>. To deploy to Vercel Free Tier:
        </p>
        <div className="p-3 rounded-lg bg-black/80 font-mono text-xs text-zinc-300 space-y-1">
          <p className="text-zinc-500"># 1. Build static production bundle</p>
          <p className="text-emerald-400">npm run build</p>
          <p className="text-zinc-500 pt-2"># 2. Deploy to Vercel (Free)</p>
          <p className="text-emerald-400">vercel deploy</p>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="space-y-4">
        <h2 className="font-heading font-bold text-2xl text-white flex items-center gap-2">
          <Heart size={24} className="text-rose-400" />
          <span>Community Guidelines</span>
        </h2>
        <div className="space-y-2 text-xs text-zinc-300 leading-relaxed bg-[#11141d] p-5 rounded-2xl border border-zinc-800">
          <p className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Accurate Information:</strong> Double-check boss vulnerabilities, drop percentages, and weapon stat tiers before publishing.</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>No Spoilers in Headings:</strong> Place late-game story revelations inside designated narrative tabs or spoiler tags.</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Constructive Reviews:</strong> Share honest gameplay feedback including performance tips, difficulty curves, and build synergy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
