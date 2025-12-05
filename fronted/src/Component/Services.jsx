import React from "react";
import "./Services.css";
import { RiGlobalLine, RiRobot2Fill } from "react-icons/ri";
import { MdPhoneIphone, MdDesignServices } from "react-icons/md";
import { FaCloud, FaShieldAlt } from "react-icons/fa";

const servicesData = [
  { id: 1, icon: RiGlobalLine, title: "Web Development", description: "Responsive and scalable websites built using modern frameworks...", link: "#web-dev" },
  { id: 2, icon: MdDesignServices, title: "UI/UX Design", description: "User-focused designs with smooth interactions and prototypes...", link: "#ui-ux" },
  { id: 3, icon: MdPhoneIphone, title: "Mobile Development", description: "Android & iOS applications using Flutter & React Native...", link: "#mobile-dev" },
  { id: 4, icon: RiRobot2Fill, title: "AI Solutions", description: "AI automation, machine learning tools & smart business systems...", link: "#ai-solutions" },
  { id: 5, icon: FaCloud, title: "Cloud Solutions", description: "Deployment, hosting & cloud automation using AWS & Azure...", link: "#cloud-solutions" },
  { id: 6, icon: FaShieldAlt, title: "Security & Support", description: "24/7 monitoring, bug fixing & security patches...", link: "#security-support" },
];
export default function Services() {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>
      <p>We provide a wide range of solutions to help your business grow with technology and innovation.</p>

      <div className="services-cards">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <div className="service-card" key={service.id}>
              <div className="icon">
                <Icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="learn-more">Learn More →</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}