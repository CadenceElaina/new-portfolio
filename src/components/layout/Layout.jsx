import React, { useState } from "react";
import About from "../about/About";
import Skills from "../Skills";
import Contact from "../contact/Contact";
import "./Layout.css";
import {
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import ProjectsSlider from "../projects/ProjectsSlider";
import { Link } from "react-router-dom";

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
          <li className="nav-item">
            <Link to={"https://github.com/CadenceElaina"}>
              <FaGithub /> Github
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"https://www.linkedin.com/in/cooper-burwell-674147195"}>
              <FaLinkedin />
              LinkedIn
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={
                "https://docs.google.com/document/d/1zksFP2wVczmwM9TSC9JXAXhsNNL1kz8p/edit?usp=sharing&ouid=116608798038618069913&rtpof=true&sd=true"
              }
            >
              <FaFileDownload />
              Resume
            </Link>
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
