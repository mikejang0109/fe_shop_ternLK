import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

//angga
import AboutUs from './pages/AboutUs';
import Auth from './pages/Auth';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Cart from './pages/Cart/';
import Checkout from './pages/Checkout/';
import PreLaunching from './pages/ComingSoon';
import Error from './pages/Error';
import Faq from './pages/Faq';
import ForgotPassword from './pages/Forgot Password';
import Home from './pages/Home';
import OrderTrack from './pages/Order Track';
import ProductDetail from './pages/Product Detail';
import Products from './pages/Products';
import ProfileCust from './pages/Profile';
import ProfileSeller from './pages/Profile/Seller';
import Wishlist from './pages/Wishlist';
import {
  IsLogin,
  PrivateRoute,
} from './utils/wrapper/privateRoute';

const router = createBrowserRouter([
  { path: "/faq", element: <Faq /> },
  {
    path: "/auth",
    element: (
      <IsLogin>
        <Auth />
      </IsLogin>
    ),
  },
  {
    path: "/forgot",
    element: (
      <IsLogin>
        <ForgotPassword />
      </IsLogin>
    ),
  },
  { path: "/products", element: <Products /> },
  {
    path: "/product/:id",
    element: (
      <PrivateRoute>
        <ProductDetail />
      </PrivateRoute>
    ),
  },
  { path: "/blog", element: <Blog /> },
  { path: "/blogdetail", element: <BlogDetail /> },
  {
    path: "/mycart",
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <PrivateRoute>
        <Wishlist />
      </PrivateRoute>
    ),
  },
  {
    path: "/checkout",
    element: (
      <PrivateRoute>
        <Checkout />
      </PrivateRoute>
    ),
  },
  {
    path: "/tracking",
    element: (
      <PrivateRoute>
        <OrderTrack />
      </PrivateRoute>
    ),
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  //angga
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/soon",
    element: <PreLaunching />,
  },
  {
    path: "/profilecust",
    element: <ProfileCust />,
  },
  {
    path: "/profileseller",
    element: <ProfileSeller />,
  },
]);

export default router;
