import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React.",
      github: "https://github.com/yourname/portfolio",
      demo: "#",
    },
    {
      title: "digital menu",
      description: "simple cafe menu by html and css.",
      github: "https://github.com/yourname/counter-app",
      demo: "#",
    },
    {
      title: "Gym website",
      description: "designed to represent afitness center.",
      github: "https://github.com/yourname/greeting-app",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
             
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;