import React from "react";
import { HomePage } from "./features/home/HomePage";
import { TopBar } from "./features/topbar/TopBar";

export const App = () => {
    return (
        <div>
            <TopBar/>
            <HomePage/>
        </div>
    );
}