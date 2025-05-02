import {
    createBrowserRouter,
  } from "react-router";

  import Layouts from './../Layouts/Layouts';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Layouts,
    }
]);