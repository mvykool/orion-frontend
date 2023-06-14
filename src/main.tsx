import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import './index.css'

//routes
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import App from './routes/App';
import Settings from './routes/Settings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/settings",
    element: <Settings/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
