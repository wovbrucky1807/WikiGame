import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserAvatar } from '../common/UserAvatar';
import { Send, ThumbsUp, Trash2, Reply, MessageSquare } from 'lucide-react';

interface CommentsSectionProps {
  gameId: string;
}

export const CommentsSection: React.FC<CommentsSectionProps> = ({ gameId }) => {
  const { getCommentsForGame, addComment, likeComment, deleteComment, currentUser, setAuthModalOpen } = useApp();
  const [text, setText] = useState('');
  const [replyToId, setReplyToId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const comments = getCommentsForGame(gameId);

  // Separate parent comments and replies
  const rootComments = comments.filter(c => !c.parentId);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (!currentUser) {
      setAuthModalOpen(true);
      return;
    }

    addComment(gameId, text.trim());
    setText('');
  };

  const handlePostReply = (parentId: string) => {
    if (!replyText.trim()) return;

    if (!currentUser) {
      setAuthModalOpen(true);
      return;
    }

    addComment(gameId, replyText.trim(), parentId);
    setReplyText('');
    setReplyToId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare size={20} className="text-blue-400" />
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
            Wiki Discussions & Q&A
          </h2>
        </div>
        <span className="text-xs font-mono text-zinc-500">
          {comments.length} Messages
        </span>
      </div>

      {/* Post comment box */}
      <form onSubmit={handlePostComment} className="p-4 rounded-2xl bg-[#11141d] border border-zinc-800 space-y-3">
        <div className="flex items-center gap-3">
          <UserAvatar
            name={currentUser?.displayName || currentUser?.username || 'Guest'}
            avatar={currentUser?.avatar}
            size="sm"
          />
          <span className="text-xs font-medium text-zinc-300">
            {currentUser ? `Comment as @${currentUser.username}` : 'Join the discussion'}
          </span>
        </div>

        <div className="relative">
          <textarea
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={currentUser ? "Ask a question about lore, report a build, or share an Easter egg..." : "Log in to post a comment or question..."}
            className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <Send size={13} />
            <span>Post Comment</span>
          </button>
        </div>
      </form>

      {/* Comments Thread */}
      <div className="space-y-4">
        {rootComments.length > 0 ? (
          rootComments.map((comm) => {
            const replies = comments.filter(c => c.parentId === comm.id);
            const hasLiked = currentUser && comm.likedBy.includes(currentUser.id);
            const canDelete = currentUser && (currentUser.id === comm.userId || currentUser.role === 'admin');

            return (
              <div
                key={comm.id}
                className="p-4 rounded-2xl bg-[#11141d] border border-zinc-800 space-y-3"
              >
                {/* Main Comment Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <UserAvatar name={comm.username} avatar={comm.userAvatar} size="sm" />
                    <div>
                      <span className="font-semibold text-xs text-white">
                        @{comm.username}
                      </span>
                      <span className="text-[10px] text-zinc-500 block">
                        {comm.date}
                      </span>
                    </div>
                  </div>

                  {canDelete && (
                    <button
                      type="button"
                      onClick={() => deleteComment(comm.id)}
                      className="text-zinc-500 hover:text-rose-400 p-1 transition-colors"
                      title="Delete comment"
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>

                {/* Comment Body */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-1">
                  {comm.text}
                </p>

                {/* Action Bar: Like & Reply */}
                <div className="flex items-center gap-4 text-xs pt-1">
                  <button
                    type="button"
                    onClick={() => likeComment(comm.id)}
                    className={`flex items-center gap-1 font-medium transition-colors cursor-pointer ${
                      hasLiked ? 'text-blue-400' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <ThumbsUp size={12} className={hasLiked ? 'fill-blue-400' : ''} />
                    <span>{comm.likes}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setReplyToId(replyToId === comm.id ? null : comm.id)}
                    className="flex items-center gap-1 text-zinc-400 hover:text-white font-medium cursor-pointer"
                  >
                    <Reply size={12} />
                    <span>Reply</span>
                  </button>
                </div>

                {/* Reply Form */}
                {replyToId === comm.id && (
                  <div className="pt-2 pl-4 border-l-2 border-blue-500/30 space-y-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder={`Reply to @${comm.username}...`}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-hidden focus:border-blue-500"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setReplyToId(null)}
                        className="px-3 py-1 rounded text-xs text-zinc-400 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => handlePostReply(comm.id)}
                        className="px-3 py-1 rounded text-xs font-semibold bg-blue-600 text-white"
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                )}

                {/* Nested Replies */}
                {replies.length > 0 && (
                  <div className="pt-2 pl-4 space-y-3 border-l-2 border-zinc-800">
                    {replies.map((reply) => {
                      const replyHasLiked = currentUser && reply.likedBy.includes(currentUser.id);
                      const replyCanDelete = currentUser && (currentUser.id === reply.userId || currentUser.role === 'admin');

                      return (
                        <div key={reply.id} className="space-y-1 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/60">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <UserAvatar name={reply.username} avatar={reply.userAvatar} size="sm" />
                              <span className="font-semibold text-xs text-zinc-200">
                                @{reply.username}
                              </span>
                              <span className="text-[10px] text-zinc-500">
                                {reply.date}
                              </span>
                            </div>

                            {replyCanDelete && (
                              <button
                                type="button"
                                onClick={() => deleteComment(reply.id)}
                                className="text-zinc-500 hover:text-rose-400 p-1"
                              >
                                <Trash2 size={12} />
                              </button>
                            )}
                          </div>

                          <p className="text-xs text-zinc-300 leading-relaxed pl-1 pt-1">
                            {reply.text}
                          </p>

                          <div className="pt-1 flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => likeComment(reply.id)}
                              className={`flex items-center gap-1 text-[11px] ${
                                replyHasLiked ? 'text-blue-400' : 'text-zinc-400 hover:text-zinc-200'
                              }`}
                            >
                              <ThumbsUp size={11} className={replyHasLiked ? 'fill-blue-400' : ''} />
                              <span>{reply.likes}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center bg-zinc-900/40 rounded-xl border border-zinc-800 text-zinc-500">
            No discussions yet. Start the conversation!
          </div>
        )}
      </div>
    </div>
  );
};
