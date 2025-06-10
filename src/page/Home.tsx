import React, { ReactNode } from 'react';
import {
  Github,
  Code,
  Database,
  Zap,
  Palette,
  Settings,
  GitBranch,
  Package,
  ChevronRight,
  Star,
  Download,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

type FeatureCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight?: boolean;
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  highlight = false,
}: FeatureCardProps) => (
  <div
    className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      highlight
        ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 dark:from-blue-950/50 dark:to-indigo-950/50 dark:border-blue-800'
        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
    }`}
  >
    <div
      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        highlight
          ? 'bg-blue-100 dark:bg-blue-900'
          : 'bg-gray-100 dark:bg-gray-700'
      }`}
    >
      <Icon
        className={`w-6 h-6 ${highlight ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
      />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

type TechBadgeProps = {
  name: string;
  color?: string;
};

const TechBadge = ({
  name,
  color = 'bg-gray-100 text-gray-800',
}: TechBadgeProps) => (
  <span
    className={`px-3 py-1 rounded-full text-sm font-medium ${color} dark:bg-gray-700 dark:text-gray-300`}
  >
    {name}
  </span>
);

type CodeBlockProps = {
  children: ReactNode;
};

const CodeBlock = ({ children }: CodeBlockProps) => (
  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
    <code className="text-green-400 text-sm font-mono whitespace-pre">
      {children}
    </code>
  </div>
);

export default function ReactTemplateHome() {
  const features = [
    {
      icon: Code,
      title: 'Code Splitting',
      description:
        'Automatic code splitting for optimal performance and faster loading times across your application.',
      highlight: false,
    },
    {
      icon: GitBranch,
      title: 'React Router Setup',
      description:
        'Pre-configured browser router with nested routing capabilities and route-based code splitting.',
      highlight: false,
    },
    {
      icon: Database,
      title: 'Advanced Data Fetching',
      description:
        'TanStack Query + React Router loaders for pre-fetching, caching, and seamless data management.',
      highlight: true,
    },
    {
      icon: Palette,
      title: 'UI Ready',
      description:
        'TailwindCSS and shadcn/ui components pre-configured for rapid, beautiful interface development.',
      highlight: false,
    },
    {
      icon: Settings,
      title: 'Development Tools',
      description:
        'ESLint, Prettier, and best practices configured for clean, maintainable TypeScript code.',
      highlight: false,
    },
    {
      icon: Package,
      title: 'State Management',
      description:
        'Zustand integration with persistent storage for lightweight, powerful state management.',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Production Ready Template
            <Sparkles className="w-4 h-4" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            React Router
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Query Template
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            A modern React template with advanced data fetching, routing, and
            state management. Built for TypeScript developers who value
            performance and developer experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://github.com/kyawzinthant-coding/React-Router-Query-Template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
              Get Started
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="https://react-router-query-template.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <TechBadge name="TypeScript" color="bg-blue-100 text-blue-800" />
            <TechBadge name="React Router" color="bg-red-100 text-red-800" />
            <TechBadge
              name="TanStack Query"
              color="bg-orange-100 text-orange-800"
            />
            <TechBadge name="TailwindCSS" color="bg-cyan-100 text-cyan-800" />
            <TechBadge name="Zustand" color="bg-purple-100 text-purple-800" />
            <TechBadge name="shadcn/ui" color="bg-green-100 text-green-800" />
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Quick Start
              </h3>
            </div>
            <div className="p-6">
              <CodeBlock>{`# Clone the template
git clone https://github.com/kyawzinthant-coding/React-Router-Query-Template

# Install dependencies
pnpm install

# Start development server
pnpm run dev`}</CodeBlock>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with modern best practices and developer experience in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Data Fetching Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <Database className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Advanced Data Fetching Pattern
            </h3>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Pre-fetch data in route loaders with TanStack Query, ensuring your
              components render with cached data immediately. No more loading
              spinners on every navigation.
            </p>
            <div className="bg-white/10 rounded-lg p-4 text-left">
              <CodeBlock>{`// Route loader pre-fetches data
export const loader = ({ params }) => {
  return queryClient.ensureQueryData({
    queryKey: ['user', params.id],
    queryFn: () => fetchUser(params.id)
  });
};

// Component gets cached data instantly
function UserProfile() {
  const { data } = useQuery({ queryKey: ['user', id] });
  return <div>{data.name}</div>; // No loading state needed!
}`}</CodeBlock>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: '8+', label: 'Technologies' },
            { number: 'Zero', label: 'Configuration' },
            { number: '100%', label: 'TypeScript' },
            { number: 'Modern', label: 'Best Practices' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
          <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Start Building Today
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Skip the setup, focus on building. This template gives you
            everything you need for a modern React application.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/kyawzinthant-coding/React-Router-Query-Template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Template
            </a>
            <a
              href="https://github.com/kyawzinthant-coding/React-Router-Query-Template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
