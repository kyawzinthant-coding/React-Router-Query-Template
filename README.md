# React Router Query Template

A modern, production-ready React template featuring advanced data fetching patterns, comprehensive routing, and state management. Built with TypeScript and designed for developers who value performance, developer experience, and maintainable code.

## ✨ Features

### 🚀 Core Technologies

- **React 18** - Latest React with concurrent features
- **TypeScript** - Full type safety and enhanced developer experience
- **Vite** - Lightning-fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components

### 🔄 Advanced Data Fetching

- **TanStack Query (React Query)** - Powerful data synchronization
- **React Router Loaders** - Pre-fetch data before component mounting
- **Smart Caching** - Automatic background updates and cache management
- **Optimistic Updates** - Smooth user experience with instant feedback

### 🛣️ Routing & Navigation

- **React Router v6** - Modern declarative routing
- **Nested Routing** - Complex layout management
- **Code Splitting** - Automatic route-based code splitting
- **Browser Router** - Full SPA navigation experience

### 📦 State Management

- **Zustand** - Lightweight, scalable state management
- **Persistent Storage** - Automatic state persistence
- **TypeScript Integration** - Fully typed stores and actions

### 🛠️ Developer Experience

- **ESLint** - Code linting with best practices
- **Prettier** - Consistent code formatting
- **Conventional Commits** - Standardized commit messages with cz-config
- **Hot Module Replacement** - Instant development feedback

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react-router-query-template.git
cd react-router-query-template

# Install dependencies
pnpm install

# Start development server
npm run dev

# Open browser
# Navigate to http://localhost:5173
```

## 🔄 Data Fetching Pattern

This template implements an advanced data fetching pattern that combines React Router loaders with TanStack Query for optimal performance and user experience.

### How It Works

1. **Route Loader Pre-fetches**: Data is fetched in route loaders before components mount
2. **TanStack Query Caches**: Data is cached with appropriate query keys
3. **Component Renders Immediately**: Components receive cached data with zero loading states
4. **Background Updates**: Data stays fresh with automatic background refetching

### Example Implementation

```typescript
// Route loader (router/loaders.ts)
export const userLoader = ({ params }: LoaderFunctionArgs) => {
  const userId = params.userId!;

  return queryClient.ensureQueryData({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Route configuration (router/index.tsx)
{
  path: "/user/:userId",
  element: <UserProfile />,
  loader: userLoader,
}

// Component (pages/UserProfile.tsx)
export function UserProfile() {
  const { userId } = useParams();

  const { data: user, isError, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId!),
    // Data is already cached from loader - no loading state needed!
  });

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

### Benefits

- **Zero Loading States**: Components render immediately with cached data
- **Better SEO**: Data is available during initial render
- **Improved UX**: No flashing loading spinners on navigation
- **Automatic Updates**: Background refetching keeps data fresh
- **Error Boundaries**: Centralized error handling

## 🏪 State Management with Zustand

### Basic Store Setup

```typescript
// store/appStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  theme: 'light' | 'dark';
  sidebar: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      sidebar: false,
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
      toggleSidebar: () =>
        set((state) => ({
          sidebar: !state.sidebar,
        })),
    }),
    {
      name: 'app-storage', // localStorage key
    }
  )
);
```

### Usage in Components

```typescript
// components/Header.tsx
import { useAppStore } from '@/store/appStore';

export function Header() {
  const { theme, toggleTheme, sidebar, toggleSidebar } = useAppStore();

  return (
    <header>
      <button onClick={toggleTheme}>
        Theme: {theme}
      </button>
      <button onClick={toggleSidebar}>
        Sidebar: {sidebar ? 'Open' : 'Closed'}
      </button>
    </header>
  );
}
```

## 🎨 Styling with TailwindCSS & shadcn/ui

### TailwindCSS Configuration

The template includes a pre-configured Tailwind setup with:

- Custom color palette
- Typography scales
- Spacing system
- Responsive breakpoints
- Dark mode support

### shadcn/ui Components

Pre-installed components include:

- Button, Input, Label
- Card, Dialog, Sheet
- Toast, Alert, Badge
- Form components with validation

### Adding New shadcn/ui Components

```bash
# Add a new component
npx shadcn-ui@latest add dialog

# Add multiple components
npx shadcn-ui@latest add button input label
```

## 🔧 Development Workflow

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check

# Run all checks
npm run check-all
```

### Commit Workflow

This template uses Conventional Commits with cz-config:

```bash
# Make changes
git add .

# Use conventional commit format
npm run commit
# or
git cz

# This will guide you through:
# - Type of change (feat, fix, docs, etc.)
# - Scope of change
# - Description
# - Breaking changes
# - Issues closed
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run type-check   # TypeScript type checking

# Git
npm run commit       # Conventional commit helper

```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The library that powers it all
- [TanStack Query](https://tanstack.com/query) - For incredible data fetching
- [React Router](https://reactrouter.com/) - For seamless navigation
- [TailwindCSS](https://tailwindcss.com/) - For utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) - For beautiful components
- [Zustand](https://github.com/pmndrs/zustand) - For simple state management

## 📧 Support

If you have any questions or run into issues, please:

1. Check the [Issues](https://github.com/your-username/react-router-query-template/issues) page
2. Create a new issue if your problem isn't already addressed
3. Provide detailed information about your environment and the issue

---

**Happy coding! 🚀**
