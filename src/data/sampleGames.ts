import { Game } from '../types';
import { ACTION_RPG_GAMES } from './games/actionRpg';
import { SHOOTER_BR_GAMES } from './games/shootersBattleRoyale';
import { SURVIVAL_SANDBOX_GAMES } from './games/survivalSandbox';
import { INDIE_STRATEGY_SIM_GAMES } from './games/indieStrategySim';
import { SPORTS_RACING_GACHA_GAMES } from './games/sportsRacingGacha';

// Combine all real curated game titles (105+ authentic games)
export const SAMPLE_GAMES: Game[] = [
  ...SURVIVAL_SANDBOX_GAMES,
  ...ACTION_RPG_GAMES,
  ...SHOOTER_BR_GAMES,
  ...SPORTS_RACING_GACHA_GAMES,
  ...INDIE_STRATEGY_SIM_GAMES
];

// Helper to quickly find a game by slug
export const getGameBySlug = (slug: string): Game | undefined => {
  return SAMPLE_GAMES.find((g) => g.slug.toLowerCase() === slug.toLowerCase());
};

// Helper to get games by genre
export const getGamesByGenre = (genre: string): Game[] => {
  if (!genre || genre.toLowerCase() === 'all') return SAMPLE_GAMES;
  return SAMPLE_GAMES.filter((g) =>
    g.genres.some((genreItem) => genreItem.toLowerCase() === genre.toLowerCase())
  );
};
