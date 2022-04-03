import React from "react";
import Typewriter from "typewriter-effect";
import './index.css';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "React Developer",
          "Competitive Programmer",
          "Cricketer",
          "Explorer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;