import React from 'react';

export const GameCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#11141d] border border-zinc-800/80 rounded-xl overflow-hidden animate-pulse">
      <div className="aspect-16/10 bg-zinc-800/60 w-full" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-zinc-800 rounded w-3/4" />
        <div className="h-3 bg-zinc-800/70 rounded w-full" />
        <div className="flex gap-2 pt-2">
          <div className="h-4 bg-zinc-800/80 rounded w-12" />
          <div className="h-4 bg-zinc-800/80 rounded w-16" />
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-zinc-800/60">
          <div className="h-4 bg-zinc-800 rounded w-20" />
          <div className="h-4 bg-zinc-800 rounded w-16" />
        </div>
      </div>
    </div>
  );
};

export const GameGridSkeleton: React.FC<{ count?: number }> = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <GameCardSkeleton key={i} />
      ))}
    </div>
  );
};
