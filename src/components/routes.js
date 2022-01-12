import React from "react";
import { MainPage } from "./MainPage";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { AddUser } from "./AddUser";
import { EditUser } from "./EditUser";

export const getRoutes = () => [
  {
    path: "/",
    element: <Home />,
    name: "home",
    children: [
      { index: true, element: <MainPage />, name: "main-page" },
      { path: "/add-user", element: <AddUser />, name: "add-user" },
      { path: "/edit-user/:id", element: <EditUser />, name: "edit-user" },
    ],
  },
  { path: "/*", element: <NotFound /> },
];
