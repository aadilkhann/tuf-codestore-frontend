import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Input from "./Components/Input";
import Output from "./Components/Output";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Input />,
  },
  {
    path: "/output",
    element: <Output />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
