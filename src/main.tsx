import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home} from './pages/Home'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './styles/global.css'
import { Todo } from './pages/Todo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },  {
    path: "/Todo",
    element: <Todo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
