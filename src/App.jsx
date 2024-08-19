import RootLayouts from "./components/layouts/RootLayouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  ServiceDetails,
  PortfolioDetails,
  BlogDetails,
} from "./pages";
import ErrorPage from "./pages/ErrorPage";
import Blogs from "./pages/Blogs";
import DetailsPageLayout from "./components/layouts/DetailsPageLayout";
import ServicesPage from "./pages/ServicesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <ServicesPage />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
          children: [
            {
              path: "details",
              element: <BlogDetails />,
            },
          ],
        },

        
      ],
    },
    {
      path: "/details",
      element: <DetailsPageLayout />,
      children:[
        {
          path: "portfolio",
          element: <PortfolioDetails />,
        },
        {
          path: "service",
          element: <ServiceDetails />,
        },
      ]
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
