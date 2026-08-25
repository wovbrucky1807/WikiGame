import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Shield, CheckCircle2, XCircle, Clock, Trash2, Plus, Edit, Users, Gamepad2, Database, Sparkles, Layers, Cpu } from 'lucide-react';
import { Game, PlatformType, GameGenre } from '../types';
import { GENRES_DATA } from '../data/genres';
import { PLATFORMS_DATA } from '../data/platforms';
import { SAMPLE_USERS } from '../data/sampleUsers';
import { UserAvatar } from '../components/common/UserAvatar';

interface AdminDashboardPageProps {
  onNavigate: (path: string) => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ onNavigate }) => {
  const { currentUser, wikiEdits, updateWikiEditStatus, games, addGame, deleteGame, addToast } = useApp();

  const [activeTab, setActiveTab] = useState<'edits' | 'games' | 'users' | 'system'>('edits');
  const [showAddGameModal, setShowAddGameModal] = useState(false);

  // New Game Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDeveloper, setNewDeveloper] = useState('');
  const [newPublisher, setNewPublisher] = useState('');
  const [newReleaseYear, setNewReleaseYear] = useState(2024);
  const [newReleaseDate, setNewReleaseDate] = useState('October 2024');
  const [newCoverImage, setNewCoverImage] = useState('');
  const [newBannerImage, setNewBannerImage] = useState('');
  const [newTagline, setNewTagline] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newSelectedGenres, setNewSelectedGenres] = useState<GameGenre[]>(['Action', 'RPG']);
  const [newSelectedPlatforms, setNewSelectedPlatforms] = useState<PlatformType[]>(['PC', 'PlayStation']);

  const handleCreateGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDeveloper.trim()) return;

    const slug = newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const gameToAdd: Game = {
      id: `game-${Date.now()}`,
      slug,
      title: newTitle.trim(),
      tagline: newTagline.trim() || 'Exciting gaming adventure',
      description: newDescription.trim() || 'Complete wiki guide and compendium.',
      coverImage: newCoverImage.trim() || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
      bannerImage: newBannerImage.trim() || newCoverImage.trim() || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      developer: newDeveloper.trim(),
      publisher: newPublisher.trim() || newDeveloper.trim(),
      releaseDate: newReleaseDate,
      releaseYear: Number(newReleaseYear) || 2024,
      rating: 9.0,
      ratingCount: 1,
      metacriticScore: 90,
      genres: newSelectedGenres,
      platforms: newSelectedPlatforms,
      screenshots: [
        newCoverImage.trim() || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop'
      ],
      characters: [
        {
          id: 'char-1',
          name: 'Main Protagonist',
          role: 'Hero',
          description: 'The customizable lead character.',
          image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop'
        }
      ],
      guides: [
        {
          id: 'guide-1',
          title: 'Starter Beginner Guide',
          category: 'Beginner Guide',
          author: currentUser?.username || 'admin',
          date: 'Today',
          readTime: '3 min read',
          likes: 5,
          content: 'Master the core movement, resource economy, and progression paths early on.'
        }
      ],
      systemRequirements: {
        minimum: {
          os: 'Windows 10 64-bit',
          cpu: 'Intel Core i5-6600K or AMD Ryzen 5 1600',
          gpu: 'NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 580',
          ram: '12 GB RAM',
          storage: '70 GB SSD'
        },
        recommended: {
          os: 'Windows 11 64-bit',
          cpu: 'Intel Core i7-10700K or AMD Ryzen 7 3700X',
          gpu: 'NVIDIA GeForce RTX 3070 8GB or AMD Radeon RX 6700 XT',
          ram: '16 GB RAM',
          storage: '70 GB NVMe SSD'
        }
      }
    };

    addGame(gameToAdd);
    setShowAddGameModal(false);
    // Reset form
    setNewTitle('');
    setNewDeveloper('');
    setNewPublisher('');
    setNewDescription('');
  };

  const toggleGenre = (genre: GameGenre) => {
    setNewSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const togglePlatform = (plat: PlatformType) => {
    setNewSelectedPlatforms(prev =>
      prev.includes(plat) ? prev.filter(p => p !== plat) : [...prev, plat]
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-medium">
          <button type="button" onClick={() => onNavigate('/')} className="hover:text-white">Home</button>
          <span>/</span>
          <span className="text-amber-400 font-semibold">Admin Moderator Portal</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-center gap-3">
              <Shield size={32} className="text-amber-400" />
              <span>WikiGame Control Center</span>
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Approve community contributions, manage game catalogs, and monitor zero-cost infrastructure.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddGameModal(true)}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md flex items-center gap-2 self-start sm:self-auto cursor-pointer"
          >
            <Plus size={16} />
            <span>Add New Game Wiki</span>
          </button>
        </div>
      </div>

      {/* Admin Tabs */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
        {[
          { id: 'edits', label: 'Wiki Moderation Queue', icon: Clock, count: wikiEdits.filter(e => e.status === 'Pending').length },
          { id: 'games', label: 'Manage Games', icon: Gamepad2, count: games.length },
          { id: 'users', label: 'User Directory', icon: Users, count: SAMPLE_USERS.length },
          { id: 'system', label: 'System & Free Tier', icon: Database }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
                isActive
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Icon size={14} />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-amber-500/30 text-amber-200' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB 1: MODERATION QUEUE */}
      {activeTab === 'edits' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Reviewing community proposed wiki edits and guide submissions</span>
          </div>

          <div className="space-y-3">
            {wikiEdits.map((edit) => (
              <div
                key={edit.id}
                className="p-5 rounded-2xl bg-[#11141d] border border-zinc-800 space-y-3 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-zinc-800 text-blue-300 border border-zinc-700">
                      {edit.type}
                    </span>
                    <span className="text-xs text-zinc-400">for <strong className="text-white">{edit.gameTitle}</strong></span>
                    <span className="text-xs text-zinc-500">&bull; by @{edit.username}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {edit.status === 'Approved' ? (
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <CheckCircle2 size={12} /> Approved
                      </span>
                    ) : edit.status === 'Rejected' ? (
                      <span className="text-xs font-semibold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <XCircle size={12} /> Rejected
                      </span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateWikiEditStatus(edit.id, 'Approved')}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1 cursor-pointer"
                        >
                          <CheckCircle2 size={12} /> Approve
                        </button>
                        <button
                          type="button"
                          onClick={() => updateWikiEditStatus(edit.id, 'Rejected')}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-600/80 hover:bg-rose-600 text-white flex items-center gap-1 cursor-pointer"
                        >
                          <XCircle size={12} /> Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base text-white">{edit.title}</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed whitespace-pre-line bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
                    {edit.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: MANAGE GAMES */}
      {activeTab === 'games' && (
        <div className="space-y-4">
          <div className="space-y-3">
            {games.map((game) => (
              <div
                key={game.id}
                className="p-4 rounded-xl bg-[#11141d] border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-12 h-14 rounded-lg object-cover bg-zinc-800 shrink-0"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">
                      {game.title}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {game.developer} &bull; {game.releaseYear} &bull; {game.genres.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    type="button"
                    onClick={() => onNavigate(`/games/${game.slug}`)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
                  >
                    View Page
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteGame(game.id)}
                    className="p-2 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                    title="Delete Game"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: USER DIRECTORY */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SAMPLE_USERS.map((user) => (
              <div
                key={user.id}
                className="p-4 rounded-2xl bg-[#11141d] border border-zinc-800 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <UserAvatar name={user.displayName} avatar={user.avatar} role={user.role} size="md" showBadge />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-bold text-sm text-white">{user.displayName}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded capitalize bg-zinc-800 text-zinc-300">
                        {user.role}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">@{user.username} &bull; {user.reputation} REP</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate(`/users/${user.username}`)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                >
                  Inspect
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: SYSTEM & FREE TIER */}
      {activeTab === 'system' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#11141d] border border-zinc-800 space-y-4">
            <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
              <Sparkles size={18} className="text-emerald-400" />
              <span>Zero Cost Architecture</span>
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              WikiGame operates entirely without mandatory paid subscription tiers, external commercial database dependencies, or proprietary search APIs.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-2 border-b border-zinc-800">
                <span className="text-zinc-400">Development Server</span>
                <span className="font-mono text-blue-400">http://localhost:3000</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-800">
                <span className="text-zinc-400">Free Hosting Target</span>
                <span className="font-mono text-emerald-400">Vercel Free Tier</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-800">
                <span className="text-zinc-400">Database Layer</span>
                <span className="font-mono text-zinc-200">Local Persistent State / Free Firebase</span>
              </div>
              <div className="flex justify-between py-2 border-b border-zinc-800">
                <span className="text-zinc-400">Paid API Dependencies</span>
                <span className="font-mono text-emerald-400">0 (Zero)</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#11141d] border border-zinc-800 space-y-4">
            <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
              <Database size={18} className="text-blue-400" />
              <span>Database Volume & Storage Stats</span>
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <span className="text-zinc-500 uppercase text-[10px] block">Games</span>
                <span className="text-xl font-bold text-white">{games.length}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <span className="text-zinc-500 uppercase text-[10px] block">Wiki Edits</span>
                <span className="text-xl font-bold text-white">{wikiEdits.length}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <span className="text-zinc-500 uppercase text-[10px] block">Genres</span>
                <span className="text-xl font-bold text-white">{GENRES_DATA.length}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <span className="text-zinc-500 uppercase text-[10px] block">Platforms</span>
                <span className="text-xl font-bold text-white">{PLATFORMS_DATA.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ADD NEW GAME MODAL */}
      {showAddGameModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="fixed inset-0" onClick={() => setShowAddGameModal(false)} />

          <div className="relative w-full max-w-2xl bg-[#0f121a] border border-zinc-700 rounded-2xl shadow-2xl p-6 z-10 space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="font-heading font-bold text-xl text-white">Create New Game Wiki</h3>

            <form onSubmit={handleCreateGame} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Game Title *</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Black Myth: Wukong"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Developer *</label>
                  <input
                    type="text"
                    required
                    value={newDeveloper}
                    onChange={(e) => setNewDeveloper(e.target.value)}
                    placeholder="e.g. Game Science"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Publisher</label>
                  <input
                    type="text"
                    value={newPublisher}
                    onChange={(e) => setNewPublisher(e.target.value)}
                    placeholder="e.g. Game Science"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">Release Year</label>
                  <input
                    type="number"
                    value={newReleaseYear}
                    onChange={(e) => setNewReleaseYear(Number(e.target.value))}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Cover Image URL</label>
                <input
                  type="url"
                  value={newCoverImage}
                  onChange={(e) => setNewCoverImage(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Tagline</label>
                <input
                  type="text"
                  value={newTagline}
                  onChange={(e) => setNewTagline(e.target.value)}
                  placeholder="Action RPG rooted in Chinese mythology"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Overview Description</label>
                <textarea
                  rows={3}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Full lore background and gameplay overview..."
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2.5 text-white"
                />
              </div>

              {/* Genre selection chips */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1.5">Select Genres</label>
                <div className="flex flex-wrap gap-1.5">
                  {GENRES_DATA.map((g) => {
                    const isSelected = newSelectedGenres.includes(g.name);
                    return (
                      <button
                        key={g.slug}
                        type="button"
                        onClick={() => toggleGenre(g.name)}
                        className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-400'
                        }`}
                      >
                        {g.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Platform selection chips */}
              <div>
                <label className="block text-zinc-300 font-semibold mb-1.5">Select Platforms</label>
                <div className="flex flex-wrap gap-1.5">
                  {PLATFORMS_DATA.map((p) => {
                    const isSelected = newSelectedPlatforms.includes(p.name);
                    return (
                      <button
                        key={p.slug}
                        type="button"
                        onClick={() => togglePlatform(p.name)}
                        className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                          isSelected ? 'bg-emerald-600 text-white' : 'bg-zinc-800 text-zinc-400'
                        }`}
                      >
                        {p.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setShowAddGameModal(false)}
                  className="px-4 py-2 rounded-lg text-zinc-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-500"
                >
                  Publish Game Wiki
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
