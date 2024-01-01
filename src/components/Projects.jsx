import React, { useState, useEffect } from "react";

const pagination = ["src/assets/pagination/pagination1.png"];
const phonebook = ["src/assets/phonebook/phonebook.png"];
const shiftbid = ["src/assets/shiftbid/shiftbid.png"];
const snake = ["src/assets/snake/snake.png"];
const todo = ["src/assets/todo/todo.png"];
const aptsImageUrls = ["src/assets/apts.png"];
const linksImageUrls = ["src/assets/links/links.png"];
const notesImageUrls = ["src/assets/notes/notes.png"];

const blogsImageUrls = [
  "src/assets/blogs/blogs1.png",
  "src/assets/blogs/blogs2.png",
  "src/assets/blogs/blogs3.png",
  "src/assets/blogs/blogs4.png",
  "src/assets/blogs/blogs5.png",
];
const finhubImageUrls = [
  "src/assets/finhub/finhub1.png",
  "src/assets/finhub/finhub2.png",
  "src/assets/finhub/finhub3.png",
  "src/assets/finhub/finhub5.png",
  "src/assets/finhub/finhub6.png",
  "src/assets/finhub/finhub7.png",
  "src/assets/finhub/finhub8.png",
];
const inflationImageUrls = [
  "src/assets/inflationCalculator/calculator1.png",
  "src/assets/inflationCalculator/calculator2.png",
];
const libraryImageUrls = [
  "src/assets/library/library1.png",
  "src/assets/library/library2.png",
  "src/assets/library/library3.png",
  "src/assets/library/library4.png",
  "src/assets/library/library5.png",
];

const mealsImageUrls = [
  "src/assets/meals/meals1.png",
  "src/assets/meals/meals2.png",
  "src/assets/meals/meals3.png",
];

const oldfinhubImageUrls = [
  "src/assets/oldfinhub/oldfinhub1.png",
  "src/assets/oldfinhub/oldfinhub2.png",
  "src/assets/oldfinhub/oldfinhub3.png",
  "src/assets/oldfinhub/oldfinhub4.png",
  "src/assets/oldfinhub/oldfinhub5.png",
  "src/assets/oldfinhub/oldfinhub6.png",
];
const oldPortfolioImageUrls = [
  "src/assets/oldportfolio/portfolio1.png",
  "src/assets/oldportfolio/portfolio2.png",
];

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
            alt="Zwitter / Twitter Clone Project Image"
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
            src={finhubImageUrls[0]}
            alt="Finhub / Google Finance Clone Project Image"
            className="project-image"
          />

          <div className="project-description">
            <h3>Finhub</h3>
            <p>Project description goes here.</p>
            <p>Technologies: React, TypeScript, ReCharts, Node.js, MongoDB</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src={blogsImageUrls[0]}
            alt="Blogs Application Project Image"
            className="project-image"
          />

          <div className="project-description">
            <h3>Blogs Web App</h3>
            <p>Project description goes here.</p>
            <p>Technologies: React, Node.js, MongoDB</p>
          </div>
        </div>
      </div>
      <div className="projects-row">
        <div className="project-card">
          <img
            src={libraryImageUrls[0]}
            alt="Library Application Project Image"
            className="project-image"
          />
          {/* Project Description */}
          <div className="project-description">
            <h3>Library Web App</h3>
            <p>Project description goes here.</p>
            <p>Technologies: React, Node.js, MongoDB</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src={oldPortfolioImageUrls[0]}
            alt="Old Portfolio Website Project Image"
            className="project-image"
          />

          <div className="project-description">
            <h3>Old Portfolio Website</h3>
            <p>Project description goes here.</p>
            <p>Technologies: React, Framer Motion, SCSS, Sanity</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src={inflationImageUrls[0]}
            alt="Inflation Calculator Web App Project Image"
            className="project-image"
          />

          <div className="project-description">
            <h3>Inflation Calculator</h3>
            <p>Project description goes here.</p>
            <p>Technologies: React, Node.js, MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
