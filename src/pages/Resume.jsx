function Resume() {
  // front-end skills
  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Web APIs",
    "OOP",
    "React",
  ];

  // back-end skills
  const backEndSkills = ["Express", "SQL", "ORM", "MVC", "NoSQL", "PWA"];

  const h2Style = {
    color: "#474a56",
  };

  return (
    <div className="resume-container">
      <h1 id="bigger">Resume</h1>
      <div className="skills-container">
        <section className="skills-section">
          <h2 class="skills" style={h2Style}>
            Front-End Skills
          </h2>
          <ul>
            {frontEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
        <section className="skills-section">
          <h2 class="skills" style={h2Style}>
            Back-End Skills
          </h2>
          <ul>
            {backEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className="coming-soon">
        <a href="/images/AdamsReact_Portfolio-Downloadable-Resume.pdf" download>
          <p>Click here to view my downloadable Resume!</p>
          <img
            src="/images/Screenshot-Resume.png"
            alt="Photo of my resume"
            className="coming-soon-image"
          />
        </a>
      </div>
    </div>
  );
}

export default Resume;
