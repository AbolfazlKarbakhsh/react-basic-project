import React from 'react'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import router from './router'
import './index.css'
const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    }
  }
});

function App() {

  return (
    < >
      <QueryClientProvider client={client}>
        <ToastContainer rtl />
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App
