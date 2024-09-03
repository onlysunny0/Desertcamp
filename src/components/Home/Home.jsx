import React from 'react'
import Nav from '../Nav/Nav'
import Hero2 from '../Hero2/Hero2'
import About from '../About/About'
import Book from '../Booking/Book'
import Facilities from '../Facilities/Facilities'
import Footer from '../footer/Footer'
import Faq from '../Faq/Faq'
import Contact from '../Contact/Contact'
import Testimonials from '../Testimonials/Testimonials'


function Home() {
  return (
    <>
     <Nav/>
     <Hero2/>
     <About/>
     <Book/>
     <Facilities/>
     <Faq/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home
