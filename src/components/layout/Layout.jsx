import React, { useState } from "react";
import About from "../about/About";
import Skills from "../Skills";
import Contact from "../contact/Contact";
import "./Layout.css";
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa";
import ProjectsSlider from "../projects/ProjectsSlider";

const Layout = () => {
  const [selectedSection, setSelectedSection] = useState("about");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const Nav = () => {
    return (
      <div className="layout-nav">
        <ul>
          <li className="nav-item" onClick={() => handleSectionChange("about")}>
            <FaUser /> About
          </li>
          <li
            className="nav-item"
            onClick={() => handleSectionChange("projects")}
          >
            <FaProjectDiagram /> Projects
          </li>
          <li
            className="nav-item"
            onClick={() => handleSectionChange("contact")}
          >
            <FaEnvelope /> Contact
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="app-container">
      <div className="container">
        <div className="heading">
          <h1>Cadence Burwell</h1>
          <p>Full Stack Web Developer</p>
          <Nav />
        </div>
        <div className="content-container">
          {selectedSection === "about" && <About />}
          {selectedSection === "projects" && <ProjectsSlider />}
          {selectedSection === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
