import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/style.css";

// Navigation items with their corresponding paths and labels
const navigationItems = [
  { path: "/About", label: "About Me" },
  { path: "/Contact", label: "Contact" },
  { path: "/Portfolio", label: "Portfolio" },
  { path: "/Resume", label: "Resume" },
];

// Navigation component
function Navigation() {
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      {navigationItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
        >
          {label}
        </NavLink>
      ))}
    </Nav>
  );
}

export default Navigation;
