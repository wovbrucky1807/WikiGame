import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { GameBanner } from '../components/game/GameBanner';
import { CharactersSection } from '../components/game/CharactersSection';
import { MapsSection } from '../components/game/MapsSection';
import { ItemsSection } from '../components/game/ItemsSection';
import { GuidesSection } from '../components/game/GuidesSection';
import { RequirementsSection } from '../components/game/RequirementsSection';
import { GallerySection } from '../components/game/GallerySection';
import { ReviewsSection } from '../components/game/ReviewsSection';
import { CommentsSection } from '../components/game/CommentsSection';
import { RevisionsSection } from '../components/game/RevisionsSection';
import {
  BookOpen,
  User,
  MapPin,
  Sword,
  Compass,
  Cpu,
  Image as ImageIcon,
  Star,
  MessageSquare,
  History,
  Sparkles,
  ArrowLeft,
  Share2,
  ExternalLink
} from 'lucide-react';

interface GameDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const GameDetailPage: React.FC<GameDetailPageProps> = ({ slug, onNavigate }) => {
  const { getGameBySlug, setContributeModalGameId, getReviewsForGame, getCommentsForGame } = useApp();
  const game = getGameBySlug(slug);

  const [activeTab, setActiveTab] = useState<string>('overview');

  // Handle URL hash if present (e.g. #characters)
  useEffect(() => {
    const hash = window.location.hash;
    const parts = hash.split('#');
    if (parts.length > 2) {
      const section = parts[2];
      if (section) setActiveTab(section);
    }
  }, [slug]);

  if (!game) {
    return (
      <div className="py-20 text-center space-y-4 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto text-2xl font-bold">
          ?
        </div>
        <h2 className="font-heading font-bold text-2xl text-white">Game Wiki Not Found</h2>
        <p className="text-sm text-zinc-400">
          The requested game wiki page &ldquo;{slug}&rdquo; does not exist in the database or may have been moved.
        </p>
        <button
          type="button"
          onClick={() => onNavigate('/games')}
          className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white inline-flex items-center gap-2"
        >
          <ArrowLeft size={14} /> Back to Games Database
        </button>
      </div>
    );
  }

