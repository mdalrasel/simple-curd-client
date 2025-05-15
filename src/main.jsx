import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout.jsx';
import UserDetails from './compopnents/UserDetails.jsx';
import UserUpdate from './compopnents/UserUpdate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        path: '/',
        Component: App,
      },
      {
        path: 'users/:id',
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`),
        Component: UserDetails
      },
      {
        path:'/update/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
        Component:UserUpdate
      }
    ]
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
