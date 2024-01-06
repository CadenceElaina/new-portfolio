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
import Skills from "./components/Skills";
import ProjectsSlider from "./components/projects/ProjectsSlider";
import Contact from "./components/contact/Contact";
import Layout from "./components/layout/Layout";

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
      <BackgroundAnimation />
      <Layout />
    </>
  );
}

export default App;
