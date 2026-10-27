import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './provider/AuthProvider';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layout/root/Root';
import Home from './layout/main/Home';
const Login = lazy(() => import('./layout/account/Login'));
const Register = lazy(() => import('./layout/account/Register'));
const AddItems = lazy(() => import('./layout/main/items/AddItems'));
const AllItems = lazy(() => import('./layout/main/items/AllItems'));
const MyItems = lazy(() => import('./layout/main/items/MyItems'));
const Details = lazy(() => import('./layout/main/items/details/Details'));
import Private from './provider/Private';
const UpdateItem = lazy(() => import('./layout/main/items/UpdateItem'));
import Error from './layout/error/Error';
import { cachedFetchJson, getApiUrl } from './lib/apiCache';
const CategoryItems = lazy(() => import('./layout/main/items/CategoryItems'));
const ArtistStudio = lazy(() => import('./layout/main/ArtistStudio'));
const ArtistStorefront = lazy(() => import('./layout/main/ArtistStorefront'));
const Orders = lazy(() => import('./layout/main/Orders'));

const RouteFallback = () => (
  <div className="flex min-h-[60vh] items-center justify-center" aria-label="Loading">
    <div className="loading loading-spinner loading-lg" />
  </div>
);

const lazyElement = (Component) => (
  <Suspense fallback={<RouteFallback />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => cachedFetchJson(getApiUrl('/items'), { ttl: 20000 })
      },
      {
        path: "/login",
        element: lazyElement(Login)
      },
      {
        path: "/register",
        element: lazyElement(Register)
      },
      {
        path: "/studio",
        element: <Private>{lazyElement(ArtistStudio)}</Private>
      },
      {
        path: "/artists/:uid",
        element: lazyElement(ArtistStorefront)
      },
      {
        path: "/orders",
        element: <Private>{lazyElement(Orders)}</Private>
      },
      {
          path: "/all_items",
          element: lazyElement(AllItems),
          loader: () => cachedFetchJson(getApiUrl('/items'), { ttl: 20000 })
      },
      {
        path: "/add_items",
        element: <Private>{lazyElement(AddItems)}</Private> 
      },
      {
        path: "/my_items",
        element: <Private>{lazyElement(MyItems)}</Private>
      },
      {
        path: "/:_id",
        element: lazyElement(Details),
        loader: ({ params }) =>
          cachedFetchJson(getApiUrl(`/items/id/${params._id}`), { ttl: 30000 })
      },
      {
        path: "/update_item/:id",
        element: lazyElement(UpdateItem),
        loader: ({ params }) => cachedFetchJson(getApiUrl(`/items/id/${params.id}`), { ttl: 30000 })    
      },
      {
        path: "/category/:url",
        element: lazyElement(CategoryItems)

      }

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

