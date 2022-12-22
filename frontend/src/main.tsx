import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import Admin from './pages/Admin';
import Home from './pages/Home';
import './index.css';
import CategoriesPage from './pages/CategoriesPage';
import MyPage from './pages/MyPage';
import NewsPage from './pages/NewsPage';
import { MyHome, MyInfoEditTab, MySubscribe } from './components/mypage/DetailPage';
import RegisterPage from './pages/RegisterPage';
import LoginModalPage from './pages/LoginModalPage';
import NotFound from './pages/NotFound';

axios.defaults.baseURL = 'http://localhost:3000';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      {
        path: '/mypage',
        element: <MyPage />,
        children: [
          { path: '/mypage', element: <MyHome /> },
          { path: '/mypage/subscribe', element: <MySubscribe /> },
          { path: '/mypage/editUser', element: <MyInfoEditTab /> },
        ],
      },
      { path: '/admin', element: <Admin /> },
      { path: '/categories', element: <CategoriesPage /> },
      { path: '/categories/:catId', element: <NewsPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/login', element: <LoginModalPage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
