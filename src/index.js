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
import Footer from "./Pages/Footer";
import Register from "./Pages/Register.jsx";
import AddFood from "./Components/AddFood";
import NotLogin from "./Pages/NotLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: localStorage.getItem("token") ? <Home /> : <Login />,
      },
      {
        path: "/recipe",
        element: localStorage.getItem("token") ? <Recipes /> : <NotLogin />,
      },
      {
        path: "/all-users",
        element: localStorage.getItem("token") ? <User /> : <NotLogin />,
      },
      {
        path: "/details/:foodID",
        element: localStorage.getItem("token") ? <Details /> : <NotLogin />,
      },
      {
        path: "/add-food",
        element: localStorage.getItem("token") ? <AddFood /> : <NotLogin />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/",
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
