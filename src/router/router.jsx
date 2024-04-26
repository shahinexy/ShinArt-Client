import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AllItems from "../pages/AllItems";
import AddItem from "../pages/AddItem";
import MyItems from "../pages/MyItems";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allitems',
            element: <AllItems></AllItems>
        },
        {
            path: '/addItme',
            element: <AddItem></AddItem>
        },
        {
            path: '/myItemList',
            element: <MyItems></MyItems>
        }
    ]
  },
]);

export default router;