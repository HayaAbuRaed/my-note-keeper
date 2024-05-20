import { Suspense } from "react";
import publicRoutes from "./publicRoutes";
import { useRoutes } from "react-router-dom";

const AppRoutes = () => {
  const appRoutes = useRoutes([publicRoutes]);

  return <Suspense fallback={<h2>Loading...</h2>}>{appRoutes}</Suspense>;
};

export default AppRoutes;
