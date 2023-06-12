import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import './index.css'

//routes
import Login from './routes/Login';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
