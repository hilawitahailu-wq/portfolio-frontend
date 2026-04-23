import React from "react";
import "./Skill.css";

function Skill() {
  const skill = [
    "HTML",
    "CSS",
    "JavaScript",
    "Reactjs",
    "nodejs",
    "mongodb"
  ];

  return (
    <section className="skill" id="skill">
      <h2>My Skills</h2>

      <div className="skill-container">
        {skill.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;