import React, { useState, useEffect } from "react";

const zwitterImageUrls = [
  "src/assets/zwitter/zwitter1.1.png",
  "src/assets/zwitter/zwitter1.2.png",
  "src/assets/zwitter/zwitter1.3.png",
  "src/assets/zwitter/zwitter1.4.png",
];

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    // Start the image transition when the user hovers over the image
    const intervalId = setInterval(() => {
      if (isHovered) {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % zwitterImageUrls.length
        );
      }
    }, 1750); // You can adjust the transition duration here (in milliseconds)

    // Save the interval ID to clear it later
    return () => clearInterval(intervalId);
  }, [isHovered]);

  const currentImage = zwitterImageUrls[currentImageIndex];
  console.log(currentImage);
  return (
    <div className="projects">
      <div role="heading" className="projects-heading">
        Projects
      </div>
      <div className="projects-row">
        <div className="project-card">
          <img
            src={currentImage}
            alt="Project Image"
            className={`project-image ${isHovered ? "hovered" : ""}`}
            onMouseOver={handleImageHover}
            onMouseLeave={handleImageLeave}
          />
          <div className="project-description">
            <h3>Project Title</h3>
            <p>Project description goes here.</p>
            <p>Technologies: React, Node.js, MongoDB</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src="https://placekitten.com/300/300"
            alt="Project Image"
            className="project-image"
          />

          <div className="project-description">
            <h3>Project Title</h3>
            <p>Project description goes here.</p>
            <p>Technologies: React, Node.js, MongoDB</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src="https://placekitten.com/300/300"
            alt="Project Image"
            className="project-image"
          />

          <div className="project-description">
            <h3>Project Title</h3>
            <p>Project description goes here.</p>
            <p>Technologies: React, Node.js, MongoDB</p>
          </div>
        </div>
      </div>
      <div className="projects-row">
        <div className="project-card">
          <img
            src="https://placekitten.com/300/300"
            alt="Project Image"
            className="project-image"
          />
          {/* Project Description */}
          <div className="project-description">
            <h3>Project Title</h3>
            <p>Project description goes here.</p>
            <p>Technologies: React, Node.js, MongoDB</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src="https://placekitten.com/300/300"
            alt="Project Image"
            className="project-image"
          />

          <div className="project-description">
            <h3>Project Title</h3>
            <p>Project description goes here.</p>
            <p>Technologies: React, Node.js, MongoDB</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src="https://placekitten.com/300/300"
            alt="Project Image"
            className="project-image"
          />

          <div className="project-description">
            <h3>Project Title</h3>
            <p>Project description goes here.</p>
            <p>Technologies: React, Node.js, MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
