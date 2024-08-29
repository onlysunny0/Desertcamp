import React, { useState } from 'react'
import './Nav.css'
import { IoPerson } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import Login from '../Login/Login';
import { RxCross1 } from "react-icons/rx";
function Nav() {
    const [burgar , setburgar] = useState("hamburgar");
    const [menu , setMenu] = useState("closemenu");
    const [openshop, setOpenshop] = useState("dropdown-menu");
    const [openlogin, setOpenlogin] = useState("closelogin")

    function makecross(){
        if(burgar == "hamburgar"){
            setburgar("cross");
            setMenu("openmenu")
        }
        else{
            setburgar("hamburgar");
            setMenu("closemenu");
        }
    }
    function Openshop(){
        if (openshop == "dropdown-menu"){
            setOpenshop("openshop");
        }
        else{
            setOpenshop("dropdown-menu");
        }
    }
  return (
    <>
    <nav>
        <div className="left-nav">
            <div className={burgar} onClick={makecross} >
                <span></span><span></span><span></span>
            </div>
            <ul className={menu}>
                <li>
                    Home
                </li>
                <li className='dropdown'>
                    <li className='dropdown' onClick={Openshop}>Shop <FaAngleDown /></li>
                    <ul className={openshop}>
                        <li>Camping Tents</li>
                        <li>Camping Furniture</li>
                        <li>Camping Lights</li>
                        <li>Others</li>
                        <li>Sale</li>
                    </ul>
                </li>
                <li>
                    About Us
                </li>
                <li>
               Contact
                </li>
            </ul>   
        </div>
        <div className="center-nav-logo">
            <img src='./logo.png' alt="hiiiiiiiiii" />
        </div>
        <div className="right-nav">
            <ul>
                <li className='dropdown'>
                    Info Pages <FaAngleDown />
                    <ul className='dropdown-menu'>
                        <li>Privacy Policy</li>
                        <li>Delivaery|Shipping</li>
                        <li>Return|Exchange</li>
                        <li>Term and Conditions</li>
                    </ul>
                </li>
                <li  className='dropdown'>
                    Other <FaAngleDown />
                    <ul className='dropdown-menu'>
                        <li>My Account</li>
                        <li>Cart</li>
                        <li>Checkout</li>
                        <li>Wishlist</li>
                    </ul>
                </li>
            </ul>
            <div>
                <span><a href="#"><IoCallSharp /></a></span> <span onClick={()=>{setOpenlogin("openlogin")}} ><a href="#"><IoPerson /></a></span>
            </div>
        </div>
    </nav>
    <div className={openlogin}>
        <span onClick={()=>{setOpenlogin("closelogin")}}><RxCross1 /></span>   
        <Login/>
    </div>
    
    </>
  )
}

export default Nav
