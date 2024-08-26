import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-icons">
          <a
            href="https://github.com/AcoderRose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adam-rosenberg-8213a4a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://stackoverflow.com/users/27031950/adam-r"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow />
          </a>
          <a href="mailto:rosencloud@icloud.com">
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
