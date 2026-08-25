import React, { createContext, useContext, useState, useEffect } from 'react';
import { Game, User, Review, Comment, WikiEdit, WikiEditStatus } from '../types';
import { SAMPLE_GAMES } from '../data/sampleGames';
import { SAMPLE_USERS } from '../data/sampleUsers';
import { SAMPLE_REVIEWS, SAMPLE_COMMENTS, SAMPLE_WIKI_EDITS } from '../data/sampleSocial';

interface Toast {
  id: string;
  title: string;
  message?: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

interface AppContextType {
  // Games
  games: Game[];
  getGameBySlug: (slug: string) => Game | undefined;
  getGameById: (id: string) => Game | undefined;
  addGame: (game: Omit<Game, 'id'>) => Game;
  updateGame: (id: string, updates: Partial<Game>) => void;
  deleteGame: (id: string) => void;

  // Users & Auth
  currentUser: User | null;
  users: User[];
  login: (usernameOrEmail: string) => boolean;
  register: (username: string, displayName: string, email: string) => User;
  logout: () => void;
  switchUser: (userId: string) => void;
  updateProfile: (updates: Partial<User>) => void;

  // Favorites & Ratings
  favorites: string[];
  toggleFavorite: (gameId: string) => void;
  isFavorite: (gameId: string) => boolean;
  userRatings: Record<string, number>;
  rateGame: (gameId: string, rating: number) => void;

  // Reviews
  reviews: Review[];
  getReviewsForGame: (gameId: string) => Review[];
  addReview: (gameId: string, rating: number, title: string, text: string, hoursPlayed?: number) => void;
  likeReview: (reviewId: string) => void;
  deleteReview: (reviewId: string) => void;

  // Comments
  comments: Comment[];
  getCommentsForGame: (gameId: string) => Comment[];
  addComment: (gameId: string, text: string, parentId?: string) => void;
  likeComment: (commentId: string) => void;
  deleteComment: (commentId: string) => void;

  // Wiki Edits & Contributions
  wikiEdits: WikiEdit[];
  getEditsForGame: (gameId: string) => WikiEdit[];
  submitWikiEdit: (edit: Omit<WikiEdit, 'id' | 'userId' | 'username' | 'userAvatar' | 'date' | 'status'>) => void;
  updateEditStatus: (editId: string, status: WikiEditStatus, comment?: string) => void;
  deleteWikiEdit: (editId: string) => void;

  // Modals & UI States
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  authModalOpen: boolean;
  setAuthModalOpen: (open: boolean) => void;
  authMode: 'login' | 'register' | 'profile';
  setAuthMode: (mode: 'login' | 'register' | 'profile') => void;
  contributeModalGameId: string | null;
  setContributeModalGameId: (gameId: string | null) => void;
  lightboxImage: string | null;
  setLightboxImage: (img: string | null) => void;

