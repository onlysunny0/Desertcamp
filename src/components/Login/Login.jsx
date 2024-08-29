import React from 'react'
import { RxCross1 } from "react-icons/rx";
import './Login.css'
import { NavLink } from 'react-router-dom';


function Login() {
  return (
    <div className='Login_page' >
      <div className="loginhead">
        <img src="./logo.png" alt="" />
        <span>
        <NavLink to={'..'}><RxCross1 /></NavLink> 
        </span>
      </div>

      <div className="loginmain">
        <div className="loginform">
            <form action="">
                <h2>Sign in</h2>
                <input type="mail" placeholder='Email'/>
                <input type="password" placeholder='Password' />
                <button>Sign in</button>
                <span>
                    <input type="checkbox" name='remember' />
                    <label htmlFor="remember">Remember me</label>
                    <a href="#">Forgot Password ?</a>
                </span>
                
            </form>
        </div>

        <div className="registerform">
          <h2>Create an account</h2>
          <p>If you don not yet have an RH account, please create one now so you can easily access your RH Members Program details and order information in My Account. </p>
          <button>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default Login
