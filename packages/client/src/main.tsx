import "./styles/globals.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { routerClient } from "./router";

const rootElement = document.querySelector("#root");
console.debug(rootElement);

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={routerClient} />
    </React.StrictMode>
  );
} else console.error("root element not found");
