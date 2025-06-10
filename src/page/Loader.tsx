import { Loader2, Database, Zap, Route } from 'lucide-react';

interface LoadingPageProps {
  message?: string;
  showDetails?: boolean;
}

export default function LoadingPage({
  message = 'Loading your application...',
  showDetails = true,
}: LoadingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md w-full">
        {/* Main Loading Animation */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto mb-8 relative">
            {/* Rotating outer ring */}
            <div className="absolute inset-0 border-4 border-slate-200 dark:border-slate-700 rounded-full animate-spin border-t-blue-600 dark:border-t-blue-400"></div>

            {/* Pulsing inner circle */}
            <div className="absolute inset-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          </div>
        </div>

        {/* Loading Message */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {message}
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Setting up your experience...
          </p>
        </div>

        {/* Tech Stack Indicators */}
        {showDetails && (
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <div className="relative">
                <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Query
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <div className="relative">
                <Route className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Router
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
              <div className="relative">
                <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                State
              </span>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Loading Tips */}
        <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
          <p>💡 Pre-fetching data with React Router loaders</p>
          <p>🚀 Caching with TanStack Query for instant loads</p>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
