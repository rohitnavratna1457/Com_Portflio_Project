// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";
// import "./footer.css";
// import { EmailDataPost } from "../Api/CoreApi";

// export default function Footer() {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = async (e) => {
//     e.preventDefault();

//     const values = {
//       email: email,
//     };

//     console.log(values);

//     const response = await EmailDataPost(values);

//     if (response) {
//       alert("Subscribed successfully!");
//       setEmail("");
//     } else {
//       alert("Subscription failed!");
//     }
//   };

//   return (
//     <footer className="footer">
//       <div className="footer__container">
//         {/* About */}
//         <div className="footer__section">
//           <h3 className="footer__logo">TechPortfolio</h3>
//           <p>
//             Empowering your digital dreams with innovative solutions and
//             exceptional design.
//           </p>

//           <div className="footer__socials">
//             <a href="#" aria-label="Facebook">
//               <FaFacebookF />
//             </a>
//             <a href="#" aria-label="Twitter">
//               <FaTwitter />
//             </a>
//             <a href="#" aria-label="LinkedIn">
//               <FaLinkedinIn />
//             </a>
//             <a href="#" aria-label="Instagram">
//               <FaInstagram />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="footer__section">
//           <h4>Quick Links</h4>
//           <ul>
//             <li>
//               <a href="#home">Home</a>
//             </li>
//             <li>
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="#services">Services</a>
//             </li>
//             <li>
//               <a href="#portfolio">Portfolio</a>
//             </li>
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div className="footer__section">
//           <h4>Services</h4>
//           <ul>
//             <li>
//               <a href="#">Web Development</a>
//             </li>
//             <li>
//               <a href="#">UI/UX Design</a>
//             </li>
//             <li>
//               <a href="#">SEO Optimization</a>
//             </li>
//             <li>
//               <a href="#">Digital Marketing</a>
//             </li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div className="footer__section">
//           <h4>Subscribe</h4>
//           <p>Get the latest updates and offers.</p>

//           <form className="footer__form" onSubmit={handleSubscribe}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button type="submit">Subscribe</button>
//           </form>
//         </div>
//       </div>

//       <div className="footer__bottom">
//         © 2025 TechPortfolio. All rights reserved.
//       </div>
//     </footer>
//   );
// }



import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./footer.css";
import { EmailDataPost } from "../Api/CoreApi";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // message text
  const [status, setStatus] = useState("");   // 'success' or 'error'

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await EmailDataPost({ email });

      if (response) {
        setMessage("🎉 Subscribed successfully!");
        setStatus("success");
        setEmail("");
      } else {
        setMessage("⚠️ Subscription failed. Try again!");
        setStatus("error");
      }
    } catch (err) {
      setMessage("⚠️ Something went wrong. Try again!");
      setStatus("error");
    }

    // Hide message after 4 seconds
    setTimeout(() => {
      setMessage("");
      setStatus("");
    }, 4000);
  };

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* About Section */}
        <div className="footer__section">
          <h3 className="footer__logo">TechPortfolio</h3>
          <p>
            Empowering your digital dreams with innovative solutions and exceptional design.
          </p>

          <div className="footer__socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer__section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Cloud Solutions</a></li>
            <li><a href="#">Mobile Development</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__section">
          <h4>Subscribe</h4>
          <p>Get the latest updates and offers.</p>

          <form className="footer__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>

          {/* Success/Error Message */}
          {message && (
            <p className={`footer__message ${status}`}>
              {message}
            </p>
          )}
        </div>
      </div>

      <div className="footer__bottom">
        © 2025 Infotech Service. All rights reserved.
      </div>
    </footer>
  );
}
