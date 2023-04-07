import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Faq from "./pages/Faq";
import Products from "./pages/Products";

const router = createBrowserRouter([
	{ path: "/faq", element: <Faq /> },
	{ path: "/products", element: <Products /> },
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
	},
]);

export default router;
