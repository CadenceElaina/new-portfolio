import React from "react";
import Skills from "../Skills";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about-container">
      <section>
        <div className="about-text">
          <h3>Welcome to my portfolio!</h3>
          <p>
            I build responsive full-stack web applications. I completed a Java
            course at USC Columbia and a web development course at Midlands
            Technical College. I've utilized online resources like{" "}
            <Link to={"https://www.freecodecamp.org/learn"}>freeCodeCamp</Link>{" "}
            and <Link to={"https://fullstackopen.com/en"}>Full-Stack open</Link>{" "}
            to continue my development. Currently enrolled at UNCC Charlotte for
            Computer Science, I am continually seeking opportunities to enhance
            my understanding and tackle new challenges in the ever-evolving
            landscape of technology. I enjoy solving problems with code and
            learning new things. Thanks for visiting!
          </p>
        </div>
      </section>
      <Skills />
    </div>
  );
};

export default About;
