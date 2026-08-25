import { GenreType } from '../types';

export interface GenreInfo {
  name: GenreType;
  slug: string;
  description: string;
  iconName: string;
  coverImage: string;
  popularCount: number;
  count?: number;
}

export const GENRES_DATA: GenreInfo[] = [
  {
    name: 'Action',
    slug: 'action',
    description: 'High-intensity gameplay focusing on physical challenges, reflexes, and combat.',
    iconName: 'Swords',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    popularCount: 1420
  },
  {
    name: 'Adventure',
    slug: 'adventure',
    description: 'Story-driven experiences exploring vast worlds, puzzles, and narrative choices.',
    iconName: 'Compass',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    popularCount: 980
  },
  {
    name: 'RPG',
    slug: 'rpg',
    description: 'Role-playing games with deep character progression, gear optimization, and quests.',
    iconName: 'Shield',
    coverImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop',
    popularCount: 1250
  },
  {
    name: 'FPS',
    slug: 'fps',
    description: 'First-person shooters testing pinpoint marksmanship, tactical coordination, and speed.',
    iconName: 'Crosshair',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    popularCount: 890
  },
  {
    name: 'Horror',
    slug: 'horror',
    description: 'Thrilling and terrifying atmospheres with survival tension and spine-chilling encounters.',
    iconName: 'Ghost',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    popularCount: 460
  },
  {
    name: 'Racing',
    slug: 'racing',
    description: 'High-speed motorsport, hypercar customization, and exhilarating track battles.',
    iconName: 'Gauge',
    coverImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop',
    popularCount: 380
  },
  {
    name: 'Strategy',
    slug: 'strategy',
    description: 'Tactical command, base building, economic management, and 4X domination.',
    iconName: 'Brain',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    popularCount: 620
  },
  {
    name: 'Simulation',
    slug: 'simulation',
    description: 'Realistic recreation of flight, city management, farming, or daily life systems.',
    iconName: 'Cpu',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    popularCount: 510
  },
  {
    name: 'Survival',
    slug: 'survival',
    description: 'Resource gathering, crafting shelters, facing harsh elements, and staying alive.',
    iconName: 'Flame',
    coverImage: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=800&auto=format&fit=crop',
    popularCount: 740
  },
  {
    name: 'Sandbox',
    slug: 'sandbox',
    description: 'Boundless creativity, open world freedom, construction, and player-driven mechanics.',
    iconName: 'Boxes',
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
    popularCount: 830
  },
  {
    name: 'Sports',
    slug: 'sports',
    description: 'Competitive football, basketball, combat sports, and tournament athletics.',
    iconName: 'Trophy',
    coverImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop',
    popularCount: 340
  },
  {
    name: 'MMORPG',
    slug: 'mmorpg',
    description: 'Persistent online universes with millions of players, epic raids, and guild economies.',
    iconName: 'Users',
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop',
    popularCount: 670
  }
];
