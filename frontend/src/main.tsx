import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Admin from './components/Admin';
import Home from './components/Home';
import './index.css';
import CardPage from './pages/CardPage';
import MyPage from './pages/MyPage';
import NewsPage from './pages/NewsPage';
import MySubscribe from './components/MySubscribe';
import MyChallenge from './components/MyChallenge';
import EditUserInfo from './components/EditUserInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/admin', element: <Admin /> },
      { path: '/categories/:catId', element: <CardPage /> },
      { path: '/cards/:cardId', element: <NewsPage /> },
      { path: '/mypage/subscribe', element: <MySubscribe /> },
      { path: '/mypage/challenge', element: <MyChallenge /> },
      { path: '/mypage/editUser', element: <EditUserInfo /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
