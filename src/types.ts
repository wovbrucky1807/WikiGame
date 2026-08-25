export type PlatformType = 
  | 'PC' 
  | 'PlayStation' 
  | 'Xbox' 
  | 'Nintendo Switch' 
  | 'Android' 
  | 'iOS' 
  | 'Roblox';

export type GenreType = 
  | 'Action' 
  | 'Adventure' 
  | 'RPG' 
  | 'FPS' 
  | 'Horror' 
  | 'Racing' 
  | 'Strategy' 
  | 'Simulation' 
  | 'Survival' 
  | 'Sandbox' 
  | 'Sports' 
  | 'MMORPG'
  | 'Battle Royale'
  | 'MOBA';

export type GameGenre = GenreType;

export interface SystemSpecs {
  os: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  directX?: string;
  network?: string;
}

export interface SystemRequirements {
  minimum: SystemSpecs;
  recommended: SystemSpecs;
}

export interface GameCharacter {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  abilities?: string[];
  faction?: string;
}

export interface GameMap {
  id: string;
  name: string;
  image: string;
  type: string;
  description: string;
  pointsOfInterest?: string[];
}

export interface GameItem {
  id: string;
  name: string;
  category: 'Weapons' | 'Items' | 'Equipment' | 'Vehicles' | 'Consumables';
  rarity?: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
  image: string;
  description: string;
  stats?: Record<string, string | number>;
}

export interface GameGuide {
  id: string;
  title: string;
  category: 'Beginner Guide' | 'Tips & Tricks' | 'How to Level Up' | 'Best Weapons' | 'Best Builds' | 'Walkthrough';
  author: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
  content: string;
  likes: number;
}

export interface Review {
  id: string;
  gameId: string;
  userId: string;
  username: string;
  userAvatar?: string;
  rating: number; // 1-10 or 1-5 scale (we support 1-10 with 5-star translation)
  title: string;
  text: string;
  date: string;
  likes: number;
  likedBy: string[];
  verifiedPlayer?: boolean;
  hoursPlayed?: number;
}

export interface Comment {
  id: string;
  gameId: string;
  userId: string;
  username: string;
  userAvatar?: string;
  text: string;
  date: string;
  likes: number;
  likedBy: string[];
  parentId?: string; // for replies
  replies?: Comment[];
}

export type WikiEditStatus = 'Pending' | 'Approved' | 'Rejected';

export interface WikiEdit {
  id: string;
  gameId: string;
  gameTitle: string;
  userId: string;
  username: string;
  userAvatar?: string;
  type: 'Overview' | 'Gameplay' | 'Story' | 'Character' | 'Guide' | 'Item' | 'Map' | 'System Requirements';
  title: string;
  content: string;
  date: string;
  status: WikiEditStatus;
  reviewedBy?: string;
  reviewComment?: string;
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  coverImage: string;
  bannerImage: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  releaseYear: number;
  genres: GenreType[];
  platforms: PlatformType[];
  rating: number; // 1.0 - 10.0
  ratingCount: number;
  isTrending?: boolean;
  isPopular?: boolean;
  isNewRelease?: boolean;
  isTopRated?: boolean;
  
  // Detailed Content
  overview?: string;
  description?: string;
  gameplay?: string;
  story?: string;
  characters?: GameCharacter[];
  maps?: GameMap[];
  items?: GameItem[];
  guides?: GameGuide[];
  systemRequirements?: SystemRequirements;
  screenshots?: string[];
  youtubeTrailerId?: string;
  
  // Official Links & Metas
  websiteUrl?: string;
  officialWebsite?: string;
  steamUrl?: string;
  metacriticScore?: number;
  lastUpdated?: string;
}

export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  avatar: string;
  bio: string;
  role: 'admin' | 'editor' | 'member';
  joinedDate: string;
  favorites: string[]; // game IDs
  bookmarkedGuides: string[]; // guide IDs
  ratedGames: Record<string, number>; // gameId -> rating
  contributionsCount: number;
  reputation: number;
}

export interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Game' | 'Character' | 'Genre' | 'Platform' | 'Guide';
  url: string;
  image?: string;
}
