import { Outlet } from "react-router-dom";
import Layout from "../pages/Layout";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

const publicRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      element: <Outlet />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],
};

export default publicRoutes;
