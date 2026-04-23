
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "../../src/About";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>

      <Navbar />

   
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;