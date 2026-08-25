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
    coverImage: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop',
    deviceTypes: 'Windows, macOS, Linux, Steam Deck',
    totalGames: 4200
  },
  {
    name: 'PlayStation',
    slug: 'playstation',
    badgeColor: 'bg-blue-600/10 text-blue-400 border-blue-500/20',
    description: 'Home of groundbreaking cinematic masterpieces, DualSense haptics, and exclusive blockbuster franchises.',
    iconName: 'Gamepad2',
    coverImage: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop',
    deviceTypes: 'PlayStation 5, PlayStation 4, PSVR2',
    totalGames: 3100
  },
  {
    name: 'Xbox',
    slug: 'xbox',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    description: 'Xbox Series X|S and Game Pass ecosystem with cross-play and cloud streaming flexibility.',
    iconName: 'Box',
    coverImage: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=800&auto=format&fit=crop',
    deviceTypes: 'Xbox Series X, Series S, Xbox One',
    totalGames: 2800
  },
  {
    name: 'Nintendo Switch',
    slug: 'nintendo-switch',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    description: 'Hybrid console perfection offering on-the-go play and legendary family and adventure experiences.',
    iconName: 'Tv2',
    coverImage: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=800&auto=format&fit=crop',
    deviceTypes: 'Nintendo Switch OLED, Switch Lite',
    totalGames: 2400
  },
  {
    name: 'Android',
    slug: 'android',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    description: 'Mobile gaming powerhouse spanning massive battle royales, gacha RPGs, and cloud apps.',
    iconName: 'Smartphone',
    coverImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    deviceTypes: 'Phones & Tablets, Foldables, Emulators',
    totalGames: 1950
  },
  {
    name: 'iOS',
    slug: 'ios',
    badgeColor: 'bg-slate-400/10 text-slate-300 border-slate-500/20',
    description: 'Ultra-smooth Apple Silicon performance with Apple Arcade and AAA console ports on iPad/iPhone.',
    iconName: 'Apple',
    coverImage: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop',
    deviceTypes: 'iPhone, iPad Pro, Mac',
    totalGames: 1800
  },
  {
    name: 'Roblox',
    slug: 'roblox',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    description: 'The metaverse platform hosting millions of user-created interactive experiences, roleplay, and simulators.',
    iconName: 'Layers',
    coverImage: 'https://images.unsplash.com/photo-1612287232230-b30f81d11ff3?q=80&w=800&auto=format&fit=crop',
    deviceTypes: 'Cross-platform Metaverse',
    totalGames: 950
  }
];
