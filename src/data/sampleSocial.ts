import { Review, Comment, WikiEdit } from '../types';

export const SAMPLE_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    gameId: 'game-1',
    userId: 'user-admin',
    username: 'admin',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
    rating: 10,
    title: 'Timeless masterpiece with infinite replayability',
    text: 'Minecraft continues to be the ultimate digital Lego. Whether building massive automated redstone sorting systems or diving into deep caves with friends, no game has ever matched its creative freedom.',
    date: '2025-01-10',
    likes: 84,
    likedBy: ['user-alex', 'user-elena'],
    verifiedPlayer: true,
    hoursPlayed: 1400
  },
  {
    id: 'rev-2',
    gameId: 'game-3',
    userId: 'user-alex',
    username: 'alex_gamer',
    userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop',
    rating: 10,
    title: 'Peak open world game design by FromSoftware',
    text: 'Every horizon holds a castle, a catacomb, or a terrifying demigod. The build diversity is insane, and the music during boss fights is legendary.',
    date: '2025-01-14',
    likes: 120,
    likedBy: ['user-admin'],
    verifiedPlayer: true,
    hoursPlayed: 320
  },
  {
    id: 'rev-3',
    gameId: 'game-4',
    userId: 'user-alex',
    username: 'alex_gamer',
    userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop',
    rating: 9,
    title: 'Extremely crisp gunplay and tactical depth',
    text: 'Riot Games nailed the competitive 5v5 formula. The agent abilities add so much depth to standard tactical shooting without replacing the necessity of good aim.',
    date: '2025-01-22',
    likes: 45,
    likedBy: [],
    verifiedPlayer: true,
    hoursPlayed: 650
  },
  {
    id: 'rev-4',
    gameId: 'game-9',
    userId: 'user-elena',
    username: 'elena_craft',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 10,
    title: 'The best narrative & living world ever crafted',
    text: 'Arthur Morgan is arguably the finest written character in video game history. The attention to detail in camp interactions, weather systems, and horse physics is unmatched.',
    date: '2025-02-02',
    likes: 95,
    likedBy: ['user-alex', 'user-admin'],
    verifiedPlayer: true,
    hoursPlayed: 240
  }
];

export const SAMPLE_COMMENTS: Comment[] = [
  {
    id: 'comm-1',
    gameId: 'game-1',
    userId: 'user-elena',
    username: 'elena_craft',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    text: 'Does anyone have tips for locating Ancient Cities faster without using seed viewers? I want to challenge the Warden legitimately!',
    date: '2025-02-10',
    likes: 12,
    likedBy: ['user-admin'],
    replies: [
      {
        id: 'comm-1-1',
        gameId: 'game-1',
        userId: 'user-admin',
        username: 'admin',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
        text: 'Look underneath huge mountain ranges (peaks of Y=180+). Ancient Cities almost always generate below deep mountain roots at Y=-52.',
        date: '2025-02-11',
        likes: 18,
        likedBy: ['user-elena'],
        parentId: 'comm-1'
      }
    ]
  },
  {
    id: 'comm-2',
    gameId: 'game-3',
    userId: 'user-alex',
    username: 'alex_gamer',
    userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop',
    text: 'Defeated Malenia solo with parries after 80 tries! That feeling of triumph is why Souls games are special.',
    date: '2025-02-15',
    likes: 31,
    likedBy: ['user-admin', 'user-elena']
  }
];

export const SAMPLE_WIKI_EDITS: WikiEdit[] = [
  {
    id: 'edit-1',
    gameId: 'game-1',
    gameTitle: 'Minecraft',
    userId: 'user-elena',
    username: 'elena_craft',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    type: 'Item',
    title: 'Added Elytra durability and firework rocket flight stats',
    content: 'Updated Elytra item card to include exact glide ratios (10:1) and maximum firework speed boosts (67 m/s) based on recent update tests.',
    date: '2025-02-01',
    status: 'Approved',
    reviewedBy: 'admin',
    reviewComment: 'Verified with official 1.21 patch notes. Excellent contribution.'
  },
  {
    id: 'edit-2',
    gameId: 'game-3',
    gameTitle: 'Elden Ring',
    userId: 'user-alex',
    username: 'alex_gamer',
    userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop',
    type: 'Guide',
    title: 'Created Arcane / Bleed build optimization guide',
    content: 'Wrote step-by-step equipment walkthrough for Lord of Blood Exultation + White Mask talisman scaling.',
    date: '2025-02-04',
    status: 'Approved',
    reviewedBy: 'admin',
    reviewComment: 'Detailed and accurate calculation of soft caps.'
  },
  {
    id: 'edit-3',
    gameId: 'game-4',
    gameTitle: 'Valorant',
    userId: 'user-alex',
    username: 'alex_gamer',
    userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop',
    type: 'Character',
    title: 'Updated Omen Dark Cover regeneration timer',
    content: 'Changed smoke reload cooldown from 30s to 32s following recent competitive patch balance note.',
    date: '2025-02-18',
    status: 'Pending'
  },
  {
    id: 'edit-4',
    gameId: 'game-2',
    gameTitle: 'Grand Theft Auto V',
    userId: 'user-elena',
    username: 'elena_craft',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    type: 'Item',
    title: 'Added Oppressor Mk II missile count and lock-on nerf details',
    content: 'Listed exact 20 homing missile capacity and countermeasure cooldowns.',
    date: '2025-02-20',
    status: 'Pending'
  }
];
