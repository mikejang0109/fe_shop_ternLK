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
<<<<<<< HEAD
import BlogDetail from "./pages/BlogDetail";
=======
import OrderTrack from "./pages/Order Track";
import Blog from "./pages/Blog"
>>>>>>> 22fb1f22412b4be5a8294de0e5bdfc22ce2350e6

const router = createBrowserRouter([
  { path: "/faq", element: <Faq /> },
  { path: "/auth", element: (
    <IsLogin>
      <Auth />
    </IsLogin>
  ) },
  { path: "/forgot", element: (
    <IsLogin>
      <ForgotPassword />
    </IsLogin>
  ) },
  { path: "/products", element: <Products /> },
  { path: "/productdetail", element: <ProductDetail /> },
<<<<<<< HEAD
  { path: "/mycart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/blogdetail", element: <BlogDetail /> },
=======
	{ path: "/blog", element: <Blog /> },
  { path: "/mycart", element: (
    <PrivateRoute>
      <Cart />
    </PrivateRoute>
  ) },
  { path: "/checkout", element: (
    <PrivateRoute>
      <Checkout />
    </PrivateRoute>
  ) },
  { path: "/tracking", element: (
    <PrivateRoute>
      <OrderTrack />
    </PrivateRoute>
  ) },
>>>>>>> 22fb1f22412b4be5a8294de0e5bdfc22ce2350e6
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

export default router;
