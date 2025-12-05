
import { useEffect } from "react";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact ";
import Footer from "./footer";
import Header from "./header";
import './Home.css';
import devvideo from '../static/video/developer.mp4';

export default function Home() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const hero = document.querySelector('.home-hero-content');
    if (hero) hero.classList.add('visible');

    const sections = document.querySelectorAll(".home-fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>

      <Header scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <div className="home-hero-container" id="home">

        {/* Video Background */}
        <video className="home-hero-video" autoPlay loop muted playsInline>
          <source src={devvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>



        {/* Hero Content */}
        <div className="home-hero-content">
          <span className="home-badge">Professional Business Solutions</span>
          <h1>
            Next-Gen Web Apps <br />
            <span className="home-highlight">Infotech Service </span>
          </h1>
          <p>
            We transform ideas into exceptional digital experiences.
            Partner with us to elevate your business to new heights.
          </p>

          <div className="home-buttons">
            <button className="home-btn primary" onClick={() => scrollToSection("contact")}>Get Started →</button>
            <button className="home-btn outline" onClick={() => scrollToSection("services")}>View Our Work</button>
          </div>
        </div>

        {/* Scroll Icon */}
        <button className="home-scroll-icon" onClick={() => scrollToSection("about")}>🖱</button>
      </div>

      {/* Sections */}
      <div id="about" className="home-section home-fade-in"><About /></div>
      <div id="services" className="home-section home-fade-in"><Services /></div>
      <div id="testimonials" className="home-section home-fade-in"><Testimonials /></div>
      <div id="contact" className="home-section home-fade-in"><Contact /></div>

      <Footer />
    </>
  );
}
