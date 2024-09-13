import './App.css'
import Home from './components/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login'
import Register from './components/register/Register';
import Confirmation from './components/confirmation/Comfirmation';
import Aboutus from './components/aboutus/Aboutus';
import Camp from './components/CampingTents/Camp';
import Room from './components/DeluxRoom/Room';
import Gallery from './components/Gallery/Gallery';
import Event1 from './components/Event/Event1';
import Event2 from './components/Event/Event2';
import Activity from './components/Activity/Activity';
import { useEffect, useState } from 'react';



function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/Aboutus",
      element: <Aboutus/>,
    },
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/confirmation",
      element: <Confirmation/>,
    },
    {
      path: "/CampingTents",
      element: <Camp/>,
    },
    {
      path: "/DeluxeRoom",
      element: <Room/>,
    },
    {
      path: "/Gallery",
      element: <Gallery/>,
    },
    {
      path: "/Corporate-Events",
      element: <Event1/>,
    },
    {
      path: "/Private-Events",
      element: <Event2/>,
    },
    {
      path: "/Activites",
      element: <Activity/>,
    },    
  ]);



  const [message, setMessage] = useState("");


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
