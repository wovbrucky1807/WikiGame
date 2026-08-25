import React, { useState } from 'react';
import { GameGuide } from '../../types';
import { BookOpen, ThumbsUp, Clock, Calendar, User, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { UserAvatar } from '../common/UserAvatar';

interface GuidesSectionProps {
  guides: GameGuide[];
  gameTitle: string;
  onNewGuideClick?: () => void;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ guides, gameTitle, onNewGuideClick }) => {
  const [expandedGuideId, setExpandedGuideId] = useState<string | null>(guides[0]?.id || null);
  const [likedGuides, setLikedGuides] = useState<Record<string, boolean>>({});

  if (!guides || guides.length === 0) {
    return (
      <div className="p-8 text-center bg-zinc-900/40 rounded-xl border border-zinc-800 text-zinc-500">
        No community guides published for {gameTitle} yet. Be the first to submit a guide!
      </div>
    );
  }

  const toggleLike = (guideId: string) => {
    setLikedGuides(prev => ({ ...prev, [guideId]: !prev[guideId] }));
  };

  const getCategoryColor = (cat: GameGuide['category']) => {
    switch (cat) {
      case 'Beginner Guide':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Best Builds':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Best Weapons':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'How to Level Up':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'Tips & Tricks':
      default:
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
            Community Guides & Walkthroughs
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Proven strategies, beginner tips, weapon rankings, and optimal builds.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {guides.map((guide) => {
          const isExpanded = expandedGuideId === guide.id;
          const isLiked = !!likedGuides[guide.id];
          const currentLikes = guide.likes + (isLiked ? 1 : 0);

          return (
            <div
              key={guide.id}
              className="bg-[#11141d] border border-zinc-800/80 hover:border-zinc-700 rounded-xl overflow-hidden shadow-md transition-colors"
            >
              {/* Header Accordion Bar */}
              <div
                onClick={() => setExpandedGuideId(isExpanded ? null : guide.id)}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-zinc-800/30 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded border ${getCategoryColor(guide.category)}`}>
                      {guide.category}
                    </span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <Clock size={12} /> {guide.readTime}
                    </span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <Calendar size={12} /> {guide.date}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-blue-400">
                    {guide.title}
                  </h3>

                  <div className="flex items-center gap-2 pt-1">
                    <UserAvatar name={guide.author} avatar={guide.authorAvatar} size="sm" />
                    <span className="text-xs text-zinc-300 font-medium">
                      by @{guide.author}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(guide.id);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      isLiked
                        ? 'bg-blue-600/20 text-blue-400 border-blue-500/50'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white border-zinc-800'
                    }`}
                  >
                    <ThumbsUp size={13} className={isLiked ? 'fill-blue-400' : ''} />
                    <span>{currentLikes}</span>
                  </button>

                  <div className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
              </div>

              {/* Expandable Content Area */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-zinc-800/80 bg-zinc-950/40 text-sm text-zinc-300 leading-relaxed space-y-4">
                  <div className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:text-white prose-h3:text-base prose-h3:font-bold prose-h3:mt-4 prose-h3:mb-2 prose-p:my-2 prose-p:text-zinc-300 prose-ul:list-disc prose-ul:pl-5 text-xs sm:text-sm">
                    {guide.content.split('\n\n').map((paragraph, idx) => {
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h4 key={idx} className="font-heading font-bold text-sm sm:text-base text-blue-400 pt-2">
                            {paragraph.replace('### ', '')}
                          </h4>
                        );
                      }
                      if (paragraph.startsWith('- ')) {
                        return (
                          <ul key={idx} className="list-disc list-inside space-y-1 text-zinc-300">
                            {paragraph.split('\n').map((line, lidx) => (
                              <li key={lidx}>{line.replace('- ', '')}</li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={idx} className="text-zinc-300 leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
