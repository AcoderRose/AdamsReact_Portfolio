import React from "react";
import "../styles/style.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <div className="coming-soon">
        <img
          src="/images/Coming-Soon-Graphic.png"
          alt="Coming Soon"
          className="coming-soon-image"
        />
        <p>My resume is coming soon!</p>
      </div>
    </div>
  );
}

export default Resume;
