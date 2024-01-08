import React, { useState, useEffect } from "react";
import { projects } from "./ProjectsData";
import "./projects.css";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
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
      }, 1000); // Adjust the interval as needed
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
      <div className="projects-slider-inner">
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

          <div className="project-info">
            <div className="project-heading">
              <h3>{currentProject.title}</h3>
            </div>
            <div className="project-links">
              <div className="tooltip">
                <Link to={`${currentProject.link}`}>
                  <FiExternalLink />
                  Demo
                  <span className="tooltiptext">
                    Projects that use Render may take over a minute to load
                  </span>
                </Link>
              </div>
              <Link to={`${currentProject.github}`}>
                <FaGithub />
                Github
              </Link>
            </div>
            <div className="project-description">
              <p>{currentProject.description}</p>
              <p>Technologies: {currentProject.technologies}</p>
            </div>
          </div>
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
