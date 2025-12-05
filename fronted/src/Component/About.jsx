import React from "react";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h2>Who We Are</h2>
          <p>
            We are a digital transformation & software development company
            helping businesses scale faster with modern technology, automation
            and innovation.
          </p>
        </div>

        <div className="about-content">
          {/* Left Side Content */}
          <div className="about-text">
            <h3>We Build Solutions That Empower Businesses</h3>

            <p>
              Our goal is to simplify technology adoption by building scalable,
              secure, and high-performing digital products. From web
              applications to enterprise solutions, we deliver software that
              solves real business challenges and enhances workflow efficiency.
            </p>

            <p>
              With a skilled development team and a product-first mindset, we
              ensure seamless execution at every stage — strategy, design,
              development, testing, deployment & ongoing support. We work
              closely with clients to understand business needs and convert
              ideas into powerful digital solutions.
            </p>

            <p>
              Our approach focuses on innovation, user experience, and long-term
              sustainability. Whether it’s automation, performance optimization,
              or digital transformation, we create systems that are built for
              growth and future scalability.
            </p>

            <p>
              We take pride in delivering quality products with transparency,
              communication, and timely execution. Our goal is not just to build
              solutions — but to become a reliable technology partner for your
              success.
            </p>

            <ul className="about-points">
              <li>🚀 High-performance application & product development</li>
              <li>🤝 Long-term partnership, consulting & dedicated support</li>
              <li>
                🔐 Security-first architecture with scalable infrastructure
              </li>
              <li>🎨 Clean UI/UX with modern & intuitive design patterns</li>
              <li>⚙ Automation-driven solutions to boost work efficiency</li>
              <li>📈 Data-driven decision making & business analytics</li>
            </ul>
          </div>

          {/* Right Side Mission | Vision | Values */}
          <div className="about-cards">
            <div className="card">
              <span className="icon">
                <FaBullseye />
              </span>
              <h4>Our Mission</h4>
              <p>
                Empower businesses through digital innovation, automation and
                impactful software solutions that enhance growth, efficiency &
                user experience.
              </p>
            </div>

            <div className="card">
              <span className="icon">
                <FaEye />
              </span>
              <h4>Our Vision</h4>
              <p>
                Becoming a globally trusted technology partner delivering smart,
                scalable, and future-ready solutions to enterprises worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
