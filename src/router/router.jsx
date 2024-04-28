import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AllItems from "../pages/AllItems";
import AddItem from "../pages/AddItem";
import MyItems from "../pages/MyItems";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ViewDetails from "../components/ViewDetails";
import DataUpdate from "../pages/DataUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/art&craft"),
      },
      {
        path: "/allitems",
        element: <AllItems></AllItems>,
        loader: () => fetch("http://localhost:5000/art&craft"),
      },
      {
        path: "/addItme",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/myItemList",
        element: (
          <PrivateRoute>
            <MyItems></MyItems>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/art&craft/id/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <DataUpdate></DataUpdate>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/art&craft/id/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
