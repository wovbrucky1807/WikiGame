import { Game } from '../types';

export const SAMPLE_GAMES: Game[] = [
  {
    id: 'game-1',
    slug: 'minecraft',
    title: 'Minecraft',
    tagline: 'Place blocks and go on adventures in infinite procedurally generated worlds.',
    coverImage: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1600&auto=format&fit=crop',
    developer: 'Mojang Studios',
    publisher: 'Xbox Game Studios',
    releaseDate: 'November 18, 2011',
    releaseYear: 2011,
    genres: ['Sandbox', 'Survival', 'Adventure'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Android', 'iOS'],
    rating: 9.6,
    ratingCount: 4520,
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    overview: 'Minecraft is a 3D sandbox adventure game developed by Mojang Studios where players explore a blocky, procedurally generated 3D world with virtually infinite terrain. Players can discover and extract raw materials, craft tools and items, build structures, and battle hostile mobs across various survival and creative game modes.',
    gameplay: 'In Survival Mode, players must gather natural resources such as wood and stone to craft tools and armor. A hunger bar and health bar dictate life sustainability, requiring players to hunt animals, cultivate crops, and fend off creatures like Zombies, Skeletons, and Creepers at night. In Creative Mode, players have unlimited resources, invulnerability, and the ability to fly, creating colossal architectures or intricate Redstone electronic circuits.',
    story: 'While primarily a sandbox with emergent gameplay, Minecraft features an overarching endgame journey: players prepare equipment, travel to the hellish Nether dimension to collect Blaze Rods, brew potions, locate an underground Stronghold, and activate an End Portal to defeat the mighty Ender Dragon.',
    characters: [
      {
        id: 'char-steve',
        name: 'Steve',
        role: 'Default Protagonist / Miner',
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop',
        description: 'The iconic default male avatar capable of carrying millions of metric tons of gold blocks and wielding legendary enchanted gear.',
        abilities: ['Mining Mastery', 'Infinite Stamina Sprint', 'Redstone Engineering']
      },
      {
        id: 'char-alex',
        name: 'Alex',
        role: 'Explorer / Survivalist',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
        description: 'The swift orange-haired adventurer skilled in archery, animal husbandry, and deep cave navigation.',
        abilities: ['Sharpshooting', 'Agile Navigation', 'Brewing Mastery']
      },
      {
        id: 'char-ender-dragon',
        name: 'Ender Dragon (Jean)',
        role: 'End Dimension Boss',
        image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=400&auto=format&fit=crop',
        description: 'The colossal flying boss inhabiting The End, protected by healing Obsidian End Crystals.',
        abilities: ['Dragon Breath Acid', 'Wing Buffet Knockback', 'Perching Dive']
      }
    ],
    maps: [
      {
        id: 'map-overworld',
        name: 'The Overworld',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: 'Surface & Underground',
        description: 'Vibrant biome matrix featuring lush forests, snowy tundras, deep dark caves, lush dripstone caverns, and deep oceans.',
        pointsOfInterest: ['Ancient City', 'Woodland Mansion', 'Ocean Monument', 'Desert Temple', 'Village']
      },
      {
        id: 'map-nether',
        name: 'The Nether',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
        type: 'Hellish Underworld Dimension',
        description: 'A fiery realm filled with lava lakes, crimson forests, soul sand valleys, and basalt deltas.',
        pointsOfInterest: ['Nether Fortress', 'Bastion Remnant', 'Crimson Forest', 'Piglin Outpost']
      }
    ],
    items: [
      {
        id: 'item-diamond-sword',
        name: 'Enchanted Netherite Sword',
        category: 'Weapons',
        rarity: 'Mythic',
        image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&auto=format&fit=crop',
        description: 'Forged from ancient debris and diamonds, imbued with Sharpness V, Fire Aspect II, and Mending.',
        stats: { Damage: '14.5 DPS', Durability: '2031 Hits', FireDamage: '4s Burn' }
      },
      {
        id: 'item-elytra',
        name: 'Elytra Wings',
        category: 'Equipment',
        rarity: 'Legendary',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop',
        description: 'Rare wing cloak acquired from End Ships allowing high-speed gliding powered by fireworks.',
        stats: { GlideRatio: '10:1', MaxSpeed: '67 m/s' }
      },
      {
        id: 'item-totem',
        name: 'Totem of Undying',
        category: 'Consumables',
        rarity: 'Epic',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop',
        description: 'Held in the off-hand to grant instant resurrection and absorption upon fatal damage.',
        stats: { RegenTime: '45s', FireResist: '40s' }
      }
    ],
    guides: [
      {
        id: 'guide-mc-beginner',
        title: 'First Day Survival: Shelters, Torches, and Smelting',
        category: 'Beginner Guide',
        author: 'CraftMaster99',
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
        date: '2025-01-15',
        readTime: '6 min',
        likes: 342,
        content: `### 1. Punching Trees & Crafting Table
Immediately gather 10-15 logs of wood upon spawning. Turn logs into wooden planks, then craft a Crafting Table. Build a Wooden Pickaxe to mine stone right away—never waste wood on full sets of wooden tools.

### 2. Upgrading to Stone & Finding Coal
Mine 20-30 cobblestones to make a Stone Pickaxe, Stone Axe, and a Furnace. Locate surface coal veins or burn excess wood into Charcoal to make torches.

### 3. Securing a Bed Before Nightfall
Hunt sheep to collect 3 wool of matching colors. Craft a bed to skip hazardous nighttime mobs (Creepers and Phantoms).`
      },
      {
        id: 'guide-mc-nether',
        title: 'Complete Nether Fortress & Brewing Guide',
        category: 'Walkthrough',
        author: 'PotionMaster',
        date: '2025-02-01',
        readTime: '10 min',
        likes: 218,
        content: `### 1. Nether Portal Preparation
Bring full Iron or Diamond armor with at least one piece of Gold armor to prevent Piglins from attacking on sight.

### 2. Hunting Blazes
Locate a Nether Fortress and find the Blaze spawner. Use shields to block fireball blasts, then gather 10+ Blaze Rods to craft Brewing Stands and Eyes of Ender.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit / macOS / Linux',
        cpu: 'Intel Core i3-3210 3.2 GHz / AMD A8-7600 APU 3.1 GHz',
        gpu: 'Intel HD Graphics 4000 / AMD Radeon R5 series',
        ram: '4 GB',
        storage: '4 GB HDD space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i5-4690 3.5GHz / AMD FX-8350 4.0 GHz',
        gpu: 'GeForce 700 Series / AMD Radeon Rx 200 Series',
        ram: '8 GB DDR4',
        storage: '16 GB SSD space'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'MmB9b5njVbA'
  },
  {
    id: 'game-2',
    slug: 'grand-theft-auto-v',
    title: 'Grand Theft Auto V',
    tagline: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with the criminal underworld.',
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
    releaseDate: 'September 17, 2013',
    releaseYear: 2013,
    genres: ['Action', 'Adventure'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    rating: 9.7,
    ratingCount: 5210,
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    overview: 'Grand Theft Auto V is an expansive open-world action-adventure masterpiece set in the sprawling sun-soaked metropolis of Los Santos and the rugged Blaine County. Players switch seamlessly between three intertwined protagonists carrying out high-stakes heists across the corrupt state of San Andreas.',
    gameplay: 'Playable from either a third-person or first-person perspective, players navigate the world on foot or by vehicle. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside missions, players can freely roam Los Santos, participate in street races, purchase properties, trade stocks on BAWSAQ, or dive into the massive GTA Online multiplayer realm.',
    story: 'Nine years after a botched robbery in North Yankton, former bank robber Michael Townley lives under witness protection in Los Santos. When he gets pulled back into the underworld, he teams up with ambitious street repo man Franklin Clinton and psychotic desert marauder Trevor Philips to execute massive multi-phase heists while evading the corrupt FIB and private mercenary army Merryweather.',
    characters: [
      {
        id: 'char-michael',
        name: 'Michael De Santa',
        role: 'Mastermind / Marksman',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'A retired legendary bank robber navigating mid-life crisis, family dysfunction, and high-stakes planning.',
        abilities: ['Bullet-Time Shooting Focus', 'Tactical Planning']
      },
      {
        id: 'char-franklin',
        name: 'Franklin Clinton',
        role: 'Getaway Specialist / Street Hustler',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
        description: 'A disciplined young driver seeking a way out of South Central gang life into genuine wealth.',
        abilities: ['Vehicle Slow-Motion Reflexes', 'Precision Driving']
      },
      {
        id: 'char-trevor',
        name: 'Trevor Philips',
        role: 'Unpredictable Psychopath / Aviator',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
        description: 'An unhinged ex-military pilot running Trevor Philips Enterprises in the badlands of Sandy Shores.',
        abilities: ['Rage Mode (Invulnerability & 2x Damage)', 'Military Flight']
      }
    ],
    maps: [
      {
        id: 'map-los-santos',
        name: 'Los Santos & Blaine County',
        image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=600&auto=format&fit=crop',
        type: 'Metropolitan & Wilderness County',
        description: 'Enormous map featuring downtown skyscrapers, Hollywood Hills mansions, Del Perro pier, Mount Chiliad, and the Alamo Sea.',
        pointsOfInterest: ['Maze Bank Tower', 'Vinewood Sign', 'Fort Zancudo Air Base', 'Mount Chiliad', 'Paleto Bay']
      }
    ],
    items: [
      {
        id: 'item-heavy-sniper',
        name: 'Heavy Sniper Mk II',
        category: 'Weapons',
        rarity: 'Legendary',
        image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=400&auto=format&fit=crop',
        description: 'High-caliber anti-materiel rifle capable of equipping thermal scopes and explosive rounds.',
        stats: { Damage: '98/100', Range: '100/100', FireRate: '25/100' }
      },
      {
        id: 'item-oppressor',
        name: 'Pegassi Oppressor Mk II',
        category: 'Vehicles',
        rarity: 'Mythic',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=400&auto=format&fit=crop',
        description: 'Rocket-powered hoverbike equipped with homing missiles and countermeasures.',
        stats: { TopSpeed: '130 mph', Missiles: '20 Homing Rockets', Boost: 'Recharging Rocket' }
      }
    ],
    guides: [
      {
        id: 'guide-gta-heists',
        title: 'Cayo Perico Heist Solo Guide: $1.5M per Hour',
        category: 'Tips & Tricks',
        author: 'HeistCommander',
        date: '2025-01-20',
        readTime: '8 min',
        likes: 512,
        content: `### 1. Kosatka Submarine Approach
Start the setup on your Kosatka submarine. Choose the Longfin boat or Kosatka Drainage Tunnel infiltration approach.

### 2. Drainage Tunnel Entry
Cut the underwater grate with the cutting torch. Sneak past guards using silenced AP Pistols to eliminate solo targets without raising the compound alarm.

### 3. Primary Target Looting
Hack the basement elevator code and grab the primary loot (Tequila/Bearer Bonds/Pink Diamond) before escaping via the southwest cliff swim.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64 Bit',
        cpu: 'Intel Core 2 Quad CPU Q6600 @ 2.40GHz / AMD Phenom 9850 Quad-Core @ 2.5GHz',
        gpu: 'NVIDIA 9800 GT 1GB / AMD HD 4870 1GB',
        ram: '4 GB',
        storage: '90 GB available space'
      },
      recommended: {
        os: 'Windows 11 64 Bit',
        cpu: 'Intel Core i5 3470 @ 3.2GHz / AMD FX-8350 @ 4GHz',
        gpu: 'NVIDIA GTX 1060 6GB / AMD RX 580 8GB',
        ram: '16 GB',
        storage: '110 GB SSD space'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'QkkoHAzjnUs'
  },
  {
    id: 'game-3',
    slug: 'elden-ring',
    title: 'Elden Ring',
    tagline: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord.',
    coverImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    developer: 'FromSoftware Inc.',
    publisher: 'Bandai Namco Entertainment',
    releaseDate: 'February 25, 2022',
    releaseYear: 2022,
    genres: ['RPG', 'Action', 'Adventure'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    rating: 9.8,
    ratingCount: 6180,
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    overview: 'Elden Ring is an epic dark-fantasy action RPG created by Hidetaka Miyazaki and George R. R. Martin. Players explore the Lands Between on foot or atop Torrent the spectral steed, encountering colossal demigods, ancient dungeons, catacombs, and boundless build customization.',
    gameplay: 'Demanding combat tests timing, stamina management, and mastery over dodges, parries, spells, and weapon ashes of war. Players can summon Spirit Ashes like the Mimic Tear or summon online allies to overcome crushing boss challenges in seamless open-world exploration.',
    story: 'In the Lands Between, the Elden Ring has been shattered, and its shards—the Great Runes—are claimed by Queen Marika\'s demigod offspring. A war known as The Shattering erupted. As a Tarnished who lost grace and was exiled, you return to restore order and become the new Elden Lord.',
    characters: [
      {
        id: 'char-melina',
        name: 'Melina',
        role: 'Maiden of the Erdtree',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
        description: 'A mysterious maiden who offers a pact: she grants you the spectral steed Torrent and the ability to turn runes into strength.',
        abilities: ['Rune Conversion', 'Spectral Steed Summon', 'Erdtree Incantations']
      },
      {
        id: 'char-ranni',
        name: 'Ranni the Witch',
        role: 'Lunar Demigod Princess',
        image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop',
        description: 'The four-armed Lunar Princess seeking to cast off the Greater Will and usher in the Age of the Stars.',
        abilities: ['Dark Moon Sorcery', 'Spirit Calling Bell', 'Frost Manipulation']
      },
      {
        id: 'char-malenia',
        name: 'Malenia, Blade of Miquella',
        role: 'Demigod Boss / Goddess of Rot',
        image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=400&auto=format&fit=crop',
        description: 'The undefeated warrior wielding the prosthetic golden blade and the dreaded Waterfowl Dance.',
        abilities: ['Waterfowl Dance', 'Lifesteal On Hit', 'Scarlet Aeonia Bloom']
      }
    ],
    maps: [
      {
        id: 'map-lands-between',
        name: 'The Lands Between',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: 'Vast Interconnected World',
        description: 'Spanning Limgrave, the poisonous swamps of Caelid, the submerged academy of Liurnia, Leyndell Royal Capital, and the Mountaintops of the Giants.',
        pointsOfInterest: ['Stormveil Castle', 'Academy of Raya Lucaria', 'Radahn Festival in Redmane', 'Erdtree Sanctuary', 'Haligtree']
      }
    ],
    items: [
      {
        id: 'item-rivers-of-blood',
        name: 'Rivers of Blood Katana',
        category: 'Weapons',
        rarity: 'Legendary',
        image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&auto=format&fit=crop',
        description: 'Cursed curved blade with the Corpse Piler skill that slashes successive arcs of blood fire causing massive hemorrhage.',
        stats: { PhysicalAtk: '186', FireAtk: '186', BloodLoss: '78 Buildup' }
      },
      {
        id: 'item-mimic-tear',
        name: 'Mimic Tear Spirit Ashes',
        category: 'Equipment',
        rarity: 'Mythic',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop',
        description: 'Summons a spectral clone of the player copying all currently equipped weapons, armor, and spells.',
        stats: { HPCost: '660 HP', Duration: 'Until Defeated' }
      }
    ],
    guides: [
      {
        id: 'guide-elden-dex-arc',
        title: 'Ultimate Bleed / Arcane Build for Patch 1.10+',
        category: 'Best Builds',
        author: 'TarnishedSage',
        date: '2025-01-18',
        readTime: '7 min',
        likes: 720,
        content: `### 1. Stat Distribution (Level 125 Meta)
- Vigor: 60 (Crucial for late game survival)
- Mind: 20
- Endurance: 25
- Strength: 12
- Dexterity: 45
- Arcane: 60

### 2. Key Talismans & Armor
- Lord of Blood's Exultation (+20% Attack Power on blood loss)
- Rotten Winged Sword Insignia
- White Mask (+10% Attack Power on bleed nearby)
- Shard of Alexander (+15% Ash of War damage)`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i5-8400 / AMD Ryzen 3 3300X',
        gpu: 'NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB',
        ram: '12 GB',
        storage: '60 GB available space'
      },
      recommended: {
        os: 'Windows 10 / 11 64-bit',
        cpu: 'Intel Core i7-8700K / AMD Ryzen 5 3600X',
        gpu: 'NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56 8GB',
        ram: '16 GB',
        storage: '60 GB SSD'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'E3Huy2cdih0'
  },
  {
    id: 'game-4',
    slug: 'valorant',
    title: 'Valorant',
    tagline: 'A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    developer: 'Riot Games',
    publisher: 'Riot Games',
    releaseDate: 'June 2, 2020',
    releaseYear: 2020,
    genres: ['FPS', 'Action', 'Strategy'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    rating: 9.1,
    ratingCount: 3840,
    isTrending: true,
    isPopular: true,
    overview: 'Valorant is a competitive tactical first-person hero shooter from Riot Games. Teams of five attack and defend bomb sites across multiple rounds using high-precision weaponry alongside distinct supernatural Agent powers powered by Radianite.',
    gameplay: 'Matches consist of 25 rounds where attackers attempt to plant the Spike and defenders aim to defuse it or eliminate the opposing squad. Perfect crosshair placement, spray recoil control, movement cancellation (counter-strafing), and utility communication are paramount to climbing from Iron to Radiant.',
    characters: [
      {
        id: 'char-jett',
        name: 'Jett',
        role: 'Duelist / Entry Fragger',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
        description: 'Hailing from South Korea, Jett is an agile wind manipulator who outmaneuvers opponents with rapid dashes and deadly throwing daggers.',
        abilities: ['Tailwind Dash', 'Cloudburst Smoke', 'Blade Storm Ultimate']
      },
      {
        id: 'char-omen',
        name: 'Omen',
        role: 'Controller / Smoker',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'A phantom assassin who manipulates shadows to obscure sightlines, teleport across the map, and induce paranoia.',
        abilities: ['Dark Cover Hollow Smokes', 'Shrouded Step Teleport', 'From the Shadows Global Teleport']
      },
      {
        id: 'char-sova',
        name: 'Sova',
        role: 'Initiator / Recon',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
        description: 'Russian archer who reveals enemy positions using bouncing sonar arrows and hunter drones.',
        abilities: ['Recon Bolt', 'Owl Drone', 'Hunter\'s Fury Beam']
      }
    ],
    maps: [
      {
        id: 'map-ascent',
        name: 'Ascent',
        image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=600&auto=format&fit=crop',
        type: 'Venice Open Courtyard Map',
        description: 'Set in Italy, featuring a large open mid area with mechanical blast doors on A and B bomb sites.',
        pointsOfInterest: ['Mid Courtyard', 'A Rafters', 'B Boathouse', 'Tree Room']
      },
      {
        id: 'map-bind',
        name: 'Bind',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: 'Teleporter Two-Site Map',
        description: 'Located in Morocco, Bind features no mid lane but offers two one-way teleportation chambers.',
        pointsOfInterest: ['Hookah', 'A Showers', 'B Site Tube', 'Teleporter Exit']
      }
    ],
    items: [
      {
        id: 'item-vandal',
        name: 'Vandal Rifle',
        category: 'Weapons',
        rarity: 'Epic',
        image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=400&auto=format&fit=crop',
        description: 'High-damage tactical rifle with guaranteed 1-tap headshot lethality at all ranges.',
        stats: { HeadshotDamage: '160', Bodyshot: '40', Magazine: '25 Bullets' }
      },
      {
        id: 'item-operator',
        name: 'Operator Sniper',
        category: 'Weapons',
        rarity: 'Legendary',
        image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&auto=format&fit=crop',
        description: 'High-powered sniper rifle capable of taking out opponents in a single torso shot.',
        stats: { Headshot: '255', Body: '150', Cost: '4,700 Credits' }
      }
    ],
    guides: [
      {
        id: 'guide-val-aim',
        title: 'Crosshair Placement & Counter-Strafing Mastery',
        category: 'Tips & Tricks',
        author: 'RadiantCoach',
        date: '2025-01-25',
        readTime: '6 min',
        likes: 489,
        content: `### 1. The Head-Level Rule
Always align your crosshair with head height at corners before peeking. Use wall textures, boxes, and door trims to judge head heights accurately.

### 2. Counter-Strafing
When moving left with 'A', tap 'D' to achieve instantaneous zero-velocity before pressing fire. This guarantees first-bullet accuracy.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core 2 Duo E8400 / AMD Athlon 200GE',
        gpu: 'Intel HD 4000 / AMD Radeon R5 200',
        ram: '4 GB',
        storage: '25 GB SSD/HDD'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel i5-9400F 2.9GHz / AMD Ryzen 5 2600X',
        gpu: 'NVIDIA GTX 1050 Ti / AMD Radeon R7 370',
        ram: '16 GB',
        storage: '35 GB SSD'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'e_E9W2vsRbA'
  },
  {
    id: 'game-5',
    slug: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    tagline: 'An open-world, action-adventure RPG set in the megalopolis of Night City.',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop',
    developer: 'CD Projekt RED',
    publisher: 'CD Projekt',
    releaseDate: 'December 10, 2020',
    releaseYear: 2020,
    genres: ['RPG', 'Action', 'FPS'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    rating: 9.3,
    ratingCount: 4210,
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    overview: 'Cyberpunk 2077 is an open-world action RPG set in Night City, a megalopolis obsessed with power, glamour, and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality, while carrying the cybernetic ghost of rebellious rockerboy Johnny Silverhand.',
    gameplay: 'Featuring extensive cyberware augmentations, skill trees, dynamic combat (Netrunning quickhacks, Mantis Blades melee, Smart guns, and Sandevistan time-slowing reflexes), and branching narrative dialogue with multiple emotional endings.',
    characters: [
      {
        id: 'char-v',
        name: 'V (Valerie / Vincent)',
        role: 'Mercenary Outlaw / Protagonist',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'Customizable protagonist fighting for survival in the neon-lit depths of Night City with the biochip ticking in their brain.',
        abilities: ['Sandevistan Time Dilation', 'Overclock Netrunning Quickhacks', 'Gorilla Arms']
      },
      {
        id: 'char-johnny',
        name: 'Johnny Silverhand',
        role: 'Rockers Rebel / Digital Ghost',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
        description: 'Legendary frontman of Samurai and anti-corporate terrorist stored in the Relic prototype.',
        abilities: ['Malorian 3516 Gunslinger', 'Rebel Charisma']
      }
    ],
    maps: [
      {
        id: 'map-night-city',
        name: 'Night City & Dogtown',
        image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=600&auto=format&fit=crop',
        type: 'Futuristic Megalopolis',
        description: 'Spanning Watson, Westbrook, City Center, Pacifica, Heywood, Santo Domingo, Badlands, and the lawless walled zone of Dogtown.',
        pointsOfInterest: ['Arasaka Tower', 'Afterlife Bar', 'Jig-Jig Street', 'Dogtown Black Market', 'Pacifica Grand Imperial Mall']
      }
    ],
    items: [
      {
        id: 'item-sandevistan',
        name: 'Militech "Apogee" Sandevistan',
        category: 'Equipment',
        rarity: 'Mythic',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop',
        description: 'Tier 5++ iconic operating system slowing time by up to 85% with extended duration upon enemy kills.',
        stats: { TimeDilation: '85%', ExtendedDuration: '+10% per kill', CritChance: '+15%' }
      }
    ],
    guides: [
      {
        id: 'guide-cyber-netrunner',
        title: 'Infinite RAM Netrunner 2.0 Build',
        category: 'Best Builds',
        author: 'AltCunninghamFan',
        date: '2025-01-12',
        readTime: '7 min',
        likes: 390,
        content: `### 1. Core Perks
Take Overclock in the Intelligence tree to convert your HP into instantly usable Cyberware RAM.

### 2. Quickhack Queue Synergies
Queue Cyberware Malfunction followed by Short Circuit or Synapse Burnout for 300% critical damage multiplication without alerting guards.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Core i7-6700 / Ryzen 5 1600',
        gpu: 'GeForce GTX 1060 6GB / Radeon RX 580 8GB',
        ram: '12 GB',
        storage: '70 GB SSD'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Core i7-12700 / Ryzen 7 7800X3D',
        gpu: 'GeForce RTX 3080 / Radeon RX 6800 XT',
        ram: '32 GB',
        storage: '100 GB NVMe SSD'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'LembwKDo1Dk'
  },
  {
    id: 'game-6',
    slug: 'genshin-impact',
    title: 'Genshin Impact',
    tagline: 'Step into Teyvat, a vast world teeming with elemental life and flowing with power.',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop',
    developer: 'miHoYo / HoYoverse',
    publisher: 'HoYoverse',
    releaseDate: 'September 28, 2020',
    releaseYear: 2020,
    genres: ['RPG', 'Action', 'Adventure'],
    platforms: ['PC', 'PlayStation', 'Android', 'iOS'],
    rating: 9.0,
    ratingCount: 3990,
    isTrending: true,
    isPopular: true,
    overview: 'Genshin Impact is a free-to-play anime action open-world RPG set in the continent of Teyvat. Players embark on a journey across seven elemental nations to search for their lost twin sibling, unraveling secrets of the gods and Celestia along the way.',
    gameplay: 'Combat revolves around a party of four switchable characters combining elements—Anemo, Geo, Electro, Dendro, Hydro, Pyro, and Cryo—to trigger devastating elemental reactions like Vaporize, Melt, Hyperbloom, and Swirl.',
    characters: [
      {
        id: 'char-raiden',
        name: 'Raiden Shogun (Ei)',
        role: 'Electro Archon / Sub-DPS & Battery',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
        description: 'The ruler of Inazuma pursuing Eternity, wielding the legendary Musou no Hitotachi sword.',
        abilities: ['Transcendence: Baleful Omen', 'Secret Art: Musou Shinsetsu', 'Team Energy Restoration']
      },
      {
        id: 'char-furina',
        name: 'Furina de Fontaine',
        role: 'Hydro Sub-DPS / Global Team Buffer',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
        description: 'The former Hydro Archon performer whose Fanfare points supercharge total party damage.',
        abilities: ['Salon Solitaire Salon Members', 'Let the People Rejoice Fanfare']
      },
      {
        id: 'char-zhongli',
        name: 'Zhongli (Morax)',
        role: 'Geo Archon / Ultimate Shielder',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'The consultant to the Wangsheng Funeral Parlor capable of casting impenetrable Jade Shields and summoning meteors.',
        abilities: ['Dominus Lapidis Jade Shield', 'Planet Befall Petrifying Meteor']
      }
    ],
    maps: [
      {
        id: 'map-teyvat',
        name: 'The Continent of Teyvat',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: 'Open World Elemental Continent',
        description: 'Encompasses Mondstadt, Liyue Harbor, Inazuma archipelago, Sumeru rainforest & desert, Fontaine underwater realms, and Natlan volcanic terrains.',
        pointsOfInterest: ['Dragonspine', 'Liyue Harbor', 'Grand Narukami Shrine', 'Sumeru City Tree', 'Opera Epiclese']
      }
    ],
    items: [
      {
        id: 'item-staff-of-homa',
        name: 'Staff of Homa',
        category: 'Weapons',
        rarity: 'Legendary',
        image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&auto=format&fit=crop',
        description: 'Legendary polearm converting max HP into bonus Attack with 66.2% Critical Damage substat.',
        stats: { BaseAtk: '608', CritDMG: '66.2%', HPBonus: '+20%' }
      }
    ],
    guides: [
      {
        id: 'guide-genshin-hyperbloom',
        title: 'Hyperbloom Team Comp Guide: Low Investment, Massive Damage',
        category: 'Best Builds',
        author: 'KeqingMainsEditor',
        date: '2025-01-10',
        readTime: '8 min',
        likes: 640,
        content: `### 1. Team Composition
- Hydro: Xingqiu, Yelan, or Kokomi
- Dendro: Nahida, Dendro Traveler, or Alhaitham
- Electro (Full EM build): Kuki Shinobu or Raiden Shogun
- Flex: Zhongli, Kazuha, or Beidou

### 2. Rotation & Gear
Equip your Electro trigger with 1000 Elemental Mastery (Gilded Dreams / Flower of Paradise Lost) to deal 35,000+ single-target damage per bloom seed with no crit required!`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 SP1 64-bit / Android 8.0 / iOS 12',
        cpu: 'Intel Core i5 or equivalent',
        gpu: 'NVIDIA GeForce GT 1030',
        ram: '8 GB',
        storage: '70 GB available space'
      },
      recommended: {
        os: 'Windows 10 / 11 64-bit',
        cpu: 'Intel Core i7 equivalent or higher',
        gpu: 'NVIDIA GeForce GTX 1060 6GB or better',
        ram: '16 GB',
        storage: '100 GB SSD'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'HLUY1nICQRY'
  },
  {
    id: 'game-7',
    slug: 'roblox',
    title: 'Roblox',
    tagline: 'An online platform and storefront where users go to play games and create games.',
    coverImage: 'https://images.unsplash.com/photo-1612287232230-b30f81d11ff3?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
    developer: 'Roblox Corporation',
    publisher: 'Roblox Corporation',
    releaseDate: 'September 1, 2006',
    releaseYear: 2006,
    genres: ['Sandbox', 'Adventure', 'MMORPG'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Android', 'iOS', 'Roblox'],
    rating: 8.9,
    ratingCount: 3120,
    isPopular: true,
    overview: 'Roblox is an online game platform and game creation system developed by Roblox Corporation that allows users to program games and play games created by other users using the lightweight programming language Lua.',
    gameplay: 'Features hundreds of thousands of distinct games ranging from Blox Fruits (anime combat RPG), Brookhaven RP (roleplaying town), Tower of Hell (parkour obby), to Pet Simulator 99 and Doors (horror puzzle). Players customize their blocky or realistic R15 avatar with clothing, accessories, and emotes.',
    characters: [
      {
        id: 'char-noob',
        name: 'Classic Noob / Avatar',
        role: 'Iconic Mascot',
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=400&auto=format&fit=crop',
        description: 'The legendary yellow-skinned, blue-shirted, green-pants avatar recognized universally across internet culture.',
        abilities: ['Infinite Respawn', 'OOF Sound Effect Meme', 'Avatar Customization']
      }
    ],
    maps: [
      {
        id: 'map-blox-fruits',
        name: 'Blox Fruits Seas (First, Second & Third Sea)',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: 'Naval Anime Seas',
        description: 'Vast ocean populated by islands, pirate hideouts, marine fortresses, and mythical fruit spawns.',
        pointsOfInterest: ['Pirate Starter Island', 'Green Zone', 'Mansion', 'Floating Turtle', 'Sea of Treats']
      }
    ],
    items: [
      {
        id: 'item-dough-fruit',
        name: 'Awakened Dough Fruit',
        category: 'Items',
        rarity: 'Mythic',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop',
        description: 'Special Paramecia devil fruit granting sticky dough morphing and devastating combo lock abilities.',
        stats: { ComboPotential: '10/10', StunDuration: '4.5s', RaidsReq: 'Dough Raid 6x' }
      }
    ],
    guides: [
      {
        id: 'guide-blox-fruits-leveling',
        title: 'Fastest 1-2550 Max Leveling Guide in Blox Fruits',
        category: 'How to Level Up',
        author: 'BloxFruitPro',
        date: '2025-01-05',
        readTime: '5 min',
        likes: 410,
        content: `### 1. First Sea (Level 1-700)
Get the Light Fruit or Buddha Fruit immediately. Light fruit gives flight speed to travel between islands and elemental immunity to standard mob attacks.

### 2. Second & Third Sea
Awaken Buddha fruit at the raid labs. Put all stat points into Melee and Defense to rapidly smash quest bosses with electric claws or godhuman fighting style.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 / Android 6.0 / iOS 11',
        cpu: '1.6 GHz or better processor',
        gpu: 'DirectX 10 or higher compatible',
        ram: '2 GB',
        storage: '2 GB space'
      },
      recommended: {
        os: 'Windows 11',
        cpu: 'Intel i5 / AMD Ryzen 5',
        gpu: 'GeForce GTX 1050',
        ram: '8 GB',
        storage: '10 GB'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1612287232230-b30f81d11ff3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'eAvXhNkyHPQ'
  },
  {
    id: 'game-8',
    slug: 'counter-strike-2',
    title: 'Counter-Strike 2',
    tagline: 'The next chapter in the most celebrated competitive tactical shooter of all time.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
    developer: 'Valve Corporation',
    publisher: 'Valve Corporation',
    releaseDate: 'September 27, 2023',
    releaseYear: 2023,
    genres: ['FPS', 'Action', 'Strategy'],
    platforms: ['PC'],
    rating: 9.2,
    ratingCount: 3750,
    isPopular: true,
    isTopRated: true,
    overview: 'Counter-Strike 2 represents the largest technical leap forward in Counter-Strike\'s history. Built on the Source 2 engine, CS2 features responsive dynamic volumetric smokes, sub-tick server architecture, overhauled audio, and rebuilt classic maps.',
    gameplay: 'Classic round-based 5v5 bomb defusal and hostage rescue gameplay. Bullets and HE grenades interact physically with smoke plumes to clear vision temporarily. Precise economy management and spray pattern mastery dictate victory.',
    characters: [
      {
        id: 'char-sas',
        name: 'SAS Counter-Terrorist',
        role: 'Counter-Terrorist Specialist',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'Elite British Special Air Service operative deployed to neutralize bomb threats and rescue hostages.',
        abilities: ['Defuse Kit Mastery', 'Flashbang Execution']
      },
      {
        id: 'char-phoenix',
        name: 'Phoenix Connexion Terrorist',
        role: 'Terrorist Operative',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
        description: 'Eastern European underground faction known for high-risk bomb infiltrations and tactical strikes.',
        abilities: ['C4 Explosive Arming', 'Molotov Area Denial']
      }
    ],
    maps: [
      {
        id: 'map-dust2',
        name: 'Dust II',
        image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=600&auto=format&fit=crop',
        type: 'Iconic 3-Lane Competitive Map',
        description: 'The most played map in esports history set in a Moroccan town with Long A, Mid Doors, and B Tunnels.',
        pointsOfInterest: ['Long A Doors', 'Catwalk', 'Mid Doors', 'B Site Platform', 'A Site Goose']
      },
      {
        id: 'map-mirage',
        name: 'Mirage',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: 'Tactical Smoke-Heavy Map',
        description: 'Features palace balconies, mid window sniper battles, connector control, and A ramp executions.',
        pointsOfInterest: ['Window Mid', 'Connector', 'Palace', 'Apartments B', 'Tetris A']
      }
    ],
    items: [
      {
        id: 'item-ak47',
        name: 'AK-47 Assault Rifle',
        category: 'Weapons',
        rarity: 'Legendary',
        image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=400&auto=format&fit=crop',
        description: 'The gold standard T-side assault rifle with guaranteed one-bullet headshot kill against full helmet armor.',
        stats: { HeadshotDamage: '143', KillAward: '$300', Cost: '$2700' }
      },
      {
        id: 'item-awp',
        name: 'AWP Sniper Rifle',
        category: 'Weapons',
        rarity: 'Mythic',
        image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&auto=format&fit=crop',
        description: 'High-risk, high-reward sniper rifle that instantly kills with a single hit to the chest or head.',
        stats: { ChestDamage: '115', Cost: '$4750', KillAward: '$100' }
      }
    ],
    guides: [
      {
        id: 'guide-cs2-smokes',
        title: 'New Volumetric Smokes & Nade Interactions in CS2',
        category: 'Tips & Tricks',
        author: 'ProTactician',
        date: '2025-01-08',
        readTime: '6 min',
        likes: 530,
        content: `### 1. HE Grenade Dispersion
Throwing a frag grenade into a smoke cloud blows away the smoke for 2.5 seconds, creating sudden open sightlines to pick off unsuspecting enemies.

### 2. Bullet Penetration
Firing a spray through smoke creates persistent bullet holes in the volume, revealing enemy silhouettes behind the cloud.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: '4 hardware CPU threads - Intel Core i5 750 or higher',
        gpu: 'Video card must be 1 GB or more with DirectX 11 support',
        ram: '8 GB',
        storage: '85 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-9700K / AMD Ryzen 7 5700X',
        gpu: 'NVIDIA RTX 3060 / AMD RX 6700 XT',
        ram: '16 GB',
        storage: '85 GB SSD'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'nSE3OVG_y64'
  },
  {
    id: 'game-9',
    slug: 'red-dead-redemption-2',
    title: 'Red Dead Redemption 2',
    tagline: 'America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs.',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1600&auto=format&fit=crop',
    developer: 'Rockstar Games',
    publisher: 'Rockstar Games',
    releaseDate: 'October 26, 2018',
    releaseYear: 2018,
    genres: ['Action', 'Adventure', 'RPG'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    rating: 9.9,
    ratingCount: 6890,
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    overview: 'Red Dead Redemption 2 is an epic tale of life in America\'s unforgiving heartland at the dawn of the modern age. Winner of over 175 Game of the Year Awards, players experience the tragic, deeply human story of Arthur Morgan and the Van der Linde gang on the run.',
    gameplay: 'Hyper-detailed living ecosystem with hunting, fishing, horse bonding, camp dynamics, bar brawls, train robberies, and the iconic Dead Eye targeting system allowing players to slow down time and paint fatal target markers.',
    characters: [
      {
        id: 'char-arthur',
        name: 'Arthur Morgan',
        role: 'Enforcer / Van der Linde Gang Lieutenant',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'Dutch\'s most dependable senior outlaw whose loyalty is tested as the modern world closes in.',
        abilities: ['Dead Eye Mastery Level 5', 'Master Hunter Tracking', 'Dual-Wield Revolvers']
      },
      {
        id: 'char-dutch',
        name: 'Dutch van der Linde',
        role: 'Gang Leader / Charismatic Visionary',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
        description: 'The philosophical outlaw leader whose grand plans spiral as paranoia takes root.',
        abilities: ['Silver-Tongued Oratory', 'High-Stakes Heist Planning']
      },
      {
        id: 'char-john-marston',
        name: 'John Marston',
        role: 'Outlaw / Future Legend',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
        description: 'Arthur\'s scarred brother-in-arms trying to protect his wife Abigail and son Jack.',
        abilities: ['Survivalist Instincts', 'Lever-Action Marksmanship']
      }
    ],
    maps: [
      {
        id: 'map-rdr2-frontier',
        name: 'The American Frontier (Ambarino, New Hanover, Lemoyne, West Elizabeth, New Austin)',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: 'Vast Living Frontier Ecosystem',
        description: 'Features the snowy peaks of Mount Hagen, the industrial port city of Saint Denis, the swamps of Bayou Nwa, and the red canyons of Armadillo.',
        pointsOfInterest: ['Saint Denis', 'Valentine', 'Rhodes', 'Blackwater', 'Braithwaite Manor', 'Camp at Horseshoe Overlook']
      }
    ],
    items: [
      {
        id: 'item-schofield',
        name: 'Schofield Revolver',
        category: 'Weapons',
        rarity: 'Rare',
        image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&auto=format&fit=crop',
        description: 'High-accuracy top-break revolver delivering devastating single-action stopping power.',
        stats: { Damage: '80/100', Accuracy: '85/100', Reload: '70/100' }
      },
      {
        id: 'item-arabian-horse',
        name: 'White Arabian Horse',
        category: 'Vehicles',
        rarity: 'Legendary',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=400&auto=format&fit=crop',
        description: 'Wild elite horse found near Lake Isabella offering unmatched speed, acceleration, and elite handling.',
        stats: { Speed: '9/10', Acceleration: '8/10', Handling: 'Elite' }
      }
    ],
    guides: [
      {
        id: 'guide-rdr2-hunting',
        title: 'Perfect Pelts & Master Hunter Challenges Guide',
        category: 'Beginner Guide',
        author: 'FrontierScout',
        date: '2025-01-02',
        readTime: '9 min',
        likes: 615,
        content: `### 1. Always Study Animals First
Use binoculars to inspect animals and confirm a 3-star rating before taking the shot.

### 2. Choosing the Right Weapon
- Small animals (squirrels, birds): Small Game Arrows
- Medium game (foxes, coyotes, beavers): Varmint Rifle .22
- Large game (deer, wolves, cougars, bears): Springfield / Bolt Action Rifle with high-velocity ammo to the head.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 - April 2018 Update (v1803)',
        cpu: 'Intel Core i5-2500K / AMD FX-6300',
        gpu: 'Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB',
        ram: '8 GB',
        storage: '150 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-4770K / AMD Ryzen 5 1500X',
        gpu: 'Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB',
        ram: '16 GB',
        storage: '150 GB SSD space'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'eaW0tYpxyp0'
  },
  {
    id: 'game-10',
    slug: 'the-witcher-3',
    title: 'The Witcher 3: Wild Hunt',
    tagline: 'You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent.',
    coverImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop',
    developer: 'CD Projekt RED',
    publisher: 'CD Projekt',
    releaseDate: 'May 19, 2015',
    releaseYear: 2015,
    genres: ['RPG', 'Adventure', 'Action'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    rating: 9.8,
    ratingCount: 5740,
    isPopular: true,
    isTopRated: true,
    overview: 'The Witcher 3: Wild Hunt is a story-driven open world RPG set in a visually stunning dark fantasy universe. You play as Geralt of Rivia, a mutated monster hunter tasked with finding the Child of Prophecy, Ciri, who is pursued by the otherworldly Wild Hunt.',
    gameplay: 'Engage in fluid swordplay utilizing steel for humans and silver for beasts, cast magical Witcher signs (Igni, Quen, Aard, Axii, Yrden), brew decoctions, track beasts using Witcher Senses, and play the addictive card game Gwent across taverns.',
    characters: [
      {
        id: 'char-geralt',
        name: 'Geralt of Rivia (White Wolf)',
        role: 'Master Witcher / Monster Slayer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'Legendary Witcher trained at the School of the Wolf in Kaer Morhen.',
        abilities: ['Witcher Signs', 'Witcher Senses', 'Master Swordsmanship', 'Toxicity Alchemy']
      },
      {
        id: 'char-ciri',
        name: 'Cirilla Fiona Elen Riannon (Ciri)',
        role: 'Child of the Elder Blood',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
        description: 'Geralt\'s adopted daughter possessing space-time teleportation capabilities.',
        abilities: ['Space-Time Blink Teleport', 'Elder Blood Surge']
      },
      {
        id: 'char-yennefer',
        name: 'Yennefer of Vengerberg',
        role: 'Powerful Sorceress',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
        description: 'Member of the Lodge of Sorceresses and Geralt\'s soulmate scented with lilac and gooseberries.',
        abilities: ['Chaos Sorcery', 'Portal Conjuring', 'Necromancy']
      }
    ],
    maps: [
      {
        id: 'map-the-continent',
        name: 'The Continent (Velen, Novigrad, Skellige, Toussaint)',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: 'Dark Fantasy Continent & Islands',
        description: 'From the corpse-strewn swamps of No Man\'s Land (Velen) to the free port of Novigrad, the Viking-inspired Skellige Isles, and the fairy-tale vineyards of Toussaint.',
        pointsOfInterest: ['Kaer Morhen', 'Crow\'s Perch', 'Hierarch Square Novigrad', 'Kaer Trolde', 'Beauclair Palace']
      }
    ],
    items: [
      {
        id: 'item-aerondight',
        name: 'Aerondight Silver Sword',
        category: 'Weapons',
        rarity: 'Mythic',
        image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&auto=format&fit=crop',
        description: 'Best silver sword in the game given by the Lady of the Lake; charges up with hits and permanently increases base damage.',
        stats: { Damage: '540-660', PermanentScaling: '+10 max damage on 10-stack kill', CritChance: '100% at 10 charges' }
      },
      {
        id: 'item-grandmaster-feline',
        name: 'Grandmaster Feline Witcher Gear',
        category: 'Equipment',
        rarity: 'Legendary',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop',
        description: 'Light armor set drastically amplifying fast attack damage and critical strike chances.',
        stats: { AttackPower: '+50%', BleedChance: '+25%', FastAttackBonus: '+22%' }
      }
    ],
    guides: [
      {
        id: 'guide-witcher-gwent',
        title: 'Complete Gwent Strategy: Building the Northern Realms Deck',
        category: 'Tips & Tricks',
        author: 'DandelionBallad',
        date: '2025-01-04',
        readTime: '7 min',
        likes: 580,
        content: `### 1. The Spy Advantage
Fill your deck with Northern Realms spies (Dijkstra, Prince Stennis, Thaler, Mysterious Elf). Spies grant card advantage, winning round 2 and 3 effortlessly.

### 2. Tight Bond Units & Decoys
Stack Catapults and Blue Stripes Commandos with Commander\'s Horn for 60+ power points in a single row.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: '64-bit Windows 10',
        cpu: 'Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940',
        gpu: 'Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870',
        ram: '6 GB',
        storage: '50 GB space'
      },
      recommended: {
        os: '64-bit Windows 11',
        cpu: 'Intel CPU Core i7 3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz',
        gpu: 'Nvidia GPU GeForce GTX 1060 / AMD GPU Radeon RX 580',
        ram: '16 GB',
        storage: '50 GB SSD space'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'c0i88t0Kacs'
  },
  {
    id: 'game-11',
    slug: 'black-myth-wukong',
    title: 'Black Myth: Wukong',
    tagline: 'Unravel the truth behind the glorious legend of Journey to the West.',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    developer: 'Game Science',
    publisher: 'Game Science',
    releaseDate: 'August 20, 2024',
    releaseYear: 2024,
    genres: ['Action', 'RPG', 'Adventure'],
    platforms: ['PC', 'PlayStation'],
    rating: 9.7,
    ratingCount: 5410,
    isTrending: true,
    isPopular: true,
    isNewRelease: true,
    isTopRated: true,
    overview: 'Black Myth: Wukong is an action RPG rooted in Chinese mythology based on Journey to the West. You set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.',
    gameplay: 'Command staff martial arts staves (Smash, Pillar, Thrust stances), cast mystical Taoist spells (Immobilize, Cloud Step, Pluck of Many), and transform into defeated yaoguai bosses to inherit their devastating elemental forms.',
    characters: [
      {
        id: 'char-destined-one',
        name: 'The Destined One',
        role: 'Monkey Protagonist',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'A silent monkey warrior seeking the Six Relics of Sun Wukong to revive the Great Sage.',
        abilities: ['Staff Stances', 'Spell Transformations', 'Pluck of Many Duplication']
      }
    ],
    maps: [
      {
        id: 'map-black-wind',
        name: 'Black Wind Mountain & Pagoda Realm',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: 'Mythical Ancient Chinese Forests & Temples',
        description: 'Ancient bamboo groves, crumbling temples, snow-covered monastery valleys, and the flaming Mount Huaguo.',
        pointsOfInterest: ['Guanyin Temple', 'Yellow Wind Formation', 'Thunderclap Temple', 'Webbed Hollow']
      }
    ],
    items: [
      {
        id: 'item-jingubang',
        name: 'Ruyi Jingu Bang',
        category: 'Weapons',
        rarity: 'Mythic',
        image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&auto=format&fit=crop',
        description: 'The iconic golden-banded staff capable of changing its size at will, granting infinite 4th focus point maintenance.',
        stats: { Attack: '135', CritChance: '+6%', FocusPreservation: 'Permanent Max' }
      }
    ],
    guides: [
      {
        id: 'guide-wukong-bosses',
        title: 'Mastering Perfect Dodges and Spell Combos in Chapter 1-3',
        category: 'Tips & Tricks',
        author: 'SageMonk',
        date: '2025-01-22',
        readTime: '6 min',
        likes: 470,
        content: `### 1. Timing Cloud Step
Use Cloud Step right as an enemy initiates a heavy attack chain. Your decoy absorbs the hit while you position behind them for a 3-charge heavy strike.

### 2. Upgrading Pluck of Many
Invest Sparks into Pluck of Many so your clones cast Immobilize simultaneously, melting 70% of boss HP bars in seconds.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i5-8400 / AMD Ryzen 5 1600',
        gpu: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB',
        ram: '16 GB',
        storage: '130 GB SSD space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-9700 / AMD Ryzen 5 5500',
        gpu: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 XT',
        ram: '16 GB',
        storage: '130 GB NVMe SSD space'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: '2qL2gE_t7A0'
  },
  {
    id: 'game-12',
    slug: 'terraria',
    title: 'Terraria',
    tagline: 'Dig, Fight, Explore, Build: The world is at your fingertips as you fight for survival, fortune, and glory.',
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=1600&auto=format&fit=crop',
    developer: 'Re-Logic',
    publisher: '505 Games',
    releaseDate: 'May 16, 2011',
    releaseYear: 2011,
    genres: ['Sandbox', 'Survival', 'Adventure', 'RPG'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Android', 'iOS'],
    rating: 9.7,
    ratingCount: 4120,
    isPopular: true,
    isTopRated: true,
    overview: 'Terraria is a 2D action-adventure sandbox game developed by Re-Logic. Blending elements of classic action games with sandbox creativity, players explore vast underground caverns, defeat monstrous bosses, construct houses for NPCs, and discover thousands of weapons and accessories.',
    gameplay: 'Progression is split into Pre-Hardmode and Hardmode upon defeating the Wall of Flesh. Players choose four core combat archetypes: Melee, Ranged, Mage, and Summoner, crafting armor sets like Solar Flare and Zenith swords.',
    characters: [
      {
        id: 'char-guide',
        name: 'The Guide',
        role: 'Helpful NPC & Wall of Flesh Sacrifice',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'First NPC encountered who shows all possible crafting recipes and tips.',
        abilities: ['Crafting Wiki Lookup', 'Underworld Doll Sacrifice']
      }
    ],
    maps: [
      {
        id: 'map-terraria-world',
        name: 'Terraria World (Surface to Underworld)',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: '2D Procedural Layered World',
        description: 'Space, Floating Islands, Forest, Jungle, Desert, Corruption/Crimson, Dungeon, and Underworld lava lake.',
        pointsOfInterest: ['Dungeon of Skeletron', 'Underground Jungle Temple', 'Floating Island Houses', 'Underworld Hellforge']
      }
    ],
    items: [
      {
        id: 'item-zenith',
        name: 'Zenith',
        category: 'Weapons',
        rarity: 'Mythic',
        image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&auto=format&fit=crop',
        description: 'The ultimate sword crafted from 10 iconic swords, hurling an infinite whirlwind of blades through walls across the entire screen.',
        stats: { Damage: '190 Melee', CritRate: '14%', Velocity: 'Infinite Multi-Blade Screen Coverage' }
      }
    ],
    guides: [
      {
        id: 'guide-terraria-hardmode',
        title: 'Preparing for Hardmode: Wall of Flesh Arena Guide',
        category: 'Walkthrough',
        author: 'TerrariaExpert',
        date: '2025-01-07',
        readTime: '6 min',
        likes: 310,
        content: `### 1. Building the Hell Bridge
Create a 1,000+ block flat bridge across the Underworld using obsidian platforms or ash blocks.

### 2. Beenades Strategy
Defeat Queen Bee to acquire 80+ Beenades. Throwing Beenades during the Wall of Flesh fight completely shreds the hungry minions and eyes in under 30 seconds.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 7 / 8 / 10 32/64-bit',
        cpu: '2.0 GHz Processor',
        gpu: '128mb Video Memory with Shader Model 2.0+',
        ram: '2.5 GB',
        storage: '200 MB available space'
      },
      recommended: {
        os: 'Windows 10 / 11',
        cpu: 'Dual Core 3.0 GHz',
        gpu: '512MB Video Card',
        ram: '4 GB',
        storage: '1 GB'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'w7uOhFTrrq0'
  },
  {
    id: 'game-13',
    slug: 'league-of-legends',
    title: 'League of Legends',
    tagline: 'Team up with friends and test your skills in 5v5 MOBA combat.',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
    developer: 'Riot Games',
    publisher: 'Riot Games',
    releaseDate: 'October 27, 2009',
    releaseYear: 2009,
    genres: ['MOBA', 'Strategy', 'Action'],
    platforms: ['PC'],
    rating: 9.0,
    ratingCount: 4980,
    isPopular: true,
    overview: 'League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s Nexus. Over 160 champions offer infinite tactical depth, competitive rank ladders, and international esports grandeur.',
    gameplay: 'Champions level up by killing minions, jungle monsters, and enemy champions, purchasing items from the shop, and claiming neutral objectives like Dragon and Baron Nashor to push towers down three lanes.',
    characters: [
      {
        id: 'char-yasuo',
        name: 'Yasuo (The Unforgiven)',
        role: 'Mid Lane / Melee Fighter',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'An agile Ionian swordsman who bends the wind into walls and executes enemies suspended in airborne knockups.',
        abilities: ['Steel Tempest', 'Wind Wall', 'Sweeping Blade', 'Last Breath Ultimate']
      },
      {
        id: 'char-jinx',
        name: 'Jinx (The Loose Cannon)',
        role: 'Bot Lane / Marksman (ADC)',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
        description: 'The manic Zaunite criminal armed with custom arsenal Pow-Pow minigun and Fishbones rocket launcher.',
        abilities: ['Switcheroo!', 'Flame Chompers!', 'Super Mega Death Rocket!']
      },
      {
        id: 'char-ahri',
        name: 'Ahri (The Nine-Tailed Fox)',
        role: 'Mid Lane / Mage Assassin',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
        description: 'Vastayan mage who charms foes into walking helplessly into soul orb bursts and Spirit Rush dashes.',
        abilities: ['Orb of Deception', 'Charm', 'Spirit Rush']
      }
    ],
    maps: [
      {
        id: 'map-summoners-rift',
        name: 'Summoner\'s Rift',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: '3-Lane Elemental Rift',
        description: 'The premier competitive battleground featuring Top, Mid, Bot lanes, River, and four Elemental Drakes that transform the terrain.',
        pointsOfInterest: ['Baron Nashor Pit', 'Dragon Pit', 'Mid Lane River Bushes', 'Blue Buff Camp', 'Inhibitor Turrets']
      }
    ],
    items: [
      {
        id: 'item-infinity-edge',
        name: 'Infinity Edge',
        category: 'Weapons',
        rarity: 'Legendary',
        image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&auto=format&fit=crop',
        description: 'Premier critical strike damage multiplier item for marksmen and assassins.',
        stats: { AttackDamage: '+80', CritChance: '+25%', CritDamageBonus: '+40%' }
      }
    ],
    guides: [
      {
        id: 'guide-lol-wave',
        title: 'Wave Management 101: Freezing, Slow Pushing, and Crashing',
        category: 'Beginner Guide',
        author: 'ChallengerMid',
        date: '2025-01-14',
        readTime: '8 min',
        likes: 620,
        content: `### 1. Freezing the Wave
Leave 3-4 extra enemy ranged minions outside your turret range to hold the minion wave safely near your tower, denying the enemy gold and setting up easy jungle ganks.

### 2. Slow Pushing
Kill only the enemy caster minions. Your building wave of melee and cannon minions will crash into the enemy turret with 2-3 full waves, allowing you to dive or roam for Dragon.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i3-530 / AMD A6-3650',
        gpu: 'NVidia GeForce 9600GT / AMD Radeon HD 6570',
        ram: '4 GB',
        storage: '16 GB space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i5-3300 / AMD Ryzen 3 1200',
        gpu: 'NVidia GeForce GTX 560 / AMD Radeon HD 6950',
        ram: '8 GB',
        storage: '25 GB SSD'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'vzHrjPTg43A'
  },
  {
    id: 'game-14',
    slug: 'fortnite',
    title: 'Fortnite',
    tagline: 'Drop in, build, fight, and be the last one standing in the world\'s most dynamic battle royale.',
    coverImage: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    developer: 'Epic Games',
    publisher: 'Epic Games',
    releaseDate: 'July 21, 2017',
    releaseYear: 2017,
    genres: ['Battle Royale', 'Action', 'Sandbox'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Android'],
    rating: 8.8,
    ratingCount: 4300,
    isTrending: true,
    isPopular: true,
    overview: 'Fortnite is a 100-player PvP Battle Royale created by Epic Games. Drop from the Battle Bus, harvest wood, stone, and metal to construct defensive ramps and walls, gather legendary loot, and survive the ever-closing storm in both classic Build and Zero Build modes.',
    gameplay: 'Fast-paced gunplay mixed with instantaneous structure building or pure tactical shooting in Zero Build mode. Constant seasonal live events, concerts, Lego Fortnite, Rocket Racing, and Festival modes make it a massive entertainment ecosystem.',
    characters: [
      {
        id: 'char-jonsey',
        name: 'Agent Jones (Jonesy)',
        role: 'Foundational Hero / Lore Protagonist',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'The multiverse explorer working to maintain order in the Zero Point universe.',
        abilities: ['Rapid Fort Building', 'Rift Navigation']
      }
    ],
    maps: [
      {
        id: 'map-fortnite-island',
        name: 'The Battle Royale Island',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: 'Dynamic Seasonal Battle Royale Island',
        description: 'Features evolving biomes, underground train routes, mountain peaks, and floating sky islands.',
        pointsOfInterest: ['Pleasant Piazza', 'Reckless Railways', 'Mount Olympus', 'Grim Gate', 'Lavish Lair']
      }
    ],
    items: [
      {
        id: 'item-pump-shotgun',
        name: 'Havoc Pump Shotgun',
        category: 'Weapons',
        rarity: 'Mythic',
        image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=400&auto=format&fit=crop',
        description: 'High-damage close-quarters shotgun capable of breaking 200 headshot barrier.',
        stats: { HeadshotDamage: '210', BodyDamage: '115', Magazine: '6 Shells' }
      }
    ],
    guides: [
      {
        id: 'guide-fortnite-zero-build',
        title: 'Mastering Zero Build: Positioning, Cover & Movement Items',
        category: 'Tips & Tricks',
        author: 'VictoryRoyaleGuy',
        date: '2025-01-16',
        readTime: '5 min',
        likes: 380,
        content: `### 1. Use the Overshield
In Zero Build, your 50 Overshield regenerates automatically after 5 seconds of not taking damage. Play around natural cover to reset shields during duels.

### 2. High Ground is King
Always rotate early into high elevation zones on the edge of the safe circle with shockwave grenades or grappling hooks.`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Core i3-3225 3.3 GHz',
        gpu: 'Intel HD 4000 on PC / AMD Radeon Vega 8',
        ram: '8 GB',
        storage: '30 GB'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-8700 / AMD Ryzen 7 3700x',
        gpu: 'Nvidia GTX 1080 / AMD Radeon RX 5700 XT',
        ram: '16 GB',
        storage: '40 GB NVMe SSD'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: '2gUtfBmw86Y'
  },
  {
    id: 'game-15',
    slug: 'helldivers-2',
    title: 'Helldivers 2',
    tagline: 'Spread Managed Democracy across the galaxy in intense 4-player co-op squad warfare.',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    developer: 'Arrowhead Game Studios',
    publisher: 'PlayStation Publishing',
    releaseDate: 'February 8, 2024',
    releaseYear: 2024,
    genres: ['Action', 'FPS', 'Strategy'],
    platforms: ['PC', 'PlayStation'],
    rating: 9.4,
    ratingCount: 3650,
    isTrending: true,
    isPopular: true,
    isNewRelease: true,
    overview: 'Helldivers 2 is a squad-based third-person shooter where the elite forces of the Helldivers battle across planetary fronts to win an intergalactic struggle to rid the galaxy of rising Terminid bug hordes and Automaton cyborg legions.',
    gameplay: 'Drop onto hostile planetary surfaces via Hellpods, input directional d-pad Stratagem codes to call in 500kg orbital bombs, sentry turrets, and patriot exosuits, completing tactical objectives before calling in Pelican-1 extraction under extreme friendly-fire conditions.',
    characters: [
      {
        id: 'char-helldiver',
        name: 'Helldiver (Managed Democracy Enforcer)',
        role: 'Galactic Trooper',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        description: 'Cape-wearing galactic soldier ready to give their life for Super Earth.',
        abilities: ['Stratagem Terminal Call-in', 'Reinforcement Beacon Drop', 'Diving Prone']
      }
    ],
    maps: [
      {
        id: 'map-malevelon-creek',
        name: 'Malevelon Creek & Terminid Front',
        image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=600&auto=format&fit=crop',
        type: 'Hostile Alien Planet Warzones',
        description: 'Jungle swamp worlds with red automaton laser crossfire, blinding spore clouds, ion storms, and meteor showers.',
        pointsOfInterest: ['Automaton Stratagem Jammer', 'Terminid Stalker Nest', 'Illegal Broadcast Tower', 'SEAF Artillery']
      }
    ],
    items: [
      {
        id: 'item-500kg-bomb',
        name: 'Eagle 500kg Bomb',
        category: 'Weapons',
        rarity: 'Mythic',
        image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400&auto=format&fit=crop',
        description: 'Massive ordnance dropped from Eagle-1 obliterating Bile Titans and Factory Striders in a gigantic blast cone.',
        stats: { CallInTime: '2.5s', Uses: '2 per re-arm', Radius: 'Devastating Ground Blast' }
      }
    ],
    guides: [
      {
        id: 'guide-helldivers-stratagems',
        title: 'Best Stratagems Loadout for Helldive (Difficulty 9)',
        category: 'Best Builds',
        author: 'SuperEarthAdmiral',
        date: '2025-01-19',
        readTime: '6 min',
        likes: 540,
        content: `### 1. Universal Survival Kit
- Quasar Cannon or Spear (Infinite ammo anti-heavy tank weaponry)
- Shield Generator Backpack
- Eagle Airstrike
- Orbital Laser (Wipes heavy bases automatically)`
      }
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i7-4790K / AMD Ryzen 5 1500X',
        gpu: 'NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 470',
        ram: '8 GB',
        storage: '100 GB space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-9700K / AMD Ryzen 7 3700X',
        gpu: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600XT',
        ram: '16 GB',
        storage: '100 GB SSD'
      }
    },
    screenshots: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
    ],
    youtubeTrailerId: 'l_Ogm_v0B-s'
  }
];
