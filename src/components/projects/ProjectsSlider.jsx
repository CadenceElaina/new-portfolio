import React, { useState } from "react";
import { projects } from "./ProjectsData";
import "./projects.css";
const ProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="projects-slider">
      <div className="project-card">
        <img
          src={currentProject.images[0]}
          alt={currentProject.alt}
          className="project-image"
        />

        <div className="project-description">
          <h3>{currentProject.title}</h3>
          <p>{currentProject.description}</p>
          <p>Technologies: {currentProject.technologies}</p>
        </div>
      </div>
      <button className="right-slider-button" onClick={handleNext}>
        Next
      </button>
      <button className="left-slider-button" onClick={handlePrev}>
        Previous
      </button>
    </div>
  );
};

export default ProjectsSlider;
