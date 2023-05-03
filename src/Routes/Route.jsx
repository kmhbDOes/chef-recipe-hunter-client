import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ChefRecipes from "../Card/ChefRecipes/ChefRecipes";
import Home from "../layout/Home";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      // {
      //   path: "/chefrecipe",
      //   element: <ChefRecipes></ChefRecipes>,
      // },
      {
        path: "chefrecipe/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
