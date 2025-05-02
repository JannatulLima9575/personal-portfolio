import {
    createBrowserRouter,
  } from "react-router";

  import Layouts from './../Layouts/Layouts';
import Home from "../Pages/Home";
import About from './../Pages/About';
import Contact from './../Pages/Contact';
import Project from './../Pages/Project';
import Skills from './../Pages/Skills';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
        {
            path: "/",
            Component: Home,
        },
        {
            path: "/about",
            Component: About,
        },
        {
            path: "/contact",
            Component: Contact,
        },
        {
            path: "/project",
            Component: Project,
        },
        {
            path: "/skills",
            Component: Skills,
        },
    ]
},
]);