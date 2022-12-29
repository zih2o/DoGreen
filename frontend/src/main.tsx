import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Admin from './pages/Admin';
import AdminMascot from './components/adminPage/AdminMascot';
import AdminNews from './components/adminPage/AdminNews';
import Home from './pages/Home';
import './index.css';
import { CategoriesPage } from './pages/CategoriesPage';
import { MyPage } from './pages/MyPage';
import NewsPage from './pages/NewsPage';
import { MyHome, MyInfoEditTab, MySubscribe } from './components/mypage/DetailPage';
import RegisterPage from './pages/RegisterPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/Login';

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
      {
        path: '/admin',
        element: <Admin />,
        children: [
          { path: '/admin/mascot', element: <AdminMascot /> },
          { path: '/admin/news', element: <AdminNews /> },
        ],
      },
      { path: '/categories', element: <CategoriesPage /> },
      { path: '/categories/:catId', element: <NewsPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/login', element: <LoginPage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
