import type { RouteObject } from "react-router-dom";

import { Error } from "../pages/home/error";
import { Layout } from "../pages/home/layout";
import { Page } from "../pages/home/page";

export const homeRoute: RouteObject = {
  children: [
    {
      element: <Page />,
      index: true,
    },
  ],
  element: <Layout />,
  errorElement: <Error />,
  path: "/home",
};
