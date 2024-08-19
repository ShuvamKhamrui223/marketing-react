import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  Blog,
  Contact,
  PortfolioDetails,
  ServiceDetails,
} from "./pages";
import RootLayouts from "./components/layouts/RootLayouts";
import ErrorPage from "./pages/ErrorPage";
const SiteRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/portfolio",
          element: <PortfolioDetails />,
        },
        {
          path: "/services",
          element: <ServiceDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default SiteRoutes;
