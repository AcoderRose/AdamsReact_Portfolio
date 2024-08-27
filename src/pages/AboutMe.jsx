import "../styles/style.css";

// Main component for the About section
export default function About() {
  // Content for the About section
  const profileImageSrc = "./public/images/profilePicture2.JPEG";
  const profileImageAlt = "Self portrait";
  const aboutTitle = "About Me:";
  const aboutParagraphs = [
    "Hi, I'm Adam! I'm a budding full-stack developer currently honing my skills through UCI's rigorous coding bootcamp. Fueled by an insatiable curiosity and a deep passion for problem-solving, I take great pride in blending creativity with technical expertise to craft seamless and impactful full-stack applications that truly make a difference. My journey in coding has been a thrilling adventure, constantly pushing me to learn and grow, while my love for challenges keeps me engaged every step of the way. When I’m not immersed in code, you’ll likely find me enjoying the thrill of football, basketball, or baseball. As a proud LA native, my loyalty to the Lakers runs deep—I never miss a game and am always ready to cheer them on, win or lose. Staying active is a big part of my life; I’m an avid gym-goer, and I believe that maintaining physical fitness is crucial not only for my body but also for keeping my mind sharp and focused. Beyond the world of technology, I cherish the time spent with my dog, Laila, whose playful energy brings endless joy to my days. Being a loyal uncle is a role I hold close to my heart, adding a special dimension to my life and reminding me of the importance of family, balance, and the simple pleasures that make life meaningful.",
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
          <h1 id="h1bigger">{aboutTitle}</h1>
          {aboutParagraphs.map((paragraph, index) => (
            <p id="paragraph" key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
