import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-icon">📚</span> Open-Notes.Dev
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to={"/Open-Notes"}>Home</Link>
            </li>
            <li>
              <Link to={"/Open-Notes"}>Subjects</Link>
            </li>
            <li>
              <Link to={"mission/"}>About</Link>
            </li>
            <li>
              <Link to={"/Open-Notes"}>Feedback</Link>
            </li>
          </ul>
        </nav>
        <button className="menu-toggle">☰</button> {/* For mobile menu */}
      </div>
    </header>
  );
};

export default Header;
