import React from "react";
import "../styles/style.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1 class="blue">Resume</h1>
      <div className="coming-soon">
        <img
          src="./public/images/Coming-Soon-Graphic.jpg"
          alt="Coming Soon"
          className="coming-soon-image"
        />
        <p class="blue">My resume is coming soon!</p>
      </div>
    </div>
  );
}

export default Resume;
