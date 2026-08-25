import { PlatformType } from '../types';

export interface PlatformInfo {
  name: PlatformType;
  slug: string;
  badgeColor: string;
  description: string;
  iconName: string;
  coverImage: string;
  deviceTypes: string;
  totalGames: number;
}

export const PLATFORMS_DATA: PlatformInfo[] = [
  {
    name: 'PC',
    slug: 'pc',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    description: 'The pinnacle of high refresh rate gaming, modding, simulation, and customizable performance.',
    iconName: 'Monitor',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/header.jpg',
    deviceTypes: 'Windows, macOS, Linux, Steam Deck',
    totalGames: 98
  },
  {
    name: 'PlayStation',
    slug: 'playstation',
    badgeColor: 'bg-blue-600/10 text-blue-400 border-blue-500/20',
    description: 'Home of groundbreaking cinematic masterpieces, DualSense haptics, and exclusive blockbuster franchises.',
    iconName: 'Gamepad2',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg',
    deviceTypes: 'PlayStation 5, PlayStation 4, PSVR2',
    totalGames: 62
  },
  {
    name: 'Xbox',
    slug: 'xbox',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    description: 'Xbox Series X|S and Game Pass ecosystem with cross-play and cloud streaming flexibility.',
    iconName: 'Box',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg',
    deviceTypes: 'Xbox Series X, Series S, Xbox One',
    totalGames: 56
  },
  {
    name: 'Nintendo Switch',
    slug: 'nintendo-switch',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    description: 'Hybrid console perfection offering on-the-go play and legendary family and adventure experiences.',
    iconName: 'Tv2',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
    deviceTypes: 'Nintendo Switch OLED, Switch Lite',
    totalGames: 28
  },
  {
    name: 'Android',
    slug: 'android',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    description: 'Mobile gaming powerhouse spanning massive battle royales, gacha RPGs, and cloud apps.',
    iconName: 'Smartphone',
    coverImage: 'https://play-lh.googleusercontent.com/JRd05pyBH41qjEdOpWduAn0fDWNkdZAoR1A8U2o6q6CeOddCYbgE1842zkgedzvfUg=w512-h512',
    deviceTypes: 'Android Phones & Tablets',
    totalGames: 22
  },
  {
    name: 'iOS',
    slug: 'ios',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    description: 'Crisp retina displays, Apple silicon gaming performance, and top-tier mobile titles.',
    iconName: 'Smartphone',
    coverImage: 'https://cdn1.epicgames.com/offer/879b0d8776ab46a597e290430bb00968/GenshinImpact_Portrait_1200x1600-53bc1efdd3aa4a9235d94726dc6a069a',
    deviceTypes: 'iPhone, iPad',
    totalGames: 20
  },
  {
    name: 'Roblox',
    slug: 'roblox',
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    description: 'Massive metaverse engine with millions of community-created multiplayer games and experiences.',
    iconName: 'Boxes',
    coverImage: 'https://images.rbxcdn.com/1297e68adbe64f2ad37cbf81b539cf20.jpg',
    deviceTypes: 'PC, Mac, iOS, Android, Xbox, PlayStation, VR',
    totalGames: 12
  }
];
