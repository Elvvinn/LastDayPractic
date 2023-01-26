import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddPage from "../Pages/Add/add";
import DetailPage from "../Pages/Detail/detail";
import HomePage from "../Pages/Home/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/add",
        element: <AddPage />,
    },
    {
        path: "/detail/:_id",
        element: <DetailPage />,
    },
]);


export default router