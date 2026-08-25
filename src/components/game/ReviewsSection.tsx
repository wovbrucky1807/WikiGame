import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { RatingStars } from '../common/RatingStars';
import { UserAvatar } from '../common/UserAvatar';
import { ThumbsUp, Trash2, PenLine, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

interface ReviewsSectionProps {
  gameId: string;
  gameTitle: string;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ gameId, gameTitle }) => {
  const { getReviewsForGame, addReview, likeReview, deleteReview, currentUser, setAuthModalOpen } = useApp();

  const reviews = getReviewsForGame(gameId);

  // Write Review State
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(10);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [hours, setHours] = useState<number>(20);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !text.trim()) return;

    addReview(gameId, rating, title.trim(), text.trim(), Number(hours) || 10);
    setTitle('');
    setText('');
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
            Community Player Reviews
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Read honest opinions and gameplay impressions from other players.
          </p>
        </div>

        {!showForm && (
          <button
            type="button"
            onClick={() => {
              if (!currentUser) {
                setAuthModalOpen(true);
                return;
              }
              setShowForm(true);
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <PenLine size={14} />
            <span>Write a Review</span>
          </button>
        )}
      </div>

      {/* Write Review Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-[#11141d] border border-blue-500/40 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
              <Sparkles size={16} className="text-blue-400" />
              Your Review for {gameTitle}
            </h3>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-xs text-zinc-400 hover:text-white"
            >
              Cancel
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Rating (1 to 10)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <span className="font-mono font-bold text-base text-amber-400 min-w-[3rem]">
                  {rating}/10
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Approximate Hours Played
              </label>
              <input
                type="number"
                min="1"
                max="5000"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-hidden focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
              Review Headline
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Masterpiece storyline with unforgettable open world mechanics"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-hidden focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
              Detailed Experience & Gameplay Breakdown
            </label>
            <textarea
              rows={4}
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share what you liked, disliked, performance tips, or replayability value..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="submit"
              className="px-5 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all cursor-pointer"
            >
              Publish Review
            </button>
          </div>
        </form>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.length > 0 ? (
          reviews.map((rev) => {
            const hasLiked = currentUser && rev.likedBy.includes(currentUser.id);
            const isAuthor = currentUser && (currentUser.id === rev.userId || currentUser.role === 'admin');

            return (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-[#11141d] border border-zinc-800/80 hover:border-zinc-700/80 transition-colors space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <UserAvatar name={rev.username} avatar={rev.userAvatar} size="md" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white">
                          @{rev.username}
                        </span>
                        {rev.verifiedPlayer && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-blue-400 font-medium bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/40">
                            <CheckCircle2 size={10} /> Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
                        <span>{rev.date}</span>
                        {rev.hoursPlayed && (
                          <>
                            <span>&bull;</span>
                            <span className="flex items-center gap-1">
                              <Clock size={11} /> {rev.hoursPlayed} hrs on record
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <RatingStars score={rev.rating} size="sm" />
                    {isAuthor && (
                      <button
                        type="button"
                        onClick={() => deleteReview(rev.id)}
                        className="text-zinc-500 hover:text-rose-400 p-1 transition-colors"
                        title="Delete review"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </div>

                <div className="pt-1">
                  <h4 className="font-heading font-bold text-base text-zinc-100 mb-1">
                    {rev.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {rev.text}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-zinc-800/60 text-xs">
                  <button
                    type="button"
                    onClick={() => likeReview(rev.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium border transition-colors cursor-pointer ${
                      hasLiked
                        ? 'bg-blue-600/20 text-blue-400 border-blue-500/50'
                        : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border-zinc-800'
                    }`}
                  >
                    <ThumbsUp size={12} className={hasLiked ? 'fill-blue-400' : ''} />
                    <span>Helpful ({rev.likes})</span>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center bg-zinc-900/40 rounded-xl border border-zinc-800 text-zinc-500">
            No player reviews written yet. Be the first to share your thoughts!
          </div>
        )}
      </div>
    </div>
  );
};
