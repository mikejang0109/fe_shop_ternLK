import React from "react";

import { createBrowserRouter } from "react-router-dom";

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
import ContactUs from "./pages/ContactUs";
import ResetPass from "./pages/Forgot Password/resetPass";
import Chat from "./pages/Chat";
import MyOrder from "./pages/Profile/MyOrder";

import AboutUs from "./pages/AboutUs";
import PreLaunching from "./pages/ComingSoon";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import MyProduct from "./pages/Profile/MyProduct";
import SellingProduct from "./pages/Profile/SellingProduct";

import { IsLogin, PrivateRoute } from "./utils/wrapper/privateRoute";

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
    path: "/resetpass",
    element: (
      <IsLogin>
        <ResetPass />
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
    path: "/wishlist",
    element: (
      <PrivateRoute>
        <Wishlist />
      </PrivateRoute>
    ),
  },
  {
    path: "/myproduct",
    element: (
      <PrivateRoute>
        <MyProduct />
      </PrivateRoute>
    ),
  },
  {
    path: "/sellproduct",
    element: (
      <PrivateRoute>
        <SellingProduct />
      </PrivateRoute>
    ),
  },
  {
    path: "/myorder",
    element: (
      <PrivateRoute>
        <MyOrder />
      </PrivateRoute>
    ),
  },
  {
    path: "/contact",
    element: <ContactUs />,
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
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/profile",
    element:
      <PrivateRoute>
        <Profile />,
      </PrivateRoute>
  },
]);

export default router;
