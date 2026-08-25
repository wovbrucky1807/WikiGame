import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, LogIn, UserPlus, UserCheck, Shield, Sparkles, User as UserIcon } from 'lucide-react';
import { SAMPLE_USERS } from '../../data/sampleUsers';

export const AuthModal: React.FC = () => {
  const {
    authModalOpen,
    setAuthModalOpen,
    authMode,
    setAuthMode,
    login,
    register,
    currentUser,
    updateProfile,
    switchUser,
  } = useApp();

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regDisplayName, setRegDisplayName] = useState('');
  const [regEmail, setRegEmail] = useState('');

  // Profile Edit fields
  const [bio, setBio] = useState(currentUser?.bio || '');
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [avatar, setAvatar] = useState(currentUser?.avatar || '');

  if (!authModalOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameOrEmail.trim()) return;
    login(usernameOrEmail);
    setAuthModalOpen(false);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regUsername.trim() || !regEmail.trim()) return;
    register(regUsername, regDisplayName || regUsername, regEmail);
    setAuthModalOpen(false);
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      displayName: displayName.trim(),
      bio: bio.trim(),
      avatar: avatar.trim()
    });
    setAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={() => setAuthModalOpen(false)} />

      <div className="relative w-full max-w-md bg-[#0f121a] border border-zinc-700/80 rounded-2xl shadow-2xl p-6 z-10 space-y-5">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            {authMode === 'login' ? (
              <>
                <LogIn size={20} className="text-blue-400" />
                <h3 className="font-heading font-bold text-lg text-white">Sign In to WikiGame</h3>
              </>
            ) : authMode === 'register' ? (
              <>
                <UserPlus size={20} className="text-blue-400" />
                <h3 className="font-heading font-bold text-lg text-white">Join WikiGame</h3>
              </>
            ) : (
              <>
                <UserCheck size={20} className="text-blue-400" />
                <h3 className="font-heading font-bold text-lg text-white">Edit Profile</h3>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setAuthModalOpen(false)}
            className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800"
          >
            <X size={18} />
          </button>
        </div>

        {/* Mode: LOGIN */}
        {authMode === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Username or Email
              </label>
              <input
                type="text"
                required
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                placeholder="e.g. admin or alex_gamer"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                defaultValue="password123"
                placeholder="••••••••"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-all shadow-md hover:shadow-blue-600/30 cursor-pointer"
            >
              Sign In
            </button>

            {/* Quick Demo Switchers */}
            <div className="pt-3 border-t border-zinc-800/80">
              <p className="text-[11px] text-zinc-400 text-center font-medium mb-2.5">
                Or quick test with demo profiles:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {SAMPLE_USERS.map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => {
                      switchUser(u.id);
                      setAuthModalOpen(false);
                    }}
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-left transition-colors cursor-pointer"
                  >
                    <div className="font-semibold text-xs text-white truncate">@{u.username}</div>
                    <div className="text-[10px] text-zinc-400 capitalize">{u.role}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setAuthMode('register')}
                className="text-xs text-blue-400 hover:underline"
              >
                Don&apos;t have an account? Create one free
              </button>
            </div>
          </form>
        )}

        {/* Mode: REGISTER */}
        {authMode === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Username
              </label>
              <input
                type="text"
                required
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
                placeholder="e.g. shadow_blade"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Display Name
              </label>
              <input
                type="text"
                value={regDisplayName}
                onChange={(e) => setRegDisplayName(e.target.value)}
                placeholder="e.g. Shadow Blade"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                placeholder="gamer@example.com"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-all shadow-md hover:shadow-blue-600/30 cursor-pointer"
            >
              Create Free Account
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className="text-xs text-blue-400 hover:underline"
              >
                Already have an account? Sign in
              </button>
            </div>
          </form>
        )}

        {/* Mode: EDIT PROFILE */}
        {authMode === 'profile' && currentUser && (
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Display Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Bio & Gamer Tag
              </label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell the WikiGame community about your favorite games, platforms, or speedruns..."
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Avatar Image URL (Free remote URL)
              </label>
              <input
                type="url"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                placeholder="https://images.unsplash.com/photo-..."
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-all cursor-pointer"
            >
              Save Profile Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
