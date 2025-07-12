import { useState, useEffect, useRef } from 'react';
import styles from './EmailPopup.module.css';

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const totalSlots = 1000;
  const availableSlots = 750;
  const popupRef = useRef(null);

  // Handle outside clicks
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
        setEmail('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setEmail('');
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* Tooltip */}
      <div className={`${styles.tooltip} ${isOpen || isInputFocused ? styles.tooltipHidden : styles.tooltipVisible}`}>
        <span>Join now! Only {availableSlots} slots left!</span>
        <div className={styles.tooltipArrow} />
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.button} ${isOpen ? styles.buttonActive : ''}`}
        aria-label="Open email registration"
      >
        <svg
          className={styles.icon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </button>

      {/* Popup Box */}
      {isOpen && (
        <div ref={popupRef} className={`${styles.popup} ${styles.popupOpen}`}>
          <h3 className={styles.title}>Register Your Email</h3>
          <div className={styles.slots}>
            <span>Total Slots: {totalSlots}</span>
            <span>Available Slots: {availableSlots}</span>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              placeholder="Enter your email"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.submit}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}