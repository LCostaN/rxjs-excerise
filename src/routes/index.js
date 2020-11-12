import React from "react";
import Dashboard from "../containers/Dashboard";

export const routes = [
  {
    title: "Dashboard",
    path: "/",
    exact: true,
    component: () => <Dashboard />,
  },
];
