import "../styles/style.css";

// Main component for the About section
export default function About() {
  // Content for the About section
  const profileImageSrc = "/images/profilePicture.jpg";
  const profileImageAlt = "Self portrait";
  const aboutTitle = "About Me:";
  const aboutParagraphs = [
    "Hi, I'm Adam! I'm a budding full-stack developer currently honing my skills through UCI's coding bootcamp. I am driven by curiosity and a passion for problem-solving, I love combining creativity with technical expertise to craft seamless and impactful fullstack applications. When I am not coding, you'll likely find me immersed in football, basketball, or baseball. As a born and raised LA native, I am a diehard Lakers fan. I also stay active as an avid gym-goer and spend quality time playing with and walking my dog, Laila. Being a loyal uncle is a role I cherish, adding another dimension to my life outside of technology.",
  ];

  // Render the About component
  return (
    <div className="about-container page-container">
      <div className="about-content">
        {/* Section for profile image */}
        <div className="profile-image">
          <img
            src={profileImageSrc}
            alt={profileImageAlt}
            className="profile-img"
          />
        </div>

        {/* Section for about text */}
        <div className="about-text">
          <h1>{aboutTitle}</h1>
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
