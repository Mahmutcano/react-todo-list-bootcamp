import React from 'react'
import { useRoutes } from "react-router-dom";
import Main from './pages/Main';
import Login from './pages/Login';

export default function App() {
    const routes = useRoutes([
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]);
    return routes;
  }
