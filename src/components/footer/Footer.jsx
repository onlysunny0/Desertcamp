import React from 'react'
import './Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="footfilter">
      <div className="upperfoot">
          <img src="./logo.png" alt="" />
          <p>Welcome to desertcamping.ae! We’re an online camping store based in the UAE, and we’re passionate about bringing you unique and stylish products that are perfect for your desert camping adventures. </p>
      </div>
      <div className="donwfoot">
          <ul>
            <h2>Contact</h2>
            <li><FaLocationDot /> <a href="#">United Arab Emirates</a></li>
            <li><IoMailSharp /> <a href="#">example@email.com</a></li>
            <li><IoCallSharp /> <a href="#">+971 123456789</a></li>
            <li><FaWhatsapp /> <a href="#">+971 123456789</a></li>
          </ul>
          <ul>
            <h2>Rooms</h2>
            <li><a href="#">Camping Tents</a></li>
            <li><a href="#">Deluxe Room</a></li>
          </ul>
          <ul>
            <h2>Events</h2>
            <li><a href="#">Corporate Events</a></li>
            <li><a href="#">Private Events</a></li>
          </ul>
          <ul>
            <h2>Company</h2>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
          </ul>
      </div>
      <div className="copright">
        <p>Copyright © 2024 Desert Camping, All rights reserved</p>
      </div>
      </div>
    </footer>






 
  )
}

export default Footer
