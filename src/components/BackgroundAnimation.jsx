import React from "react";
import "../App.css";

const BackgroundAnimation = () => {
  return (
    <div className="background-animation">
      <div className="background-animation-inner"></div>

      {Array.from({ length: 242 }, (_, index) => (
        <div key={index} className="square"></div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;
