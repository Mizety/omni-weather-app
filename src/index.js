import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootLayout from "./layouts/RootLayout";
import Dashboard, { loader as dashLoader } from "./pages/Dashboard";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SearchWeather from "./pages/SearchWeather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/search",
        element: <SearchWeather />,
        errorElement: <ErrorPage />,
      },
      {
        path: "city/:query",
        element: <Dashboard />,
        loader: dashLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
