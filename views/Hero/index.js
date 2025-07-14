import React, { useState, useEffect } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase";
import AOS from "aos";
import "aos/dist/aos.css";

const heroData = {
  heading: "Transform Your Farming with Fasal360",
  ctaLabel: "Join Now for Exclusive Benefits!",
  modalTitle: "Unlock Exclusive Fasal360 Benefits Now!",
  modalDescription:
    "Join the Fasal360 community to access AI-driven tools, real-time weather updates, and daily agricultural insights. Enter your email to claim your VIP perks and elevate your farming today!",
  totalSlots: 1000,
};

const Hero = ({ data = heroData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [bookedSlots, setBookedSlots] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false, // Replay animations on every scroll
      mirror: false,
    });
    // Force AOS refresh on mount to ensure visibility
    AOS.refreshHard();

    const unsubscribe = onSnapshot(collection(db, "userEmails"), (snapshot) => {
      setBookedSlots(snapshot.docs.length);
    });
    return () => {
      unsubscribe();
      AOS.refresh();
    };
  }, []);

  const availableSlots = data.totalSlots - bookedSlots;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  const handleEmailSubmit = async () => {
    try {
      await addDoc(collection(db, "userEmails"), {
        email: email,
        timestamp: new Date(),
      });
      handleCloseModal();
    } catch (error) {
      console.error("Error adding email to Firebase:", error);
    }
  };

  return (
    <div className="ai-hero">
      <div className="ai-hero-top-background" />
      <div className="ai-hero-container">
        <div className="ai-hero-item" data-aos="fade-up">
          <div className="ai-item-body">
            <h1
              className="ai-item-title slide-in"
              style={{ animationDelay: "0s" }}
            >
              {data.heading}
            </h1>
            <button
              className="ai-hero-cta slide-in"
              onClick={handleOpenModal}
              style={{ animationDelay: "0.2s" }}
            >
              {data.ctaLabel}
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="ai-hero-modal-backdrop slide-in"
          onClick={handleCloseModal}
        >
          <div
            className="ai-hero-modal slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="ai-item-title">{data.modalTitle}</h2>
            <p className="ai-item-platform">
              Hurry! Only {availableSlots} of {data.totalSlots} VIP Slots
              Remain!
            </p>
            <p className="ai-item-description">{data.modalDescription}</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email for VIP Access"
              className="ai-hero-modal-input"
            />
            <div className="ai-hero-modal-buttons">
              <button
                className="ai-hero-modal-cancel"
                onClick={handleCloseModal}
              >
                Not Now
              </button>
              <button
                className="ai-hero-modal-submit"
                onClick={handleEmailSubmit}
                disabled={!email}
              >
                Claim My VIP Access!
              </button>
            </div>
            <p className="ai-item-description">
              Submit your email to unlock premium farming tools instantly!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
