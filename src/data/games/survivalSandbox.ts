import { Game } from '../../types';

export const SURVIVAL_SANDBOX_GAMES: Game[] = [
  {
    id: 'game-minecraft',
    slug: 'minecraft',
    title: 'Minecraft',
    tagline: 'Place blocks, craft tools, and go on endless adventures in infinite procedurally generated worlds.',
    coverImage: 'https://images.ctfassets.net/4cd45et68cgf/5y4h3b1H170E36aO6Q64c0/9df9b90a6ea158525b68233f2a36b325/Minecraft-Bedrock-1.20-Trails-and-Tales-Key-Art-1920x1080.jpg',
    bannerImage: 'https://images.ctfassets.net/4cd45et68cgf/5y4h3b1H170E36aO6Q64c0/9df9b90a6ea158525b68233f2a36b325/Minecraft-Bedrock-1.20-Trails-and-Tales-Key-Art-1920x1080.jpg',
    developer: 'Mojang Studios',
    publisher: 'Xbox Game Studios',
    releaseDate: 'November 18, 2011',
    releaseYear: 2011,
    genres: ['Sandbox', 'Survival', 'Adventure'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Android', 'iOS'],
    rating: 9.8,
    ratingCount: 9900,
    metacriticScore: 93,
    isTrending: true,
    isPopular: true,
    isTopRated: true,
    overview: 'Minecraft is a 3D sandbox adventure game developed by Mojang Studios where players explore a blocky, procedurally generated 3D world with infinite terrain. Players discover and extract raw materials, craft tools, build structures, and battle hostile mobs across Survival, Creative, and Adventure modes.',
    gameplay: 'In Survival Mode, gather resources, craft armor, cultivate crops, explore caverns, and brew potions. In Creative Mode, fly with infinite inventory to construct monumental architecture. Power automated mechanisms with Redstone logic and challenge the Ender Dragon.',
    story: 'Journey from the Overworld through the fiery Nether fortress to the dark dimension of The End to defeat the mighty Ender Dragon.',
    characters: [
      {
        id: 'char-steve',
        name: 'Steve',
        role: 'Default Protagonist / Miner',
        image: 'https://images.ctfassets.net/4cd45et68cgf/5y4h3b1H170E36aO6Q64c0/9df9b90a6ea158525b68233f2a36b325/Minecraft-Bedrock-1.20-Trails-and-Tales-Key-Art-1920x1080.jpg',
        description: 'The iconic protagonist capable of mining deep underground and crafting legendary netherite tools.'
      },
      {
        id: 'char-alex',
        name: 'Alex',
        role: 'Explorer / Survivalist',
        image: 'https://images.ctfassets.net/4cd45et68cgf/5y4h3b1H170E36aO6Q64c0/9df9b90a6ea158525b68233f2a36b325/Minecraft-Bedrock-1.20-Trails-and-Tales-Key-Art-1920x1080.jpg',
        description: 'The swift adventurer skilled in archery, animal breeding, and deep cavern navigation.'
      }
    ],
    screenshots: [
      'https://images.ctfassets.net/4cd45et68cgf/5y4h3b1H170E36aO6Q64c0/9df9b90a6ea158525b68233f2a36b325/Minecraft-Bedrock-1.20-Trails-and-Tales-Key-Art-1920x1080.jpg'
    ]
  },
  {
    id: 'game-roblox',
    slug: 'roblox',
    title: 'Roblox',
    tagline: 'The ultimate virtual universe that lets you create, share experiences, and be anything you can imagine.',
    coverImage: 'https://images.rbxcdn.com/f2a412852eb6f50fae9bb765b2100877.jpg',
    bannerImage: 'https://images.rbxcdn.com/1297e68adbe64f2ad37cbf81b539cf20.jpg',
    developer: 'Roblox Corporation',
    publisher: 'Roblox Corporation',
    releaseDate: 'September 1, 2006',
    releaseYear: 2006,
    genres: ['Sandbox', 'Adventure', 'Simulation'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Android', 'iOS', 'Roblox'],
    rating: 9.2,
    ratingCount: 8800,
    isTrending: true,
    isPopular: true,
    overview: 'Roblox is an online game platform and game creation system developed by Roblox Corporation that allows users to program games and play games created by other users across millions of genres.',
    screenshots: [
      'https://images.rbxcdn.com/1297e68adbe64f2ad37cbf81b539cf20.jpg'
    ]
  },
  {
    id: 'game-palworld',
    slug: 'palworld',
    title: 'Palworld',
    tagline: 'Fight, farm, build and work alongside mysterious creatures called "Pals" in this open-world survival craft game.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1623730/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg',
    developer: 'Pocketpair',
    publisher: 'Pocketpair',
    releaseDate: 'January 19, 2024',
    releaseYear: 2024,
    genres: ['Survival', 'Sandbox', 'RPG', 'Adventure'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    rating: 9.4,
    ratingCount: 6700,
    isTrending: true,
    isPopular: true,
    isNewRelease: true,
    overview: 'In Palworld, you can peacefully live alongside mysterious creatures known as Pals or risk your life to drive off a ruthless poaching syndicate. Pals can be used to fight, breed, help on farms, or work in factories.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg'
    ]
  },
  {
    id: 'game-terraria',
    slug: 'terraria',
    title: 'Terraria',
    tagline: 'Dig, Fight, Explore, Build! The very world is at your fingertips as you fight for survival, fortune, and glory.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/105600/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg',
    developer: 'Re-Logic',
    publisher: 'Re-Logic',
    releaseDate: 'May 16, 2011',
    releaseYear: 2011,
    genres: ['Sandbox', 'Survival', 'RPG', 'Adventure'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Android', 'iOS'],
    rating: 9.8,
    ratingCount: 9200,
    metacriticScore: 83,
    isTopRated: true,
    isPopular: true,
    overview: 'Delve deep into cavernous expanses, seek out ever-greater foes to test your mettle in combat, or construct your own city — in the World of Terraria, the choice is yours!',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg'
    ]
  },
  {
    id: 'game-rust',
    slug: 'rust',
    title: 'Rust',
    tagline: 'The only aim in Rust is to survive. Overcome struggles such as hunger, thirst and cold. Build a base. Kill other players.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg',
    developer: 'Facepunch Studios',
    publisher: 'Facepunch Studios',
    releaseDate: 'February 8, 2018',
    releaseYear: 2018,
    genres: ['Survival', 'FPS', 'Action'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    rating: 9.3,
    ratingCount: 7800,
    isPopular: true,
    overview: 'Conquer the ruthless wilderness of Rust. Gather materials, build compounds, craft guns and explosives, raid enemy bases with rockets, and survive on brutal multiplayer servers.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg'
    ]
  },
  {
    id: 'game-ark',
    slug: 'ark-survival-evolved',
    title: 'ARK: Survival Evolved',
    tagline: 'Stranded on the shores of a mysterious island, you must hunt, harvest, craft items, grow crops, and tame dinosaurs.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/346110/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg',
    developer: 'Studio Wildcard',
    publisher: 'Studio Wildcard',
    releaseDate: 'August 27, 2017',
    releaseYear: 2017,
    genres: ['Survival', 'Adventure', 'Action', 'RPG'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Android', 'iOS'],
    rating: 9.1,
    ratingCount: 6500,
    isPopular: true,
    overview: 'Use your cunning and resources to kill or tame & breed the leviathan dinosaurs and other primeval creatures roaming the land, and team up with or prey on hundreds of other players.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg'
    ]
  },
  {
    id: 'game-dayz',
    slug: 'dayz',
    title: 'DayZ',
    tagline: 'How long can you survive a post-apocalyptic world? A land overrun with an infected "zombie" population.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/221100/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/221100/header.jpg',
    developer: 'Bohemia Interactive',
    publisher: 'Bohemia Interactive',
    releaseDate: 'December 13, 2018',
    releaseYear: 2018,
    genres: ['Survival', 'FPS', 'Horror'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    rating: 9.0,
    ratingCount: 5400,
    isPopular: true,
    overview: 'DayZ is an unforgiving, authentic, open world sandbox online game where each of 60 players on a server pursues a single goal — to survive as long as they can by all means necessary.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/221100/header.jpg'
    ]
  },
  {
    id: 'game-the-forest',
    slug: 'the-forest',
    title: 'The Forest',
    tagline: 'As the lone survivor of a passenger jet crash, you find yourself in a mysterious forest battling a society of cannibalistic mutants.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/242760/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg',
    developer: 'Endnight Games Ltd',
    publisher: 'Endnight Games Ltd',
    releaseDate: 'April 30, 2018',
    releaseYear: 2018,
    genres: ['Survival', 'Horror', 'Adventure'],
    platforms: ['PC', 'PlayStation'],
    rating: 9.4,
    ratingCount: 6100,
    metacriticScore: 83,
    overview: 'Build, explore, and survive in this terrifying first person survival horror simulator. Chop down trees to build a camp, start a fire, scavenge food, and defend yourself against mutated horrors.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg'
    ]
  },
  {
    id: 'game-sons-of-the-forest',
    slug: 'sons-of-the-forest',
    title: 'Sons of the Forest',
    tagline: 'Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1326470/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg',
    developer: 'Endnight Games Ltd',
    publisher: 'Newnight',
    releaseDate: 'February 22, 2024',
    releaseYear: 2024,
    genres: ['Survival', 'Horror', 'Action'],
    platforms: ['PC'],
    rating: 9.3,
    ratingCount: 4800,
    isTrending: true,
    isNewRelease: true,
    overview: 'Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator with complete freedom and cutting-edge building mechanics.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg'
    ]
  },
  {
    id: 'game-subnautica',
    slug: 'subnautica',
    title: 'Subnautica',
    tagline: 'Descend into the depths of an alien underwater world filled with wonder and peril.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/264710/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg',
    developer: 'Unknown Worlds Entertainment',
    publisher: 'Unknown Worlds Entertainment',
    releaseDate: 'January 23, 2018',
    releaseYear: 2018,
    genres: ['Survival', 'Adventure', 'Sandbox'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    rating: 9.7,
    ratingCount: 7600,
    metacriticScore: 87,
    isTopRated: true,
    overview: 'After crash landing on an alien ocean planet, craft equipment, pilot submarines, and out-smart wildlife to explore lush coral reefs, volcanoes, and deep leviathan trenches.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg'
    ]
  },
  {
    id: 'game-no-mans-sky',
    slug: 'no-mans-sky',
    title: 'No Man\'s Sky',
    tagline: 'Inspired by the adventure and imagination of classic sci-fi, No Man\'s Sky presents a galaxy to explore, filled with unique planets and lifeforms.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/275850/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/275850/header.jpg',
    developer: 'Hello Games',
    publisher: 'Hello Games',
    releaseDate: 'August 12, 2016',
    releaseYear: 2016,
    genres: ['Survival', 'Sandbox', 'Adventure'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    rating: 9.3,
    ratingCount: 6800,
    isPopular: true,
    overview: 'Explore 18 quintillion procedural planets across an infinite procedurally generated universe. Build planetary bases, command freighters, engage in space dogfights, and trade resources.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/275850/header.jpg'
    ]
  },
  {
    id: 'game-sea-of-thieves',
    slug: 'sea-of-thieves',
    title: 'Sea of Thieves',
    tagline: 'Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172620/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg',
    developer: 'Rare Ltd',
    publisher: 'Xbox Game Studios',
    releaseDate: 'June 3, 2020',
    releaseYear: 2020,
    genres: ['Adventure', 'Action', 'Sandbox'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    rating: 9.2,
    ratingCount: 5900,
    isPopular: true,
    overview: 'Sail the high seas with your crew, hunt for cursed treasure chests, battle skeleton forts and Krakens, and engage in epic ship-to-ship cannon battles with rival pirates.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg'
    ]
  },
  {
    id: 'game-dead-by-daylight',
    slug: 'dead-by-daylight',
    title: 'Dead by Daylight',
    tagline: 'Death is not an escape. A 4v1 asymmetrical multiplayer horror game.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg',
    developer: 'Behaviour Interactive Inc.',
    publisher: 'Behaviour Interactive Inc.',
    releaseDate: 'June 14, 2016',
    releaseYear: 2016,
    genres: ['Horror', 'Action', 'Survival'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Android', 'iOS'],
    rating: 9.2,
    ratingCount: 7100,
    isPopular: true,
    overview: 'One player takes on the role of the savage Killer, and the other four players play as Survivors, trying to repair generators and escape the Killer without getting caught and hooked.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg'
    ]
  },
  {
    id: 'game-phasmophobia',
    slug: 'phasmophobia',
    title: 'Phasmophobia',
    tagline: 'A 4 player online co-op psychological horror where you and your paranormal investigators enter haunted locations.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/739630/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg',
    developer: 'Kinetic Games',
    publisher: 'Kinetic Games',
    releaseDate: 'September 18, 2020',
    releaseYear: 2020,
    genres: ['Horror', 'Survival'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    rating: 9.5,
    ratingCount: 6900,
    isPopular: true,
    overview: 'Use ghost hunting equipment like EMF Readers, Spirit Boxes, and Thermal Cameras to identify 24 distinct ghost types while surviving terrifying supernatural hauntings.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg'
    ]
  },
  {
    id: 'game-re4-remake',
    slug: 'resident-evil-4',
    title: 'Resident Evil 4',
    tagline: 'Survival is only the beginning. Six years have passed since the biological disaster in Raccoon City.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg',
    developer: 'CAPCOM Co., Ltd.',
    publisher: 'CAPCOM Co., Ltd.',
    releaseDate: 'March 24, 2023',
    releaseYear: 2023,
    genres: ['Horror', 'Action', 'Survival'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'iOS'],
    rating: 9.8,
    ratingCount: 7200,
    metacriticScore: 93,
    isTopRated: true,
    isPopular: true,
    overview: 'Leon S. Kennedy is sent to a secluded European village to rescue the President\'s kidnapped daughter, confronting zealous villagers infected by the mind-controlling Las Plagas parasite.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg'
    ]
  },
  {
    id: 'game-re-village',
    slug: 'resident-evil-village',
    title: 'Resident Evil Village',
    tagline: 'Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg',
    developer: 'CAPCOM Co., Ltd.',
    publisher: 'CAPCOM Co., Ltd.',
    releaseDate: 'May 7, 2021',
    releaseYear: 2021,
    genres: ['Horror', 'Action', 'Survival'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'iOS'],
    rating: 9.5,
    ratingCount: 5900,
    metacriticScore: 84,
    overview: 'Set a few years after the horrifying events in the biohazard Resident Evil 7, the all-new storyline begins with Ethan Winters and his wife Mia living peacefully, until tragedy strikes again.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg'
    ]
  },
  {
    id: 'game-silent-hill-2',
    slug: 'silent-hill-2',
    title: 'SILENT HILL 2',
    tagline: 'Having received a letter from his deceased wife, James heads to where they shared so many memories: Silent Hill.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2124490/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2124490/header.jpg',
    developer: 'Bloober Team SA',
    publisher: 'KONAMI',
    releaseDate: 'October 8, 2024',
    releaseYear: 2024,
    genres: ['Horror', 'Adventure'],
    platforms: ['PC', 'PlayStation'],
    rating: 9.6,
    ratingCount: 4600,
    metacriticScore: 86,
    isTrending: true,
    isNewRelease: true,
    isTopRated: true,
    overview: 'Experience a master-class in psychological horror on modern hardware with chilling visuals and visceral sounds in this acclaimed remake of the classic masterpiece.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2124490/header.jpg'
    ]
  },
  {
    id: 'game-fnaf',
    slug: 'five-nights-at-freddys',
    title: 'Five Nights at Freddy\'s',
    tagline: 'Welcome to your new summer job at Freddy Fazbear\'s Pizza — where fantasy and fun come to life!',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/319510/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/319510/header.jpg',
    developer: 'Scott Cawthon',
    publisher: 'Scott Cawthon',
    releaseDate: 'August 18, 2014',
    releaseYear: 2014,
    genres: ['Horror', 'Simulation'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Android', 'iOS'],
    rating: 9.3,
    ratingCount: 7800,
    isPopular: true,
    overview: 'As the night security guard, monitor security cameras and manage limited power to keep animatronic mascots Freddy, Bonnie, Chica, and Foxy out of your office until 6 AM.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/319510/header.jpg'
    ]
  },
  {
    id: 'game-garrys-mod',
    slug: 'garrys-mod',
    title: 'Garry\'s Mod',
    tagline: 'Garry\'s Mod is a physics sandbox. There aren\'t any predefined aims or goals — you make the fun.',
    coverImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/4000/library_600x900.jpg',
    bannerImage: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg',
    developer: 'Facepunch Studios',
    publisher: 'Valve',
    releaseDate: 'November 29, 2006',
    releaseYear: 2006,
    genres: ['Sandbox', 'Simulation'],
    platforms: ['PC'],
    rating: 9.8,
    ratingCount: 8900,
    isPopular: true,
    overview: 'Spawn props, weld contraptions, invent rockets, and play thousands of community game modes like Prop Hunt, Trouble in Terrorist Town (TTT), and DarkRP in the ultimate physics sandbox.',
    screenshots: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg'
    ]
  }
];
