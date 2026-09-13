import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  ["Home", "#home"],
  ["Technologies", "#technologies"],
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container container">
        <button
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <a className="brand" href="#home" aria-label="Dev Stack home">
          <img src="/assets/logo-text.png" alt="Dev Stack" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map(([label, href]) => (
            <a key={label} className={label === "Home" ? "active" : ""} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="auth-buttons">
          <button type="button" className="sign-in">Sign In</button>
          <button type="button" className="sign-up">Sign Up</button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation">
          {NAV_LINKS.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
