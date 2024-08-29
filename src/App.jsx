import './App.css'
import Home from './components/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login'



function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/Login",
      element: <Login/>,
    },
    
    
    
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
