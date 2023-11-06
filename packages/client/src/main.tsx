import "./styles/globals.scss";

import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.querySelector("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <div>hello world</div>
    </React.StrictMode>
  );
} else console.error("root element not found");
