import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import { Outlet } from "react-router-dom";




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './component/ErrorPage';
import News from './component/News';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <News  key = "general" pageSize = "8" country = "in" category = "general"/>,
      },
      {
        path: "business",
        element: <News key = "business" pageSize = "8" country = "in" category = "business"/>,
      },
      {
        path: "entertainment",
        element: <News key = "entertainment" pageSize = "8" country = "in" category = "entertainment"/>,
      },
      {
        path: "sports",
        element: <News key = "sports" pageSize = "8" country = "in" category = "sports"/>,
      },
      {
        path: "health",
        element: <News key = "health" pageSize = "8" country = "in" category = "health"/>,
      },
      {
        path: "technology",
        element: <News key = "technology" pageSiz  e = "8" country = "in" category = "technology"/>,
        
      },
    ],  
  },  
]);


export default class App extends Component {

  render() {
    return (
      <div>
      <RouterProvider router={router} />       
      </div>

    )
  }
}