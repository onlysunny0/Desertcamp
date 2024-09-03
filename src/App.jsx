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
    
    
    
    
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
