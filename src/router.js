import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Faq from "./pages/Faq";
import Products from "./pages/Products";
import Auth from "./pages/Auth";
import ProductDetail from "./pages/Product Detail";
import Blog from "./pages/Blog";
import ForgotPassword from "./pages/Forgot Password";
import Cart from "./pages/Cart/";
import Checkout from "./pages/Checkout/";
import OrderTrack from "./pages/Order Track";

const router = createBrowserRouter([
  { path: "/faq", element: <Faq /> },
  { path: "/auth", element: <Auth /> },
  { path: "/forgot", element: <ForgotPassword /> },
  { path: "/products", element: <Products /> },
  { path: "/productdetail", element: <ProductDetail /> },
	{ path: "/blog", element: <Blog /> },
  { path: "/mycart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/tracking", element: <OrderTrack /> },
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

export default router;
