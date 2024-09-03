import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="Testimonials">
      <div>
        <h2>
          <div className="headingline2"></div> 
            Testimonials
          <div className="headingline2"></div>
        </h2>
        <h3>What They Say</h3>

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner test-slider">
            <div className="carousel-item active">
              <p class="d-block w-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae, eius totam voluptate accusantium fuga tenetur corporis dolor beatae molestias illum ipsum repellendus, optio natus, laudantium nemo facere aut. Exercitationem?</p>
              <h5>Raja Hindustani</h5>
              <h6>India</h6>
            </div>
            <div className="carousel-item">
              <p class="d-block w-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam nam quaerat! Neque molestiae blanditiis animi sunt architecto, illo assumenda cum quo quaerat non tempore voluptas ea provident accusantium corporis?</p>
              <h5>James Bond</h5>
              <h6>USA</h6>
            </div>
            <div className="carousel-item">
              <p class="d-block w-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis ex vitae, expedita sunt id sequi ipsum quam tempora veniam voluptatum sit quibusdam omnis ducimus optio, molestias voluptate doloribus explicabo.</p>
              <h5>habibi</h5>
              <h6>Dubai</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
