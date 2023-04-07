import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Faq from "./pages/FAQ";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
	},
	{ path: "/faq", element: <Faq /> },
	{ path: "/auth", element: <Auth /> },
]);

export default router;
