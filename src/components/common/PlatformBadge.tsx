import React from 'react';
import { PlatformType } from '../../types';
import { Monitor, Gamepad2, Box, Tv2, Smartphone, Apple, Layers } from 'lucide-react';

interface PlatformBadgeProps {
  platform: PlatformType;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export const PlatformBadge: React.FC<PlatformBadgeProps> = ({
  platform,
  size = 'md',
  showIcon = true
}) => {
  const getPlatformConfig = (p: PlatformType) => {
    switch (p) {
      case 'PC':
        return {
          icon: Monitor,
          classes: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-500/40'
        };
      case 'PlayStation':
        return {
          icon: Gamepad2,
          classes: 'bg-blue-600/10 text-blue-400 border-blue-500/20 hover:border-blue-500/40'
        };
      case 'Xbox':
        return {
          icon: Box,
          classes: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:border-emerald-500/40'
        };
      case 'Nintendo Switch':
        return {
          icon: Tv2,
          classes: 'bg-red-500/10 text-red-400 border-red-500/20 hover:border-red-500/40'
        };
      case 'Android':
        return {
          icon: Smartphone,
          classes: 'bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-500/40'
        };
      case 'iOS':
        return {
          icon: Apple,
          classes: 'bg-slate-400/10 text-slate-300 border-slate-500/20 hover:border-slate-500/40'
        };
      case 'Roblox':
        return {
          icon: Layers,
          classes: 'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-500/40'
        };
      default:
        return {
          icon: Gamepad2,
          classes: 'bg-zinc-800 text-zinc-300 border-zinc-700'
        };
    }
  };

  const config = getPlatformConfig(platform);
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'text-[11px] px-1.5 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2'
  };

  const iconSizes = {
    sm: 11,
    md: 13,
    lg: 15
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-md border backdrop-blur-xs transition-colors whitespace-nowrap ${config.classes} ${sizeClasses[size]}`}
    >
      {showIcon && <Icon size={iconSizes[size]} className="shrink-0" />}
      <span>{platform}</span>
    </span>
  );
};
