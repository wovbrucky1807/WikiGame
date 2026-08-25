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
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg',
    popularCount: 1420,
    count: 38
  },
  {
    name: 'Adventure',
    slug: 'adventure',
    description: 'Story-driven experiences exploring vast worlds, puzzles, and narrative choices.',
    iconName: 'Compass',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg',
    popularCount: 980,
    count: 32
  },
  {
    name: 'RPG',
    slug: 'rpg',
    description: 'Role-playing games with deep character progression, gear optimization, and quests.',
    iconName: 'Shield',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg',
    popularCount: 1250,
    count: 28
  },
  {
    name: 'FPS',
    slug: 'fps',
    description: 'First-person shooters testing pinpoint marksmanship, tactical coordination, and speed.',
    iconName: 'Crosshair',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/header.jpg',
    popularCount: 890,
    count: 24
  },
  {
    name: 'Battle Royale',
    slug: 'battle-royale',
    description: 'Massive survivor showdowns where only the last team or solo hero stands victorious.',
    iconName: 'Flame',
    coverImage: 'https://cdn2.unrealengine.com/egs-fortnite-hero-1920x1080.jpg',
    popularCount: 780,
    count: 14
  },
  {
    name: 'MOBA',
    slug: 'moba',
    description: 'Multiplayer online battle arenas featuring intense 5v5 team tactical clashes.',
    iconName: 'Users',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/570/header.jpg',
    popularCount: 950,
    count: 6
  },
  {
    name: 'Horror',
    slug: 'horror',
    description: 'Thrilling and terrifying atmospheres with survival tension and spine-chilling encounters.',
    iconName: 'Ghost',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg',
    popularCount: 460,
    count: 12
  },
  {
    name: 'Racing',
    slug: 'racing',
    description: 'High-speed motorsport, hypercar customization, and exhilarating track battles.',
    iconName: 'Gauge',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg',
    popularCount: 380,
    count: 8
  },
  {
    name: 'Strategy',
    slug: 'strategy',
    description: 'Tactical command, base building, economic management, and 4X domination.',
    iconName: 'Brain',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg',
    popularCount: 620,
    count: 15
  },
  {
    name: 'Simulation',
    slug: 'simulation',
    description: 'Realistic recreation of flight, city management, farming, or daily life systems.',
    iconName: 'Cpu',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/227300/header.jpg',
    popularCount: 510,
    count: 14
  },
  {
    name: 'Survival',
    slug: 'survival',
    description: 'Resource gathering, crafting shelters, facing harsh elements, and staying alive.',
    iconName: 'Flame',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg',
    popularCount: 740,
    count: 22
  },
  {
    name: 'Sandbox',
    slug: 'sandbox',
    description: 'Boundless creativity, open world freedom, construction, and player-driven mechanics.',
    iconName: 'Boxes',
    coverImage: 'https://images.ctfassets.net/4cd45et68cgf/5y4h3b1H170E36aO6Q64c0/9df9b90a6ea158525b68233f2a36b325/Minecraft-Bedrock-1.20-Trails-and-Tales-Key-Art-1920x1080.jpg',
    popularCount: 830,
    count: 18
  },
  {
    name: 'Sports',
    slug: 'sports',
    description: 'Competitive football, basketball, combat sports, and tournament athletics.',
    iconName: 'Trophy',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg',
    popularCount: 340,
    count: 8
  },
  {
    name: 'MMORPG',
    slug: 'mmorpg',
    description: 'Persistent online universes with millions of players, epic raids, and guild economies.',
    iconName: 'Users',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg',
    popularCount: 670,
    count: 10
  }
];
