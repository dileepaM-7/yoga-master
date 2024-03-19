import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom'; // Assuming createBrowserRouter is not used
import { createRoot } from 'react-dom/client'; // Corrected import statement

import { 
  QueryClient, 
  QueryClientProvider 
} from '@tanstack/react-query';

import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';

import { router } from './routes/router';

// Initialize react-query
const queryClient = new QueryClient();

// Initialize AOS
Aos.init();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>,
);