  const reviews = getReviewsForGame(game.id);
  const comments = getCommentsForGame(game.id);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'characters', label: 'Characters', icon: User, count: game.characters?.length },
    { id: 'maps', label: 'Maps & World', icon: MapPin, count: game.maps?.length },
    { id: 'items', label: 'Weapons & Items', icon: Sword, count: game.items?.length },
    { id: 'guides', label: 'Guides & Builds', icon: Compass, count: game.guides?.length },
    { id: 'requirements', label: 'PC Specs', icon: Cpu },
    { id: 'gallery', label: 'Gallery & Video', icon: ImageIcon, count: game.screenshots?.length },
    { id: 'reviews', label: 'Reviews', icon: Star, count: reviews.length },
    { id: 'discussions', label: 'Discussions', icon: MessageSquare, count: comments.length },
    { id: 'revisions', label: 'History', icon: History }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Game Header Banner */}
      <GameBanner
        game={game}
        onContribute={() => setContributeModalGameId(game.id)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Tab Navigation Ribbon */}
        <div className="border-b border-zinc-800/80 sticky top-16 z-30 bg-[#090b10]/95 backdrop-blur-md pt-2">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && tab.count > 0 && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Containers */}
        <div className="min-h-[400px]">
          {/* TAB: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Lore & Gameplay Overview */}
              <div className="lg:col-span-8 space-y-6">
                <div className="p-6 rounded-2xl bg-[#11141d] border border-zinc-800/80 space-y-4">
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
                    Game Overview & Lore
                  </h2>
                  <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
                    {game.description}
                  </p>
                </div>

                {/* Quick Highlights / Featured Characters preview */}
                {game.characters && game.characters.length > 0 && (
                  <div className="p-6 rounded-2xl bg-[#11141d] border border-zinc-800/80 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-lg text-white">
                        Featured Cast
                      </h3>
                      <button
                        type="button"
                        onClick={() => setActiveTab('characters')}
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                      >
                        View all ({game.characters.length})
                      </button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {game.characters.slice(0, 3).map((char) => (
                        <div
                          key={char.id}
                          onClick={() => setActiveTab('characters')}
                          className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 cursor-pointer flex items-center gap-2.5 transition-colors"
                        >
                          <img
                            src={char.image}
                            alt={char.name}
                            className="w-10 h-10 rounded-lg object-cover bg-zinc-800 shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="font-semibold text-xs text-white truncate">{char.name}</div>
                            <div className="text-[11px] text-zinc-400 truncate">{char.role}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Top Guide preview */}
                {game.guides && game.guides.length > 0 && (
                  <div className="p-6 rounded-2xl bg-[#11141d] border border-zinc-800/80 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-lg text-white">
                        Top Community Guide
                      </h3>
                      <button
                        type="button"
                        onClick={() => setActiveTab('guides')}
                        className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                      >
                        View all ({game.guides.length})
                      </button>
                    </div>
                    <div
                      onClick={() => setActiveTab('guides')}
                      className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/40 cursor-pointer transition-colors space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                          {game.guides[0].category}
                        </span>
                        <span className="text-xs text-zinc-400">&bull; {game.guides[0].readTime}</span>
                      </div>
                      <h4 className="font-heading font-bold text-base text-white">
                        {game.guides[0].title}
                      </h4>
                      <p className="text-xs text-zinc-400 line-clamp-2">
                        {game.guides[0].content}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Metadata & Links */}
              <div className="lg:col-span-4 space-y-6">
                {/* Metacritic & Rating Card */}
                <div className="p-5 rounded-2xl bg-[#11141d] border border-zinc-800/80 space-y-4">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-zinc-400">
                    Community & Critical Score
                  </h3>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <div>
                      <span className="text-xs text-zinc-400 block">Metacritic Score</span>
                      <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                        {game.metacriticScore || 96}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-zinc-400 block">Wiki Rating</span>
                      <span className="text-2xl font-extrabold text-amber-400 font-mono">
                        {game.rating.toFixed(1)}/10
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs pt-2">
                    <div className="flex justify-between py-1.5 border-b border-zinc-800">
                      <span className="text-zinc-400">Developer</span>
                      <span className="font-semibold text-zinc-200">{game.developer}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-zinc-800">
                      <span className="text-zinc-400">Publisher</span>
                      <span className="font-semibold text-zinc-200">{game.publisher}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-zinc-800">
                      <span className="text-zinc-400">Initial Release</span>
                      <span className="font-semibold text-zinc-200">{game.releaseDate}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-zinc-800">
                      <span className="text-zinc-400">Engine / Tech</span>
                      <span className="font-semibold text-zinc-200">Proprietary / High Performance</span>
                    </div>
                  </div>
                </div>

                {/* External links */}
                <div className="p-5 rounded-2xl bg-[#11141d] border border-zinc-800/80 space-y-3">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-zinc-400">
                    Useful Links
                  </h3>
                  <div className="space-y-2 text-xs">
                    {game.steamUrl && (
                      <a
                        href={game.steamUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
                      >
                        <span>Steam Store Page</span>
                        <ExternalLink size={14} className="text-zinc-500" />
                      </a>
                    )}
                    {game.officialWebsite && (
                      <a
                        href={game.officialWebsite}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
                      >
                        <span>Official Publisher Website</span>
                        <ExternalLink size={14} className="text-zinc-500" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: CHARACTERS */}
          {activeTab === 'characters' && (
            <CharactersSection characters={game.characters || []} gameTitle={game.title} />
          )}

          {/* TAB: MAPS */}
          {activeTab === 'maps' && (
            <MapsSection maps={game.maps || []} gameTitle={game.title} />
          )}

          {/* TAB: ITEMS */}
          {activeTab === 'items' && (
            <ItemsSection items={game.items || []} gameTitle={game.title} />
          )}

          {/* TAB: GUIDES */}
          {activeTab === 'guides' && (
            <GuidesSection
              guides={game.guides || []}
              gameTitle={game.title}
              onNewGuideClick={() => setContributeModalGameId(game.id)}
            />
          )}

          {/* TAB: REQUIREMENTS */}
          {activeTab === 'requirements' && (
            <RequirementsSection requirements={game.systemRequirements} gameTitle={game.title} />
          )}

          {/* TAB: GALLERY */}
          {activeTab === 'gallery' && (
            <GallerySection
              screenshots={game.screenshots || []}
              youtubeTrailerId={game.youtubeTrailerId}
              gameTitle={game.title}
            />
          )}

          {/* TAB: REVIEWS */}
          {activeTab === 'reviews' && (
            <ReviewsSection gameId={game.id} gameTitle={game.title} />
          )}

          {/* TAB: DISCUSSIONS */}
          {activeTab === 'discussions' && (
            <CommentsSection gameId={game.id} />
          )}

          {/* TAB: REVISIONS */}
          {activeTab === 'revisions' && (
            <RevisionsSection
              gameId={game.id}
              gameTitle={game.title}
              onContribute={() => setContributeModalGameId(game.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
