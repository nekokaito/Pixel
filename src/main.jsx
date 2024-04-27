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
import Register from './layout/account/Register';
import AddItems from './layout/main/items/AddItems';
import AllItems from './layout/main/items/AllItems';
import MyItems from './layout/main/items/MyItems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/items')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
          path: "/all_items",
          element: <AllItems></AllItems>
      },
      {
        path: "/add_items",
        element: <AddItems></AddItems>
      },
      {
        path: "/my_items",
        element: <MyItems></MyItems>
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

