import { useEffect, useState } from "react";
import "./App.css";
import BackgroundAnimation from "./components/BackgroundAnimation";
import {
  FaGithub,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaFileAlt,
  FaLinkedin,
} from "react-icons/fa";
import HeadingAnimation from "./components/HeadingAnimation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Set the page as loaded after a short delay (adjust as needed)
    const timeoutId = setTimeout(() => {
      setPageLoaded(true);
    }, 500);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div>
        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li className="nav-item">
              <a href="#home">
                <FaHome /> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about">
                <FaUser /> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects">
                <FaProjectDiagram /> Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact">
                <FaEnvelope /> Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume">
                <FaFileAlt /> Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <BackgroundAnimation />
          <div className="main-content">
            <div className={`heading ${isPageLoaded ? "fade-in" : ""}`}>
              <HeadingAnimation />
            </div>
            <div>
              <Projects />
            </div>
            <div>
              <div role="heading">Skills</div>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
