import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SAMPLE_USERS } from '../data/sampleUsers';
import { UserAvatar } from '../components/common/UserAvatar';
import { GameCard } from '../components/common/GameCard';
import { RatingStars } from '../components/common/RatingStars';
import { Heart, Star, Sparkles, Calendar, Shield, Edit3, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface UserProfilePageProps {
  username: string;
  onNavigate: (path: string) => void;
}

export const UserProfilePage: React.FC<UserProfilePageProps> = ({ username, onNavigate }) => {
  const { currentUser, games, favorites, userRatings, wikiEdits, setAuthMode, setAuthModalOpen } = useApp();

  const [activeTab, setActiveTab] = useState<'favorites' | 'ratings' | 'contributions'>('favorites');

  // Find user from sample users or current user
  const isOwnProfile = currentUser && currentUser.username.toLowerCase() === username.toLowerCase();
  const profileUser = isOwnProfile
    ? currentUser
    : SAMPLE_USERS.find(u => u.username.toLowerCase() === username.toLowerCase()) || {
        id: 'guest',
        username,
        displayName: username,
        email: `${username}@example.com`,
        role: 'member' as const,
        reputation: 120,
        joinedDate: 'Jan 2024',
        contributionsCount: 3,
        favorites: [],
        ratedGames: {}
      };

  // Get user's favorites
  const userFavoriteIds = isOwnProfile ? favorites : (profileUser.favorites || []);
  const favoriteGames = games.filter(g => userFavoriteIds.includes(g.id));

  // Get user's rated games
  const ratingsMap = isOwnProfile ? userRatings : (profileUser.ratedGames || {});
  const ratedGamesList = Object.entries(ratingsMap).map(([gameId, score]) => {
    const game = games.find(g => g.id === gameId);
    return { game, score };
  }).filter(item => item.game !== undefined);

  // Get user's contributions
  const userEdits = wikiEdits.filter(e => e.userId === profileUser.id || e.username.toLowerCase() === profileUser.username.toLowerCase());

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
        <button type="button" onClick={() => onNavigate('/')} className="hover:text-white">Home</button>
        <span>/</span>
        <button type="button" onClick={() => onNavigate('/community')} className="hover:text-white">Community</button>
        <span>/</span>
        <span className="text-blue-400 font-semibold">@{profileUser.username}</span>
      </div>

      {/* Profile Card Banner */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-[#11141d] border border-zinc-800 space-y-6 shadow-2xl overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <UserAvatar
              name={profileUser.displayName}
              avatar={profileUser.avatar}
              role={profileUser.role}
              size="xl"
              showBadge
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {profileUser.displayName}
                </h1>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  {profileUser.role}
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-mono">
                @{profileUser.username}
              </p>

              {profileUser.bio && (
                <p className="text-xs sm:text-sm text-zinc-300 max-w-xl pt-1 leading-relaxed">
                  {profileUser.bio}
                </p>
              )}
            </div>
          </div>

          {/* Action buttons / edit profile */}
          <div className="flex items-center gap-3">
            {isOwnProfile && (
              <button
                type="button"
                onClick={() => {
                  setAuthMode('profile');
                  setAuthModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Edit3 size={14} />
                <span>Edit Profile</span>
              </button>
            )}
          </div>
        </div>

        {/* User Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-zinc-800/80 text-xs">
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-500 uppercase tracking-wider block text-[10px] font-semibold mb-1">
              Reputation
            </span>
            <span className="font-heading font-bold text-lg text-amber-400">
              {profileUser.reputation.toLocaleString()}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-500 uppercase tracking-wider block text-[10px] font-semibold mb-1">
              Contributions
            </span>
            <span className="font-heading font-bold text-lg text-blue-400">
              {profileUser.contributionsCount || userEdits.length} Edits
            </span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-500 uppercase tracking-wider block text-[10px] font-semibold mb-1">
              Favorites
            </span>
            <span className="font-heading font-bold text-lg text-rose-400">
              {userFavoriteIds.length} Games
            </span>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-500 uppercase tracking-wider block text-[10px] font-semibold mb-1">
              Member Since
            </span>
            <span className="font-medium text-sm text-zinc-300">
              {profileUser.joinedDate || '2024'}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('favorites')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'favorites'
                ? 'bg-blue-600 text-white'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <Heart size={14} />
            <span>Saved Favorites ({favoriteGames.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ratings')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'ratings'
                ? 'bg-blue-600 text-white'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <Star size={14} />
            <span>Ratings Given ({ratedGamesList.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('contributions')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'contributions'
                ? 'bg-blue-600 text-white'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <Sparkles size={14} />
            <span>Wiki Edits ({userEdits.length})</span>
          </button>
        </div>

        {/* Tab 1: Favorites */}
        {activeTab === 'favorites' && (
          <div>
            {favoriteGames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favoriteGames.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onSelectGame={(slug) => onNavigate(`/games/${slug}`)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-[#11141d] rounded-2xl border border-zinc-800 text-zinc-500">
                No favorite games added to bookmarks yet.
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Ratings */}
        {activeTab === 'ratings' && (
          <div className="space-y-3">
            {ratedGamesList.length > 0 ? (
              ratedGamesList.map(({ game, score }) => (
                <div
                  key={game?.id}
                  onClick={() => game && onNavigate(`/games/${game.slug}`)}
                  className="p-4 rounded-xl bg-[#11141d] hover:bg-zinc-800/80 border border-zinc-800 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={game?.coverImage}
                      alt={game?.title}
                      className="w-12 h-14 rounded-lg object-cover bg-zinc-800"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white hover:text-blue-400">
                        {game?.title}
                      </h4>
                      <p className="text-xs text-zinc-500">{game?.developer}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-zinc-400 block mb-0.5">Rated</span>
                    <RatingStars score={score} size="sm" />
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center bg-[#11141d] rounded-2xl border border-zinc-800 text-zinc-500">
                No games rated by this user yet.
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Contributions */}
        {activeTab === 'contributions' && (
          <div className="space-y-3">
            {userEdits.length > 0 ? (
              userEdits.map((edit) => (
                <div
                  key={edit.id}
                  className="p-4 rounded-xl bg-[#11141d] border border-zinc-800 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-zinc-800 text-blue-300">
                        {edit.type}
                      </span>
                      <span className="text-xs text-zinc-400">for <strong>{edit.gameTitle}</strong></span>
                    </div>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={12} /> {edit.status}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm text-white">{edit.title}</h4>
                  <p className="text-xs text-zinc-400">{edit.content}</p>
                </div>
              ))
            ) : (
              <div className="p-12 text-center bg-[#11141d] rounded-2xl border border-zinc-800 text-zinc-500">
                No wiki contributions submitted yet.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
