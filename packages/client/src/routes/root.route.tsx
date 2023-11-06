import type { RouteObject } from "react-router-dom";

import { Error } from "../pages/root/error";
import { Layout } from "../pages/root/layout";
import { Page } from "../pages/root/page";

export const rootRoute: RouteObject = {
  children: [
    {
      element: <Page />,
      index: true,
    },
  ],
  element: <Layout />,
  errorElement: <Error />,
  path: "/",
};
