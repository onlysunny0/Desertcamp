import React from 'react'
import './Facilities.css'
import Plx from "react-plx";

function Facilities() {
    const facilities = [
        {
          start: "self",
          duration: "150vh",
          properties: [
            {
              startValue: 500, 
              endValue: -500,
              property: "translateX",
            },
          ],
        },
      ];
  return (
    <>
    <div className='Facilities'>
        <h2>Our Facilities </h2>
      <div className="f-slider">
        <Plx className="f-inner" parallaxData={facilities}>
                    <h4>Rooms</h4>
                    <img src="./camp1.jpg" alt="" />
                    
        </Plx>
        <Plx className="f-inner" parallaxData={facilities}>
                    <h4>Camps</h4>
                    <img src="./camp2.jpg" alt="" />
                    
        </Plx>
        <Plx className="f-inner" parallaxData={facilities}>
                    <h4>Parking</h4>
                    <img src="./camp3.jpg" alt="" />
                    
        </Plx>
      </div>
    </div>

    <div className="dummy"></div>
    </>

  )
}

export default Facilities
