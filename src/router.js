import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Faq from "./pages/Faq";
import Products from "./pages/Products"
import Auth from "./pages/Auth"
import ProductDetail from "./pages/Product Detail";
import ForgotPassword from "./pages/Forgot Password";

const router = createBrowserRouter([
	{ path: "/faq", element: <Faq /> },
	{ path: "/auth", element: <Auth /> },
	{ path: "/forgotpassword", element: <ForgotPassword /> },
	{ path: "/products", element: <Products /> },
	{ path: "/product/:id", element: <ProductDetail /> },
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
	},
]);

export default router;
