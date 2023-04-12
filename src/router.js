import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { PrivateRoute, IsLogin } from "./utils/wrapper/privateRoute";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Faq from "./pages/Faq";
import Products from "./pages/Products";
import Auth from "./pages/Auth";
import ProductDetail from "./pages/Product Detail";
import ForgotPassword from "./pages/Forgot Password";
import Cart from "./pages/Cart/";
import Checkout from "./pages/Checkout/";
import BlogDetail from "./pages/BlogDetail";
import OrderTrack from "./pages/Order Track";
import Blog from "./pages/Blog";
//angga
import AboutUs from './pages/AboutUs';
import PreLaunching from "./pages/ComingSoon";
import ProfileCust from './pages/Profile';
import ProfileSeller from './pages/Profile/Seller';
import MyOrder from "./pages/Profile/MyOrder";

const router = createBrowserRouter([
  { path: "/faq", element: <Faq /> },
  { path: "/cek", element: <MyOrder /> },
  {
    path: "/auth", element: (
      <IsLogin>
        <Auth />
      </IsLogin>
    )
  },
  {
    path: "/forgot", element: (
      <IsLogin>
        <ForgotPassword />
      </IsLogin>
    )
  },
  { path: "/products", element: <Products /> },
  {
    path: "/product/:id", element:
      <PrivateRoute>
        <ProductDetail /> 
      </PrivateRoute>},
	{ path: "/blog", element: <Blog /> },
  { path: "/blogdetail", element: <BlogDetail /> },
  {
    path: "/mycart", element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    )
  },
  {
    path: "/checkout", element: (
      <PrivateRoute>
        <Checkout />
      </PrivateRoute>
    )
  },
  {
    path: "/tracking", element: (
      <PrivateRoute>
        <OrderTrack />
      </PrivateRoute>
    )
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
