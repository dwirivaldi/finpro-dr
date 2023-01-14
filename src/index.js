import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import Recipes from "./Pages/Recipes";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Details from "./Pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/home",
        element: localStorage.getItem("token") ? <Home /> : <Login />,
      },
      {
        path: "/recipe",
        element: localStorage.getItem("token") ? <Recipes /> : <Login />,
      },
      {
        path: "/all-users",
        element: localStorage.getItem("token") ? <User /> : <Login />,
      },
      {
        path: "/details/:foodID",
        element: localStorage.getItem("token") ? <Details /> : <Login />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