  // Notifications
  toasts: Toast[];
  addToast: (title: string, message?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Local storage keys with versioning to ensure 100+ real games load fresh
  const STORAGE_PREFIX = 'wikigame_v2_';

  // Games State
  const [games, setGames] = useState<Game[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}games`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= SAMPLE_GAMES.length) {
          return parsed;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return SAMPLE_GAMES;
  });

  // Users State
  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}users`);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return SAMPLE_USERS;
  });

  // Current User State
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const savedId = localStorage.getItem(`${STORAGE_PREFIX}current_user_id`);
    if (savedId) {
      const user = SAMPLE_USERS.find(u => u.id === savedId);
      if (user) return user;
    }
    // Default to Alex or Admin for rich experience
    return SAMPLE_USERS[1] || null;
  });

  // Reviews State
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}reviews`);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return SAMPLE_REVIEWS;
  });

  // Comments State
  const [comments, setComments] = useState<Comment[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}comments`);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return SAMPLE_COMMENTS;
  });

  // Wiki Edits State
  const [wikiEdits, setWikiEdits] = useState<WikiEdit[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}wiki_edits`);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return SAMPLE_WIKI_EDITS;
  });

  // Modals & UI
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'profile'>('login');
  const [contributeModalGameId, setContributeModalGameId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}games`, JSON.stringify(games));
  }, [games]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}users`, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`${STORAGE_PREFIX}current_user_id`, currentUser.id);
    } else {
      localStorage.removeItem(`${STORAGE_PREFIX}current_user_id`);
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}reviews`, JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}comments`, JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}wiki_edits`, JSON.stringify(wikiEdits));
  }, [wikiEdits]);

  // Global keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Toast Helpers
  const addToast = (title: string, message?: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Game methods
  const getGameBySlug = (slug: string) => {
    return games.find(g => g.slug.toLowerCase() === slug.toLowerCase());
  };

  const getGameById = (id: string) => {
    return games.find(g => g.id === id);
  };

  const addGame = (gameData: Omit<Game, 'id'>) => {
    const newId = `game-${Date.now()}`;
    const newGame: Game = {
      ...gameData,
      id: newId,
      ratingCount: gameData.ratingCount || 1,
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    setGames(prev => [newGame, ...prev]);
    addToast('Game Created', `${newGame.title} has been added to WikiGame!`, 'success');
    return newGame;
  };

  const updateGame = (id: string, updates: Partial<Game>) => {
    setGames(prev => prev.map(g => g.id === id ? { ...g, ...updates, lastUpdated: new Date().toISOString().split('T')[0] } : g));
    addToast('Game Updated', 'Changes have been saved.', 'success');
  };

  const deleteGame = (id: string) => {
    const game = games.find(g => g.id === id);
    setGames(prev => prev.filter(g => g.id !== id));
    addToast('Game Removed', `${game?.title || 'Game'} was deleted from database.`, 'info');
  };

  // Auth & Users
  const login = (usernameOrEmail: string) => {
    const user = users.find(
      u => u.username.toLowerCase() === usernameOrEmail.toLowerCase() ||
           u.email.toLowerCase() === usernameOrEmail.toLowerCase()
    );
    if (user) {
      setCurrentUser(user);
      addToast('Welcome back!', `Signed in as @${user.username}`, 'success');
      return true;
    }
    // Create new quick session if doesn't exist
    const cleanUsername = usernameOrEmail.split('@')[0].replace(/[^a-zA-Z0-9_]/g, '').toLowerCase() || 'gamer';
    const newUser: User = {
      id: `user-${Date.now()}`,
      username: cleanUsername,
      displayName: cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1),
      email: usernameOrEmail.includes('@') ? usernameOrEmail : `${cleanUsername}@wikigame.local`,
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop`,
      bio: 'Gamer & Wiki Enthusiast exploring the latest worlds.',
      role: 'member',
      joinedDate: new Date().toISOString().split('T')[0],
      favorites: [],
      bookmarkedGuides: [],
      ratedGames: {},
      contributionsCount: 0,
      reputation: 100
    };
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    addToast('Account created!', `Welcome to WikiGame, @${newUser.username}`, 'success');
    return true;
  };

  const register = (username: string, displayName: string, email: string) => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      username: username.toLowerCase().trim(),
      displayName: displayName.trim() || username,
      email: email.trim(),
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop`,
      bio: 'New member of WikiGame community.',
      role: 'member',
      joinedDate: new Date().toISOString().split('T')[0],
      favorites: [],
      bookmarkedGuides: [],
      ratedGames: {},
      contributionsCount: 0,
      reputation: 100
    };
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    addToast('Registration Successful', `Welcome to WikiGame, @${newUser.username}!`, 'success');
    return newUser;
  };

  const logout = () => {
    setCurrentUser(null);
    addToast('Signed out', 'You have been logged out.', 'info');
  };

  const switchUser = (userId: string) => {
    const found = users.find(u => u.id === userId);
    if (found) {
      setCurrentUser(found);
      addToast('Profile Switched', `Active user is now @${found.username} (${found.role})`, 'info');
    }
  };

  const updateProfile = (updates: Partial<User>) => {
    if (!currentUser) return;
    const updated = { ...currentUser, ...updates };
    setCurrentUser(updated);
    setUsers(prev => prev.map(u => u.id === currentUser.id ? updated : u));
    addToast('Profile Updated', 'Your profile details have been saved.', 'success');
  };

  // Favorites
  const favorites = currentUser?.favorites || [];

  const toggleFavorite = (gameId: string) => {
    if (!currentUser) {
      setAuthModalOpen(true);
      setAuthMode('login');
      addToast('Login Required', 'Please sign in to favorite games.', 'info');
      return;
    }
    const exists = currentUser.favorites.includes(gameId);
    const newFavorites = exists 
      ? currentUser.favorites.filter(id => id !== gameId)
      : [...currentUser.favorites, gameId];
    
    updateProfile({ favorites: newFavorites });
    const game = games.find(g => g.id === gameId);
    if (exists) {
      addToast('Removed from Favorites', `${game?.title || 'Game'} was removed from your favorites.`, 'info');
    } else {
      addToast('Added to Favorites', `${game?.title || 'Game'} added to your favorites!`, 'success');
    }
  };

  const isFavorite = (gameId: string) => {
    return favorites.includes(gameId);
  };

  // Ratings
  const userRatings = currentUser?.ratedGames || {};

  const rateGame = (gameId: string, score: number) => {
    if (!currentUser) {
      setAuthModalOpen(true);
      setAuthMode('login');
      addToast('Login Required', 'Please sign in to rate games.', 'info');
      return;
    }
    const newRated = { ...userRatings, [gameId]: score };
    updateProfile({ ratedGames: newRated });

    // Recalculate game average rating smoothly
    const game = games.find(g => g.id === gameId);
    if (game) {
      const isFirstRating = !userRatings[gameId];
      const newCount = isFirstRating ? game.ratingCount + 1 : game.ratingCount;
      const newRating = Number((((game.rating * game.ratingCount) + score) / (game.ratingCount + 1)).toFixed(1));
      updateGame(gameId, { rating: newRating, ratingCount: newCount });
    }
    addToast('Rating Submitted', `You rated this game ${score}/10!`, 'success');
  };

  // Reviews
  const getReviewsForGame = (gameId: string) => {
    return reviews.filter(r => r.gameId === gameId);
  };

  const addReview = (gameId: string, rating: number, title: string, text: string, hoursPlayed?: number) => {
    if (!currentUser) {
      setAuthModalOpen(true);
      setAuthMode('login');
      return;
    }
    const newReview: Review = {
      id: `rev-${Date.now()}`,
      gameId,
      userId: currentUser.id,
      username: currentUser.username,
      userAvatar: currentUser.avatar,
      rating,
      title,
      text,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      likedBy: [],
      verifiedPlayer: true,
      hoursPlayed: hoursPlayed || 10
    };
    setReviews(prev => [newReview, ...prev]);
    // also update user rating
    rateGame(gameId, rating);
    addToast('Review Published', 'Thank you for sharing your thoughts with the community!', 'success');
  };

  const likeReview = (reviewId: string) => {
    if (!currentUser) {
      setAuthModalOpen(true);
      return;
    }
    setReviews(prev => prev.map(r => {
      if (r.id !== reviewId) return r;
      const alreadyLiked = r.likedBy.includes(currentUser.id);
      const newLikedBy = alreadyLiked 
        ? r.likedBy.filter(id => id !== currentUser.id)
        : [...r.likedBy, currentUser.id];
      return {
        ...r,
        likes: newLikedBy.length,
        likedBy: newLikedBy
      };
    }));
  };

  const deleteReview = (reviewId: string) => {
    setReviews(prev => prev.filter(r => r.id !== reviewId));
    addToast('Review Removed', 'The review has been deleted.', 'info');
  };

  // Comments
  const getCommentsForGame = (gameId: string) => {
    return comments.filter(c => c.gameId === gameId && !c.parentId);
  };

  const addComment = (gameId: string, text: string, parentId?: string) => {
    if (!currentUser) {
      setAuthModalOpen(true);
      setAuthMode('login');
      return;
    }
    const newComment: Comment = {
      id: `comm-${Date.now()}`,
      gameId,
      userId: currentUser.id,
      username: currentUser.username,
      userAvatar: currentUser.avatar,
      text,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      likedBy: [],
      parentId
    };

    if (parentId) {
      setComments(prev => prev.map(c => {
        if (c.id === parentId) {
          return {
            ...c,
            replies: [...(c.replies || []), newComment]
          };
        }
        return c;
      }));
    } else {
      setComments(prev => [newComment, ...prev]);
    }
    addToast('Comment Posted', 'Your message has been added.', 'success');
  };

  const likeComment = (commentId: string) => {
    if (!currentUser) {
      setAuthModalOpen(true);
      return;
    }
    setComments(prev => prev.map(c => {
      if (c.id === commentId) {
        const liked = c.likedBy.includes(currentUser.id);
        const newLikedBy = liked ? c.likedBy.filter(id => id !== currentUser.id) : [...c.likedBy, currentUser.id];
        return { ...c, likes: newLikedBy.length, likedBy: newLikedBy };
      }
      if (c.replies) {
        return {
          ...c,
          replies: c.replies.map(r => {
            if (r.id === commentId) {
              const liked = r.likedBy.includes(currentUser.id);
              const newLikedBy = liked ? r.likedBy.filter(id => id !== currentUser.id) : [...r.likedBy, currentUser.id];
              return { ...r, likes: newLikedBy.length, likedBy: newLikedBy };
            }
            return r;
          })
        };
      }
      return c;
    }));
  };

  const deleteComment = (commentId: string) => {
    setComments(prev => prev.filter(c => c.id !== commentId).map(c => {
      if (c.replies) {
        return {
          ...c,
          replies: c.replies.filter(r => r.id !== commentId)
        };
      }
      return c;
    }));
    addToast('Comment Deleted', 'Your comment was removed.', 'info');
  };

  // Wiki Edits
  const getEditsForGame = (gameId: string) => {
    return wikiEdits.filter(e => e.gameId === gameId);
  };

  const submitWikiEdit = (editData: Omit<WikiEdit, 'id' | 'userId' | 'username' | 'userAvatar' | 'date' | 'status'>) => {
    if (!currentUser) {
      setAuthModalOpen(true);
      setAuthMode('login');
      return;
    }
    const newEdit: WikiEdit = {
      ...editData,
      id: `edit-${Date.now()}`,
      userId: currentUser.id,
      username: currentUser.username,
      userAvatar: currentUser.avatar,
      date: new Date().toISOString().split('T')[0],
      status: currentUser.role === 'admin' ? 'Approved' : 'Pending'
    };
    setWikiEdits(prev => [newEdit, ...prev]);
    updateProfile({
      contributionsCount: (currentUser.contributionsCount || 0) + 1,
      reputation: (currentUser.reputation || 100) + 25
    });

    if (currentUser.role === 'admin') {
      addToast('Wiki Updated', 'Admin edit applied directly to the game encyclopedia.', 'success');
    } else {
      addToast('Contribution Submitted', 'Thank you! Your wiki proposal has been queued for moderation.', 'success');
    }
  };

  const updateEditStatus = (editId: string, status: WikiEditStatus, comment?: string) => {
    setWikiEdits(prev => prev.map(e => {
      if (e.id === editId) {
        return {
          ...e,
          status,
          reviewedBy: currentUser?.username || 'admin',
          reviewComment: comment || `Marked as ${status}`
        };
      }
      return e;
    }));
    addToast('Status Updated', `Wiki submission was marked as ${status}.`, 'info');
  };

  const deleteWikiEdit = (editId: string) => {
    setWikiEdits(prev => prev.filter(e => e.id !== editId));
    addToast('Contribution Removed', 'Submission removed from moderation queue.', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        games,
        getGameBySlug,
        getGameById,
        addGame,
        updateGame,
        deleteGame,

        currentUser,
        users,
        login,
        register,
        logout,
        switchUser,
        updateProfile,

        favorites,
        toggleFavorite,
        isFavorite,
        userRatings,
        rateGame,

        reviews,
        getReviewsForGame,
        addReview,
        likeReview,
        deleteReview,

        comments,
        getCommentsForGame,
        addComment,
        likeComment,
        deleteComment,

        wikiEdits,
        getEditsForGame,
        submitWikiEdit,
        updateEditStatus,
        deleteWikiEdit,

        commandPaletteOpen,
        setCommandPaletteOpen,
        authModalOpen,
        setAuthModalOpen,
        authMode,
        setAuthMode,
        contributeModalGameId,
        setContributeModalGameId,
        lightboxImage,
        setLightboxImage,

        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
