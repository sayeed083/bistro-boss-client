import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu/Menu";
import Orders from "../Pages/Orders/Orders/Orders";
import Register from "../Pages/Register/Register";
import AllFoods from "../Pages/Shared/AllFoods/AllFoods";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path: "/order/:category",
          element: <Orders></Orders>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/allfoods",
          element: <PrivateRoute><AllFoods></AllFoods></PrivateRoute>

        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "mycart",
          element: <MyCart></MyCart>
        },
        {
          path: "allusers",
          element: <AllUsers></AllUsers>
        },
        {
          path: "addItem",
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: "manageItems",
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
      ]
    }
  ]);