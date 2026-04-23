/*import { useState } from "react";
    import profileImg from './assets/profile.jpg';

import "./Home.css";



function Home() {
  const [greeting, setGreeting] = useState("Welcome to my portfolio!");

  const handleClick = () => {
    setGreeting("Hi there! Thanks for visiting 😊");
  };

  return (
    <section className="home-container" id="home">
  
      <h1>Hilawit Assefa</h1>
      <p>Frontend Developer | React Enthusiast</p>
      <p className="greeting">{greeting}</p>
      <button onClick={handleClick}>Click Me!</button>
      <div>
     
        
      

<img src={profileImg} alt="Profile" className="profile-img" />
        
      </div>
    </section>
  );
}*/

//export default Home;//
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-overlay"></div>

      <div className="home-content">
        <div className="profile-img">
          <img src="/profile1.jpg" alt="Profile" className="profile-img" />
        </div>

        <h1>
          Hilawit <span>Assefa</span>
        </h1>

        <p>A Creative designer & Fullstack Developer</p>

        <div className="scroll-down">Scroll Down</div>
      </div>
    </section>
  );
};

export default Home;