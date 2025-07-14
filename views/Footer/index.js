import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../public/assets/bg.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const footerData = {
  aboutText:
    "Fasal 360 is an innovative platform empowering farmers with cutting-edge web solutions, driving sustainable agriculture and prosperity through technology.",
  quickLinks: [
    { title: "Home", id: "home" },
    { title: "About Us", id: "certifications" },
    { title: "Offers", id: "offer" },
    { title: "FAQ's", id: "faq" },
    { title: "Vip Slots", id: "vip" },
  ],
  supportLinks: [
    { title: "FAQ's", id: "faq" },
    { title: "Contact Us", id: "contact" },
    { title: "Help Center", id: "help" },
    { title: "Privacy Policy", id: "privacy" },
    { title: "Terms", id: "terms" },
  ],
  contactInfo: {
    email: "support@fasal360.com",
    // phone: "+1 (555) 123-4567",
    // location: "123 Farm Road, Agri City, USA",
  },
};

const Footer = ({ data = footerData }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false, // Replay animations on every scroll
      mirror: false,
    });
    // Force AOS refresh on mount to ensure visibility
    AOS.refreshHard();
    return () => AOS.refresh();
  }, []);

  return (
    <footer className="ai-footer">
      <div className="ai-footer-container" data-aos="fade-up">
        <div className="ai-footer-row">
          {/* Column 1: Logo and About */}
          <div className="ai-footer-col">
            <div className="ai-footer-logo">
              <Image src={logo} alt="Fasal360" />
            </div>
            <p className="ai-footer-text">{data.aboutText}</p>
            <div className="ai-footer-socials">
              <a
                href="https://www.facebook.com/people/Fasal360/61578398211918/"
                target="_blank"
                rel="noopener noreferrer"
                className="ai-footer-social-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/fasal360_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="ai-footer-social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/108191981"
                target="_blank"
                rel="noopener noreferrer"
                className="ai-footer-social-link"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="ai-footer-col">
            <h3 className="ai-footer-title">Quick Links</h3>
            <ul className="ai-footer-links">
              {data.quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="ai-footer-link">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          {/* <div className="ai-footer-col">
            <h3 className="ai-footer-title">Support</h3>
            <ul className="ai-footer-links">
              {data.supportLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="ai-footer-link">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Column 4: Contact Info */}
          <div className="ai-footer-col">
            <h3 className="ai-footer-title">Contact Info</h3>
            <div className="ai-footer-contact">
              <p className="ai-footer-contact-item">
                <FaEnvelope className="ai-footer-icon" />{" "}
                {data.contactInfo.email}
              </p>
              {/* <p className="ai-footer-contact-item">
                <FaPhone className="ai-footer-icon" /> {data.contactInfo.phone}
              </p>
              <p className="ai-footer-contact-item">
                <FaMapMarkerAlt className="ai-footer-icon" />{" "}
                {data.contactInfo.location}
              </p> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="ai-footer-divider"></div>

        {/* Row 2: Copyright */}
        <div className="ai-footer-copyright">
          <p className="ai-footer-copyright-text">
            © 2025 Fasal360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
