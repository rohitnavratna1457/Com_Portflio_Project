import React, { useEffect, useState } from "react";
import "./header.css";

export default function Header({ scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);

      // AUTO CLOSE MENU ON SCROLL
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]); // Watch menuOpen state

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (section) => {
    scrollToSection(section);
    setMenuOpen(false); // Close menu on click
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Infotech Service</div>

      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li><button onClick={() => handleClick("home")}>Home</button></li>
        <li><button onClick={() => handleClick("about")}>About</button></li>
        <li><button onClick={() => handleClick("services")}>Services</button></li>
        <li><button onClick={() => handleClick("testimonials")}>Testimonials</button></li>
        <li><button onClick={() => handleClick("contact")}>Contact</button></li>
      </ul>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
