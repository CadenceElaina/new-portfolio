import React from "react";
import Skills from "../Skills";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <section>
        <p>
          Welcome to my portfolio! I am a dedicated and passionate full stack
          web developer. My journey began in high school, where I immersed
          myself in C++ and explored the world of JavaScript through Khan
          Academy's courses.
        </p>
        <p>
          I took a Java course at USC Columbia and completed a web development
          course at Midlands Technical College. I utilized online resources like
          freeCodeCamp and Full-Stack open https://fullstackopen.com/en/ to
          continue my development. I applied my knowledge to build several
          full-stack web applications. Currently enrolled at UNCC Charlotte for
          Computer Science, I am continually seeking opportunities to enhance my
          understanding and tackle new challenges in the ever-evolving landscape
          of technology. I enjoy solving problems with code and learning new
          things.
        </p>
      </section>
      <Skills />
    </div>
  );
};

export default About;
