import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Admin from './pages/Admin';
import Home from './pages/Home';
import './index.css';
import CategoriesPage from './pages/CategoriesPage';
import MyPage from './pages/MyPage';
import NewsPage from './pages/NewsPage';
import MySubscribe from './components/MySubscribe';
import MyInfoEditTab from './components/MyInfoEditTab';
import RegisterPage from './pages/RegisterPage';
import LoginRgisterModalPage from './pages/LoginRgisterModalPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: '/', element: <Home /> },
      {
        path: '/mypage',
        element: <App />,
        children: [
          { path: '/mypage', element: <MyPage /> },
          { path: '/mypage/subscribe', element: <MySubscribe /> },
          { path: '/mypage/editUser', element: <MyInfoEditTab /> },
        ],
      },
      { path: '/admin', element: <Admin /> },
      { path: '/categories', element: <CategoriesPage /> },
      { path: '/categories/:catId', element: <NewsPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/login', element: <LoginRgisterModalPage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
