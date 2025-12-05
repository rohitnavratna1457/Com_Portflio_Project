import React, { useState } from "react";
import "./Contact.css";
import { UserDataPost } from "../Api/CoreApi";
import { message } from "antd";

import { GrMapLocation } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await UserDataPost(formData); // ✔ Correct usage
      console.log("Success:", response);

      message.success({
        content: "🎉 Message Sent Successfully!",
        duration: 3,
        style: {
          marginTop: "10vh",
        },
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message!");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__subtitle">
          Ready to start your project? Contact us today and let's discuss how we
          can help your business grow.
        </p>

        {/* Contact Info Cards */}
        <div className="contact__cards">
          <div className="contact__card">
            <div className="contact__icon">< FaPhoneVolume /></div>
            <h3 className="contact__card-title">Phone</h3>
            <p className="contact__card-info">+91 8962813719</p>
          </div>

          <div className="contact__card">
            <div className="contact__icon">< TfiEmail /></div>
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-info">infotechcareer@gmail.com</p>
          </div>

          <div className="contact__card">
            <div className="contact__icon">< GrMapLocation /></div>
            <h3 className="contact__card-title">Location</h3>
            <p className="contact__card-info">Bangalore, Karnataka</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__row">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Your Mobile Number"
            required
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            maxLength="10"
          />

          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="contact__button">
            Send Message
          </button>
        </form>
      </div>

      <br />
      <br />
      <br />
      <hr />
    </section>
  );
}
