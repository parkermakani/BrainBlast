import { Link } from "react-router-dom";
import "../styles/primitives.css";
import Menu from "./Menu";
import labubuLogo from "../assets/labubu.png";

export default function TopNav() {
  return (
    <header className="top-nav">
      <Menu>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-lg)",
          }}
        >
          <Link to="/">
            <img
              src={labubuLogo}
              alt="Logo"
              className="logo"
              style={{ height: "80px" }}
            />
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/syllabus">Syllabus</Link>
          </nav>
        </div>
      </Menu>
    </header>
  );
}
