import React from "react";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    icon: "&#x3C;&#x2F;&#x3E;",
    title: "Web Development",
    description:
      "Responsive and scalable websites built using modern frameworks...",
    link: "#web-dev",
  },
  {
    id: 2,
    icon: "&#128396;",
    title: "UI/UX Design",
    description: "User-focused designs with smooth interactions...",
    link: "#ui-ux",
  },
  {
    id: 3,
    icon: "&#128241;",
    title: "Mobile Development",
    description: "Android & iOS applications using Flutter & React Native...",
    link: "#mobile-dev",
  },
 {
  id: 4,
  icon: "🤖",
  title: "AI Solutions",
  description: "AI automation, machine learning tools & smart business systems...",
  link: "#ai-solutions",
},

  {
    id: 5,
    icon: "&#9729;",
    title: "Cloud Solutions",
    description: "Deployment, hosting & cloud automation using AWS & Azure...",
    link: "#cloud-solutions",
  },
  {
    id: 6,
    icon: "&#128274;",
    title: "Security & Support",
    description: "24/7 monitoring, bug fixing & security patches...",
    link: "#security-support",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2>Our Developer Services</h2>
      <p>
        We provide end-to-end digital solutions that help businesses scale...
      </p>

      <div className="services-cards">
        {servicesData.map(({ id, icon, title, description, link }) => (
          <div key={id} className="service-card">
            <div className="icon" dangerouslySetInnerHTML={{ __html: icon }} />
            <h3>{title}</h3>
            <p>{description}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
}
