import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';

const Home = lazy(() => import('./page/Home'));

const withSuspense = (Component: React.ComponentType) => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Component />
    </Suspense>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(Home),
    errorElement: <p>Error Page</p>,
    loader: () => {
      return {
        message: 'That codebase will run before the component is loaded',
      };
    },
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
  {
    path: '/login',
    element: <div>Login</div>,
    action: () => {
      return {
        message:
          'That code will run if the form is submitted with the help of React router',
      };
    },
    loader: () => {
      return {
        message:
          'That code will run before the component is loaded ( can check auth status )',
      };
    },
  },
  {
    path: '/logout',
    action: () => {
      return {
        message: 'That code will run before the component is loaded',
      };
    },
  },
]);
