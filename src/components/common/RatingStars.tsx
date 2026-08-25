import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  score: number; // 0.0 - 10.0
  maxScore?: number;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onRate?: (rating: number) => void;
  showNumeric?: boolean;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  score,
  maxScore = 10,
  count,
  size = 'md',
  interactive = false,
  onRate,
  showNumeric = true
}) => {
  // Convert 10-point scale to 5-star representation
  const starValue = (score / maxScore) * 5;
  const [hoverStar, setHoverStar] = React.useState<number | null>(null);

  const starSizes = {
    sm: 12,
    md: 15,
    lg: 20
  };

  const handleStarClick = (index: number) => {
    if (!interactive || !onRate) return;
    // Map 1-5 star back to 1-10
    const ratingValue = (index + 1) * 2;
    onRate(ratingValue);
  };

  return (
    <div className="inline-flex items-center gap-1.5" id={`rating-${score}`}>
      <div className="flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((index) => {
          const activeValue = hoverStar !== null ? hoverStar + 1 : starValue;
          const isFilled = activeValue >= index + 1;
          const isHalf = !isFilled && activeValue >= index + 0.3;

          return (
            <button
              key={index}
              type="button"
              disabled={!interactive}
              onClick={() => handleStarClick(index)}
              onMouseEnter={() => interactive && setHoverStar(index)}
              onMouseLeave={() => interactive && setHoverStar(null)}
              className={`${interactive ? 'cursor-pointer transform transition-transform hover:scale-125' : 'cursor-default'} text-amber-400 p-0.5 focus:outline-hidden`}
              title={`${(index + 1) * 2} / 10`}
            >
              <Star
                size={starSizes[size]}
                className={`${
                  isFilled
                    ? 'fill-amber-400 text-amber-400'
                    : isHalf
                    ? 'fill-amber-400/50 text-amber-400'
                    : 'fill-transparent text-zinc-600'
                } transition-colors`}
              />
            </button>
          );
        })}
      </div>

      {showNumeric && (
        <span className={`font-semibold tracking-tight text-white ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'}`}>
          {score.toFixed(1)}
          <span className="text-zinc-500 font-normal text-xs ml-0.5">/10</span>
        </span>
      )}

      {count !== undefined && (
        <span className="text-zinc-400 text-xs">
          ({count.toLocaleString()})
        </span>
      )}
    </div>
  );
};
