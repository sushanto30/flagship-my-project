import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import About from './component/pages/About.jsx';
import Carts from './component/pages/Carts.jsx';
import Favorites from './component/pages/Favorites.jsx';
import Home from './component/pages/Home.jsx';
import CardDetails from './component/CardDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
    children: [
      {
        path:'/',
        Component:Home,
        loader: ()=> fetch('../phone.json')
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/cart',
        Component: Carts
      },
      {
        path: '/favorite',
        Component: Favorites
      },
      {
        path:'/card/:id',
        Component:CardDetails,
        loader: ()=> fetch('../phone.json')
      }

    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
