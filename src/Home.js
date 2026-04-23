
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
