import Project from "../components/project";
import "../styles/style.css";

// Data for each project in the portfolio
const projectData = [
  {
    title: "GameChaser",
    image: "/images/Screenshot-GameChaser.PNG",
    projectLink: "https://gamechaser-wlza.onrender.com/",
    githubLink: "https://github.com/haartmuhn/GameChaser",
  },
  {
    title: "StoryForge",
    image: "/images/Screenshot-StoryForge.png",
    projectLink: "https://jy8liu.github.io/UCI-Bootcamp-Project-1/",
    githubLink: "https://github.com/jy8liu/UCI-Bootcamp-Project-1",
  },
  {
    title: "Adams-Dev-Depot",
    image: "/images/Screenshot-Adams-Dev-Depot.png",
    projectLink: "https://acoderrose.github.io/Adams-Dev-Depot/",
    githubLink: "https://github.com/AcoderRose/Adams-Dev-Depot",
  },
  {
    title: "ScriptSaga",
    image: "/images/Screenshot-ScriptSaga.PNG",
    projectLink: "https://acoderrose.github.io/Script-Saga/",
    githubLink: "https://github.com/AcoderRose/Script-Saga",
  },
];

// Portfolio component definition
const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <h1 className="portfolioHeading">Portfolio</h1>
      <div className="portfolioGrid">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
