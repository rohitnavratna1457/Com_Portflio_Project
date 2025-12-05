import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Partnering with this team was a turning point for our business. Their strategic approach and flawless execution accelerated our growth beyond expectations.",
      name: "Narayan",
      title: "Founder & CEO",
      // img: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 2,
      text: "Highly professional with a solid understanding of technical and business needs. Their solutions improved the system and enhanced the user experience.",
      name: "Rohit Navratna",
      title: "Software Engineer",
      // img: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 3,
      text: "Their innovative ideas and digital transformation expertise helped us scale faster. Highly reliable team with strong execution capability.",
      name: " Nilkamal",
      title: "Software Engineer",
      // img: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 4,
      text: "A dedicated and result-driven team. Their solutions boosted our revenue growth and strengthened our market presence. Truly recommended!",
      name: " Tikesh Nishad ",
      title: "Software Engineer",
      // img: "https://i.pravatar.cc/100?img=12",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="testimonials__title">Client Testimonials</h2>
        <p className="testimonials__subtitle">
          What our respected leaders say about us — Their words inspire our
          journey.
        </p>

        <div className="testimonials__cards">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial__card fadeUpAnim">
              <div className="testimonial__quote">❝</div>
              <p className="testimonial__text">"{t.text}"</p>

              <div className="testimonial__profile">
                {/* <img src={t.img} alt={t.name} /> */}
                <div>
                  <h4 className="testimonial__name">{t.name}</h4>
                  <span className="testimonial__title">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
