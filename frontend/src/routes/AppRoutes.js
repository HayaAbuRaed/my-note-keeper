import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import AppLoadingSkeleton from "../containers/LoadingSkeleton/AppLoadingSkeleton";

const AppRoutes = () => {
  const appRoutes = useRoutes([publicRoutes]);

  return <Suspense fallback={<AppLoadingSkeleton />}>{appRoutes}</Suspense>;
};

export default AppRoutes;
