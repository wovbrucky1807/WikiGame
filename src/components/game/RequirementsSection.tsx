import React from 'react';
import { SystemRequirements } from '../../types';
import { Cpu, HardDrive, Monitor, Layers, CheckCircle2 } from 'lucide-react';

interface RequirementsSectionProps {
  requirements?: SystemRequirements;
  gameTitle: string;
}

export const RequirementsSection: React.FC<RequirementsSectionProps> = ({ requirements, gameTitle }) => {
  if (!requirements) {
    return (
      <div className="p-8 text-center bg-zinc-900/40 rounded-xl border border-zinc-800 text-zinc-500">
        System requirements not listed for {gameTitle} (Console or Mobile native).
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
          PC System Requirements
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Hardware specifications and performance benchmarks for running {gameTitle}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Minimum Specs */}
        <div className="p-5 rounded-xl bg-[#11141d] border border-zinc-800/80 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <h3 className="font-heading font-bold text-base text-zinc-200 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              Minimum Specifications
            </h3>
            <span className="text-[11px] font-mono text-zinc-400">30-45 FPS Target</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-500 font-semibold text-[10px] uppercase">Operating System</span>
              <span className="text-zinc-200">{requirements.minimum.os}</span>
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-500 font-semibold text-[10px] uppercase">Processor (CPU)</span>
              <span className="text-zinc-200">{requirements.minimum.cpu}</span>
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-500 font-semibold text-[10px] uppercase">Graphics (GPU)</span>
              <span className="text-zinc-200">{requirements.minimum.gpu}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-zinc-500 font-semibold text-[10px] uppercase">Memory (RAM)</span>
                <span className="text-zinc-200 font-semibold">{requirements.minimum.ram}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-zinc-500 font-semibold text-[10px] uppercase">Storage Space</span>
                <span className="text-zinc-200 font-semibold">{requirements.minimum.storage}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Specs */}
        <div className="p-5 rounded-xl bg-[#11141d] border border-blue-500/30 shadow-lg shadow-blue-500/5 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <h3 className="font-heading font-bold text-base text-blue-400 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-blue-400" />
              Recommended Specifications
            </h3>
            <span className="text-[11px] font-mono text-emerald-400">60+ FPS High Preset</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-500 font-semibold text-[10px] uppercase">Operating System</span>
              <span className="text-zinc-200">{requirements.recommended.os}</span>
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-500 font-semibold text-[10px] uppercase">Processor (CPU)</span>
              <span className="text-zinc-200">{requirements.recommended.cpu}</span>
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-500 font-semibold text-[10px] uppercase">Graphics (GPU)</span>
              <span className="text-zinc-200">{requirements.recommended.gpu}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex flex-col gap-0.5">
                <span className="text-zinc-500 font-semibold text-[10px] uppercase">Memory (RAM)</span>
                <span className="text-zinc-200 font-semibold text-blue-300">{requirements.recommended.ram}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-zinc-500 font-semibold text-[10px] uppercase">Storage Space</span>
                <span className="text-zinc-200 font-semibold text-blue-300">{requirements.recommended.storage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
