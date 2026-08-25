import React from 'react';
import { useApp } from '../context/AppContext';
import { UserAvatar } from '../components/common/UserAvatar';
import { Trophy, Sparkles, BookOpen, Clock, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Flame, MessageSquare } from 'lucide-react';
import { SAMPLE_USERS } from '../data/sampleUsers';

interface CommunityPageProps {
  onNavigate: (path: string) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
  const { wikiEdits, games, currentUser, setAuthModalOpen } = useApp();

  // Top contributors list
  const topContributors = [...SAMPLE_USERS].sort((a, b) => b.reputation - a.reputation);

  // Extract all guides across games
  const allGuides = games.flatMap(g => (g.guides || []).map(guide => ({
    ...guide,
    gameTitle: g.title,
    gameSlug: g.slug
  })));

  return (
    <div className="space-y-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-medium">
            <button type="button" onClick={() => onNavigate('/')} className="hover:text-white">Home</button>
            <span>/</span>
            <span className="text-blue-400 font-semibold">Community Hub</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-center gap-3">
            <Sparkles size={32} className="text-blue-400" />
            <span>WikiGame Community & Contributors</span>
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Discover active contributors, explore player guides, and track community wiki edits.
          </p>
        </div>

        {!currentUser && (
          <button
            type="button"
            onClick={() => setAuthModalOpen(true)}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all self-start sm:self-auto cursor-pointer"
          >
            Join the Community
          </button>
        )}
      </div>

      {/* Grid: Contributors Leaderboard & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Leaderboard (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-bold text-lg text-white flex items-center gap-2">
              <Trophy size={18} className="text-amber-400" />
              <span>Top Wiki Contributors</span>
            </h2>
            <span className="text-xs text-zinc-500 font-mono">Ranked by REP</span>
          </div>

          <div className="space-y-3">
            {topContributors.map((user, idx) => (
              <div
                key={user.id}
                onClick={() => onNavigate(`/users/${user.username}`)}
                className="p-4 rounded-2xl bg-[#11141d] border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all flex items-center justify-between gap-3 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 text-center font-heading font-bold text-sm ${
                    idx === 0 ? 'text-amber-400' : idx === 1 ? 'text-zinc-300' : idx === 2 ? 'text-amber-600' : 'text-zinc-500'
                  }`}>
                    #{idx + 1}
                  </span>
                  <UserAvatar name={user.displayName} avatar={user.avatar} role={user.role} size="md" showBadge />
                  <div>
                    <h3 className="font-heading font-bold text-sm text-white hover:text-blue-400 transition-colors">
                      {user.displayName}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      @{user.username} &bull; {user.contributionsCount} Edits
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono font-bold text-sm text-amber-400 block">
                    {user.reputation.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                    Reputation
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Recent Wiki Edits Audit (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-bold text-lg text-white flex items-center gap-2">
              <Clock size={18} className="text-blue-400" />
              <span>Recent Wiki Contributions</span>
            </h2>
            <span className="text-xs text-zinc-500 font-mono">Live Activity</span>
          </div>

          <div className="space-y-3">
            {wikiEdits.map((edit) => (
              <div
                key={edit.id}
                className="p-4 rounded-2xl bg-[#11141d] border border-zinc-800 space-y-2.5 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-zinc-800 text-blue-300 border border-zinc-700">
                      {edit.type}
                    </span>
                    <span className="text-xs text-zinc-400">on <strong className="text-white">{edit.gameTitle}</strong></span>
                  </div>

                  {edit.status === 'Approved' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      <CheckCircle2 size={11} /> Approved
                    </span>
                  ) : edit.status === 'Rejected' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                      <XCircle size={11} /> Rejected
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      <Clock size={11} /> Pending Review
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    {edit.title}
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-2 mt-0.5">
                    {edit.content}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-zinc-800/60">
                  <span>Contributed by <strong className="text-zinc-300">@{edit.username}</strong></span>
                  <span>{edit.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Community Guides */}
      <div className="space-y-6 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
            <BookOpen size={22} className="text-blue-400" />
            <span>Popular Guides & Builds</span>
          </h2>
          <span className="text-xs text-zinc-400">Written by veteran players</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allGuides.slice(0, 6).map((guide) => (
            <div
              key={guide.id}
              onClick={() => onNavigate(`/games/${guide.gameSlug}#guides`)}
              className="p-5 rounded-2xl bg-[#11141d] border border-zinc-800/80 hover:border-blue-500/40 cursor-pointer transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                    {guide.category}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">{guide.readTime}</span>
                </div>

                <h3 className="font-heading font-bold text-base text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                  {guide.title}
                </h3>

                <p className="text-xs text-zinc-400 line-clamp-2">
                  {guide.content}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs border-t border-zinc-800/60 mt-4">
                <span className="text-zinc-400 font-medium">{guide.gameTitle}</span>
                <span className="text-blue-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read Guide <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
