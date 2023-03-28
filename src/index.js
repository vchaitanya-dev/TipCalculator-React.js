import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from './Pages/Contact'
import About from './Pages/About'
import App from './App';
import Admin from './Pages/Admin';
import AdminUser from './Pages/AdminUser' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';

const  router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },{
    path:'/login',
    element:<Admin />
  },
  {
    path:'/admin/:email',
    element:<AdminUser />
  },{
    path:'/about',
    element:<About />
  },{
    path:'/contact',
    element:<Contact />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);