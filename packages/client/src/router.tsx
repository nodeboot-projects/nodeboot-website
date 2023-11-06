import { createBrowserRouter } from "react-router-dom";

import { homeRoute } from "./routes/home.route";

export const routerClient = createBrowserRouter([
  {
    children: [homeRoute],
    path: "/",
  },
]);
