import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/skills",
        element: <h2>skills</h2>,
      },
      {
        path: "/work",
        element: <h2>work</h2>,
      },
      {
        path: "/contact",
        element: <h2>contact</h2>,
      },
    ],
  },
]);
