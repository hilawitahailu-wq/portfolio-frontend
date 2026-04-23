
import React from "react";

import "./About.css";


const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
       
        
       
          
          

      
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            My name is HilawitAssefa. I'm a Fullstack Developer based
            in Ethiopia and I'm very passionate and dedicated to my work.
            With 1 years of experience as a beginner Fullstack Developer,
            I have acquired the skills necessary to build great websites.
          </p>

          <div className="about-details">
            <div>
              <strong>Name:</strong> HilawitAssefa
            </div>
            <div>
              <strong>Phone:</strong> +25182622917
            </div>
            <div>
              <strong>Experience:</strong> 1Years
            </div>
           
            <div>
              <strong>Age:</strong> 21
            </div>
            <div>
              <strong>Address:</strong> Ethiopia,Adiss abeba
            </div>
            
           
          </div>

          <a href="
          /cv2.pdf" className="btn" download>
            Download CV
          </a>
        </div>                                                     
      </div>
    </section>
  );
};

export default About;

