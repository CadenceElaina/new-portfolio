import React from "react";
import { motion } from "framer-motion";

const HeadingAnimation = () => {
  const line1 = "Hello, I am Cadence";
  const line2 = "a full-stack web developer";

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h3
      className="load-screen-message"
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
    >
      {line1.split("").map((letter, index) => (
        <motion.span key={letter + "-" + index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
      <br />
      {line2.split("").map((letter, index) => (
        <motion.span key={letter + "-" + index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.h3>
  );
};

export default HeadingAnimation;
