import { User } from '../types';

export const SAMPLE_USERS: User[] = [
  {
    id: 'user-admin',
    username: 'admin',
    displayName: 'WikiGame Admin',
    email: 'admin@wikigame.local',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
    bio: 'Lead Administrator & Curator at WikiGame. Gaming enthusiast across all genres and platforms.',
    role: 'admin',
    joinedDate: '2023-01-01',
    favorites: ['game-1', 'game-3', 'game-9', 'game-10'],
    bookmarkedGuides: ['guide-mc-beginner', 'guide-elden-dex-arc'],
    ratedGames: {
      'game-1': 10,
      'game-3': 10,
      'game-9': 10,
      'game-2': 9
    },
    contributionsCount: 142,
    reputation: 9850
  },
  {
    id: 'user-alex',
    username: 'alex_gamer',
    displayName: 'Alex Rivers',
    email: 'alex@gamer.local',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop',
    bio: 'RPG fanatic, Soulsborne veteran, and FPS tryhard. Writing comprehensive boss walkthroughs!',
    role: 'editor',
    joinedDate: '2023-05-14',
    favorites: ['game-3', 'game-4', 'game-5', 'game-11'],
    bookmarkedGuides: ['guide-val-aim', 'guide-wukong-bosses'],
    ratedGames: {
      'game-3': 10,
      'game-4': 9,
      'game-5': 9
    },
    contributionsCount: 48,
    reputation: 3420
  },
  {
    id: 'user-elena',
    username: 'elena_craft',
    displayName: 'Elena Vance',
    email: 'elena@wiki.local',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    bio: 'Survival builder, Redstone engineer, and community wiki contributor.',
    role: 'member',
    joinedDate: '2023-09-20',
    favorites: ['game-1', 'game-12', 'game-6'],
    bookmarkedGuides: ['guide-mc-nether'],
    ratedGames: {
      'game-1': 10,
      'game-12': 10
    },
    contributionsCount: 19,
    reputation: 1280
  }
];
