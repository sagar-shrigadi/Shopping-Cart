import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Routes } from "./Routes.jsx";

const router = createBrowserRouter(Routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
