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
<<<<<<< HEAD
import Blog from "./pages/Blog"

const router = createBrowserRouter([
	{ path: "/faq", element: <Faq /> },
	{ path: "/auth", element: <Auth /> },
	{ path: "/blog", element: <Blog /> },
	{ path: "/forgotpassword", element: <ForgotPassword /> },
	{ path: "/products", element: <Products /> },
	{ path: "/product/:id", element: <ProductDetail /> },
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
	},
=======
import Cart from "./pages/Cart/";
import Checkout from "./pages/Checkout/";
import OrderTrack from "./pages/Order Track";

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
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
>>>>>>> 60c6de2f638aa0299736b74d1eb0c07e1c11f8b8
]);

export default router;
