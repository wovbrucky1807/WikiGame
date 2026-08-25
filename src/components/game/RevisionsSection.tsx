import React from 'react';
import { useApp } from '../../context/AppContext';
import { History, CheckCircle, Clock, XCircle, Sparkles, User } from 'lucide-react';
import { UserAvatar } from '../common/UserAvatar';

interface RevisionsSectionProps {
  gameId: string;
  gameTitle: string;
  onContribute: () => void;
}

export const RevisionsSection: React.FC<RevisionsSectionProps> = ({ gameId, gameTitle, onContribute }) => {
  const { wikiEdits } = useApp();

  const gameEdits = wikiEdits.filter(e => e.gameId === gameId);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
            <History size={20} className="text-blue-400" />
            <span>Wiki Revision History & Changelog</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Transparent audit log of edits and community contributions for {gameTitle}.
          </p>
        </div>

        <button
          type="button"
          onClick={onContribute}
          className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer self-start sm:self-auto"
        >
          Propose an Edit
        </button>
      </div>

      <div className="space-y-3">
        {gameEdits.length > 0 ? (
          gameEdits.map((edit) => (
            <div
              key={edit.id}
              className="p-4 rounded-xl bg-[#11141d] border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-start sm:items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 text-blue-400 shrink-0">
                  <Sparkles size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">{edit.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {edit.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 mt-1">
                    <span>Contributed by <strong className="text-zinc-200">@{edit.username}</strong></span>
                    <span>&bull;</span>
                    <span>{edit.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                {edit.status === 'Approved' ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                    <CheckCircle size={12} /> Approved & Live
                  </span>
                ) : edit.status === 'Rejected' ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/30 px-2.5 py-1 rounded-md">
                    <XCircle size={12} /> Rejected
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-md">
                    <Clock size={12} /> Pending Review
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center bg-zinc-900/40 rounded-xl border border-zinc-800 text-zinc-500">
            Initial verified baseline dataset active. No additional revisions logged.
          </div>
        )}
      </div>
    </div>
  );
};
