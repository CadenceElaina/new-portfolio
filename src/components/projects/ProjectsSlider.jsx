import React, { useState, useEffect } from "react";
import { projects } from "./ProjectsData";
import "./projects.css";
const ProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentIndex];

  useEffect(() => {
    let intervalId;

    if (isHovered) {
      // Start looping through images of the hovered project
      intervalId = setInterval(() => {
        setHoveredIndex(
          (prevIndex) => (prevIndex + 1) % projects[currentIndex].images.length
        );
      }, 1500); // Adjust the interval as needed
    } else {
      // Clear interval when not hovering
      clearInterval(intervalId);
    }

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [isHovered, currentIndex]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredIndex(0); // Reset the index when not hovering
  };

  return (
    <div className="projects-slider">
      <div className="project-card">
        <img
          src={
            isHovered
              ? currentProject.images[hoveredIndex]
              : currentProject.images[0]
          }
          alt={currentProject.alt}
          className="project-image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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