// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>,
);
