import { createBrowserRouter } from "react-router-dom";

import { rootRoute } from "./routes/root.route";

export const routerClient = createBrowserRouter([
  {
    children: [rootRoute],
    path: "/",
  },
]);
