import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Sparkles, BookOpen, User, Sword, MapPin, Cpu, CheckCircle } from 'lucide-react';
import { WikiEdit } from '../../types';

export const ContributeModal: React.FC = () => {
  const { contributeModalGameId, setContributeModalGameId, getGameById, submitWikiEdit } = useApp();
  
  const [type, setType] = useState<WikiEdit['type']>('Guide');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!contributeModalGameId) return null;
  const game = getGameById(contributeModalGameId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    submitWikiEdit({
      gameId: contributeModalGameId,
      gameTitle: game?.title || 'Game',
      type,
      title: title.trim(),
      content: content.trim()
    });

    setTitle('');
    setContent('');
    setContributeModalGameId(null);
  };

  const types: Array<{ label: WikiEdit['type']; icon: any }> = [
    { label: 'Guide', icon: BookOpen },
    { label: 'Character', icon: User },
    { label: 'Item', icon: Sword },
    { label: 'Map', icon: MapPin },
    { label: 'Gameplay', icon: Sparkles },
    { label: 'System Requirements', icon: Cpu }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={() => setContributeModalGameId(null)} />

      <div className="relative w-full max-w-lg bg-[#0f121a] border border-zinc-700/80 rounded-2xl shadow-2xl p-6 z-10 space-y-5">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-blue-400" />
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Contribute to Wiki: {game?.title}
              </h3>
              <p className="text-xs text-zinc-400">
                Help the gaming community with updated lore, item stats, or guides.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setContributeModalGameId(null)}
            className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Contribution Category */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Contribution Section
            </label>
            <div className="grid grid-cols-3 gap-2">
              {types.map((t) => {
                const Icon = t.icon;
                const isSelected = type === t.label;
                return (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setType(t.label)}
                    className={`flex items-center gap-1.5 p-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer text-left ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-400 border-blue-500/50'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200'
                    }`}
                  >
                    <Icon size={14} />
                    <span className="truncate">{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
              Title / Proposed Change Summary
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Added Boss Weakness & Strategy or Updated Weapon Stats"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
              Content / Markdown Details
            </label>
            <textarea
              rows={5}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write the full guide, character abilities, or stats change. Markdown formatting is supported..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2 border-t border-zinc-800">
            <button
              type="button"
              onClick={() => setContributeModalGameId(null)}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-zinc-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <CheckCircle size={14} />
              <span>Submit Contribution</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
