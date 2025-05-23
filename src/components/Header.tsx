const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-icon">📚</span> LearnHub
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#subjects">Subjects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#feedback">Feedback</a>
            </li>
          </ul>
        </nav>
        <button className="menu-toggle">☰</button> {/* For mobile menu */}
      </div>
    </header>
  );
};

export default Header;
