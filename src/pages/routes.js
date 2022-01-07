import React from "react";
import { MainPage } from "./MainPage";
import { Home } from "./Home";
import { NotFound } from "./NotFound";

export const getRoutes = () => {
  return [
    {
      path: "/",
      element: <Home />,
      name: "home",
      children: [{ index: true, element: <MainPage />, name: "main-page" }],
    },
    { path: "/*", element: <NotFound /> },
  ];
};
