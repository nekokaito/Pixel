import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './provider/AuthProvider';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layout/root/Root';
// eslint-disable-next-line no-unused-vars
import { element } from 'prop-types';
import Home from './layout/main/Home';
import Login from './layout/account/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },

    ] 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)

