import { FaGithub } from "react-icons/fa";
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
          <a href="mailto:rosencloud@icloud.com">
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
