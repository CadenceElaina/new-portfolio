import React from "react";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaFileCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiJest,
  SiMongodb,
  SiSqlite,
  SiExpress,
  SiCypress,
} from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import octopusIcon from "../../public/assets/octopus-64x64.png";
const skillsData = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "JestJS", icon: <SiJest /> },
  {
    name: "React-Testing-Library",
    icon: <img src={octopusIcon} alt="Octopus Icon" />,
  },
  { name: "Cypress", icon: <SiCypress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL", icon: <TbFileTypeSql /> },
  { name: "Git", icon: <FaGit /> },
];

const Skills = () => {
  return (
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <div key={index} className="skill-card">
          <div className="skill-icon">{skill.icon}</div>
          <div className="skill-text">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
