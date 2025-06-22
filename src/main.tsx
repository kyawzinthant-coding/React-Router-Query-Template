import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { QueryProviders } from './lib/QueryProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProviders>
      <RouterProvider router={router} />
    </QueryProviders>
  </StrictMode>
);
