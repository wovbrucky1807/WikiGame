import React, { useState } from 'react';
import { ShieldCheck, Sparkles, User as UserIcon } from 'lucide-react';

interface UserAvatarProps {
  avatar?: string;
  name: string;
  role?: 'admin' | 'editor' | 'member';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  avatar,
  name,
  role,
  size = 'md',
  showBadge = false
}) => {
  const [error, setError] = useState(false);

  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-20 h-20 text-2xl font-bold'
  };

  const getInitials = (n: string) => {
    if (!n) return 'U';
    return n.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="relative inline-block shrink-0">
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-zinc-300 font-semibold select-none shadow-xs`}
      >
        {avatar && !error ? (
          <img
            src={avatar}
            alt={name}
            onError={() => setError(true)}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-blue-900/60 to-zinc-800 flex items-center justify-center text-blue-300">
            {name ? getInitials(name) : <UserIcon size={16} />}
          </div>
        )}
      </div>

      {showBadge && role && (
        <span
          className={`absolute -bottom-1 -right-1 p-0.5 rounded-full border border-[#090b10] ${
            role === 'admin'
              ? 'bg-amber-500 text-black'
              : role === 'editor'
              ? 'bg-blue-500 text-white'
              : 'bg-emerald-500 text-white'
          }`}
          title={`Role: ${role.toUpperCase()}`}
        >
          {role === 'admin' ? (
            <ShieldCheck size={10} className="stroke-[3]" />
          ) : role === 'editor' ? (
            <Sparkles size={10} className="stroke-[2.5]" />
          ) : (
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          )}
        </span>
      )}
    </div>
  );
};
