function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#home" className="logo">Raghav</a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;