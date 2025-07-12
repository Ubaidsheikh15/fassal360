import React, { useState } from "react";
import Gooery from "../../components/GooeryAnimation";
import DecryptText from "../../components/DecryptText";
import PropTypes from "prop-types";

const Outer = ({
  data: { title1, title2, decrypTexts, desciption, button },
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEmail(""); // Reset email input on close
  };

  const handleEmailSubmit = () => {
    // Placeholder for email submission logic
    console.log("Email submitted:", email);
    handleCloseDialog();
  };

  return (
    <div
      className="ai-outer"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="container">
        <div className="ai-outer-container d-flex justify-content-between align-items-center">
          <div className="ai-outer-text">
            <div
              className="ai-outer-heading"
       
            >
              {title1}
            </div>
            <div
              className="ai-outer-heading"

            >
              {title2}
            </div>
            <div className="ai-outer-heading2">
              <DecryptText values={decrypTexts} />
            </div>
            <div
              className="ai-outer-description"
              style={{ color: "#666", margin: "1rem 0" }}
            >
              {desciption}
            </div>
            <div className="ai-outer-contact">
            
              <button
                onClick={handleOpenDialog}
                className="ai-button"
                style={{
                  background: "linear-gradient(45deg, #88c932, #a8e050)",
                  color: "#fff",
                  padding: "14px 28px",
                  border: "none",
                  borderRadius: "25px",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 20px rgba(136, 201, 50, 0.5)",
                  animation: "pulse 1.8s infinite",
                }}
              >
                {button?.label || "Grab Your VIP Access Now – Don’t Wait!"}
              </button>
              <p
                style={{
                  color: "#666",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                  textAlign: "left",
                  maxWidth: "350px",
                }}
              >
                Instantly unlock premium features, exclusive rewards, and
                priority access with a single click!
              </p>
            </div>
          </div>
          <div className="ai-outer-gooery">
            <Gooery />
          </div>
        </div>
      </div>

      {/* Dialog Box with enhanced greedy text and email input */}
      {isDialogOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            animation: "fadeIn 0.3s ease-out",
          }}
          onClick={handleCloseDialog}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #88c932, #ffffff)",
              padding: "2.5rem",
              borderRadius: "20px",
              width: "90%",
              maxWidth: "450px",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
              transform: isDialogOpen ? "scale(1)" : "scale(0.8)",
              opacity: isDialogOpen ? 1 : 0,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                margin: "0 0 1.2rem",
                fontSize: "2rem",
                color: "#ffffff",
                textAlign: "center",
                fontWeight: "700",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
              }}
            >
              Seize Your Exclusive Offer Now!
            </h2>
            <p
              style={{
                color: "#ff4444",
                fontSize: "1rem",
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "1rem",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Hurry! Only 750 of 1000 VIP Slots Remain – Claim Yours!
            </p>
            <p
              style={{
                color: "#333",
                fontSize: "1.1rem",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Unlock a world of premium benefits, limited-time discounts, and
              elite community access. Enter your email to claim your VIP perks
              now!
            </p>
            <div
              style={{
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email for VIP Access"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "2px solid #88c932",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  color: "#333",
                  background: "#fff",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                  marginBottom: "0.5rem",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#a8e050")}
                onBlur={(e) => (e.target.style.borderColor = "#88c932")}
              />
           
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem",
              }}
            >
              <button
                onClick={handleCloseDialog}
                style={{
                  background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
                  color: "#88c932",
                  padding: "12px 24px",
                  border: "2px solid #88c932",
                  borderRadius: "20px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 10px rgba(136, 201, 50, 0.3)",
                }}
              >
                Pass on This Deal
              </button>
              <button
                onClick={handleEmailSubmit}
                disabled={!email}
                style={{
                  background: email
                    ? "linear-gradient(45deg, #88c932, #a8e050)"
                    : "linear-gradient(45deg, #ccc, #ddd)",
                  color: "#fff",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "20px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: email ? "pointer" : "not-allowed",
                  transition: "all 0.3s ease",
                  boxShadow: email
                    ? "0 2px 10px rgba(136, 201, 50, 0.3)"
                    : "none",
                }}
              >
                Send My VIP Invite Now!
              </button>
            </div>
            <p
              style={{
                color: "#666",
                fontSize: "0.9rem",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              Click to send your email and unlock your exclusive benefits
              instantly!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Inline CSS for animations
const styles = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

Outer.propTypes = {
  data: PropTypes.shape({
    title1: PropTypes.string,
    title2: PropTypes.string,
    decrypTexts: PropTypes.array,
    desciption: PropTypes.string,
    button: PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    }),
  }),
};

export default Outer;
