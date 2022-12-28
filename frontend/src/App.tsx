import './App.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer autoClose={1000} hideProgressBar={true} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
