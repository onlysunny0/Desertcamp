import React from 'react'
import './Contact.css'
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

function Contact() {
  return (
    <>
    
    <div className='Contact'>
      <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227794.5002760221!2d75.78233203261718!3d26.8625555854683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db14b1bd30ba5%3A0x860e5d531eccb20c!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1725291095643!5m2!1sen!2sin" width={400} height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </div>
      <div className="contact-right">
        <h2>Contact Us <div className='headingline'></div></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quia voluptatum. Eveniet dolorem amet asperiores sit architecto vero impedit consequatur reprehenderit animi voluptatibus! Cumque, voluptate. Voluptates deleniti sint ab magni.</p>
        <form action="">
            <input  className="form-control" type="text" placeholder='Name' />
            <input  className="form-control" type="mail" placeholder='Email' />
            <textarea  className="form-control" name="msg" id="msg" placeholder='Write a message'></textarea>
            <button>Submit</button>
        </form>
      </div>
    </div>
    <div className="social">
      <p>Our Social media :</p>
      <span>
        <a href=""><FaWhatsapp /></a>
        <a href=""><FaInstagram /></a>
        <a href=""><FaXTwitter /></a>
        <a href=""><FaYoutube /></a>
      </span>
     
    </div>
    </>
  )
}

export default Contact
