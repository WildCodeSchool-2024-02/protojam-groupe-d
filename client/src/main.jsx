import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConsoProvider } from "./contexts/ConsoContext";

import App from "./App";
import HomePage from "./pages/HomePage";
import RoomDetails from "./components/RoomDetails";
import Historique from "./pages/Historique";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/room/:id",
        element: <RoomDetails />,
      },
      {
        path: "/historique",
        element: <Historique />,
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ConsoProvider>
      <RouterProvider router={router} />
    </ConsoProvider>
  </React.StrictMode>
);
