import React from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./features/home/HomePage";
import { router } from "./router/Routes";

export const App = () => {
    return (
        <HomePage/>
    );
}