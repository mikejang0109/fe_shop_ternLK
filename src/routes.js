import { createBrowserRouter } from "react-router-dom";
import Faq from "./pages/FAQ";
import App from "./App"

const router = createBrowserRouter([
    { path:"/faq", element:<Faq />},
    { path:"/", element:<App />},
])

export default router;