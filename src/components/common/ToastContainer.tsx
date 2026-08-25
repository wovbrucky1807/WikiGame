import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const getIcon = () => {
          switch (toast.type) {
            case 'success':
              return <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />;
            case 'error':
              return <AlertCircle size={18} className="text-rose-400 shrink-0" />;
            case 'warning':
              return <AlertTriangle size={18} className="text-amber-400 shrink-0" />;
            case 'info':
            default:
              return <Info size={18} className="text-blue-400 shrink-0" />;
          }
        };

        const getBorderColor = () => {
          switch (toast.type) {
            case 'success': return 'border-emerald-500/30 bg-[#0c1410]/95';
            case 'error': return 'border-rose-500/30 bg-[#170e10]/95';
            case 'warning': return 'border-amber-500/30 bg-[#161208]/95';
            case 'info':
            default: return 'border-blue-500/30 bg-[#0d121c]/95';
          }
        };

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-xl border shadow-xl backdrop-blur-md text-white transition-all animate-in slide-in-from-bottom-3 duration-200 ${getBorderColor()}`}
          >
            {getIcon()}
            <div className="flex-1 min-w-0">
              <h5 className="font-semibold text-xs leading-tight text-zinc-100">
                {toast.title}
              </h5>
              {toast.message && (
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                  {toast.message}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="text-zinc-500 hover:text-zinc-300 p-0.5"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
