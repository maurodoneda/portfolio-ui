import React from 'react';
import {createRoot} from 'react-dom/client';
import { Router, RouterProvider } from 'react-router-dom';
import { router } from './router/Routes';

const rootElement = document.getElementById("root") as HTMLElement;

const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <RouterProvider router = {router}/>
    </React.StrictMode>
);

