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
import Blog from "./pages/Blog"

const router = createBrowserRouter([
  { path: "/faq", element: <Faq /> },
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
]);

export default router;
