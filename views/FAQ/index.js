import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = {
  faqHeading: "Frequently Asked Questions about Fasal360",
  faqList: [
    {
      size: 1,
      question: "What makes your farming solutions sustainable?",
      description:
        "Fasal360 promotes sustainability by leveraging AI to optimize resource use, such as water and fertilizers, reducing waste and environmental impact. Our solutions encourage eco-friendly practices like precision farming and organic pest control, ensuring long-term soil health and productivity.",
    },
    {
      size: 1,
      question: "Do you offer services for small-scale farmers?",
      description:
        "Absolutely, Fasal360 is designed to support farmers of all scales, including small-scale farmers. Our affordable tools, such as seed quality analysis and localized weather forecasts, empower small farms to boost yields and make data-driven decisions without high costs.",
    },
    {
      size: 1,
      question: "How does your smart irrigation system work?",
      description:
        "Fasal360’s smart irrigation system uses AI to monitor soil moisture, weather data, and crop needs in real-time. It automatically adjusts water delivery to optimize usage, saving water and ensuring crops receive precise irrigation for maximum growth.",
    },
    {
      size: 1,
      question: "Can I transition to organic farming with your help?",
      description:
        "Yes, Fasal360 supports transitions to organic farming with tailored crop management plans, including organic pest control and soil health monitoring. Our AI tools guide you through sustainable practices to meet organic certification standards.",
    },
    {
      size: 1,
      question: "What if I need technical support?",
      description:
        "Fasal360 offers 24/7 technical support through our dedicated helpdesk, accessible via the platform or mobile app. Our team provides prompt assistance for any issues, ensuring seamless use of our tools and services.",
    },
  ],
};

const ViewsTitle = ({
  text = "",
  textClassName = "",
  lineClassName = "",
  containerClassName = "",
}) => {
  return (
    <div
      data-aos="zoom-in-right"
      className={`ai-views-title-container ${containerClassName}`}
    >
      <div className={`ai-views-title-text ${textClassName}`}>{text}</div>
      <div className="ai-views-title-line-container">
        <div className={`ai-views-title-line ${lineClassName}`} />
      </div>
    </div>
  );
};

const FAQItem = ({
  question,
  platform,
  description,
  size,
  isOpen,
  toggleOpen,
}) => (
  <div
    className={`ai-faq-item-body p-4 ${
      size === 2 ? "flex flex-row gap-4 items-center" : "flex flex-col"
    } ${isOpen ? "open" : ""}`}
  >
    <div
      className="ai-faq-header flex flex-row items-center cursor-pointer"
      onClick={toggleOpen}
    >
      <div className="flex-1">
        <div className="ai-item-question">{question}</div>
        <div className="ai-item-platform">{platform}</div>
      </div>
      <div className="ai-faq-toggle">
        <span className={isOpen ? "rotate" : ""}>{isOpen ? "−" : "+"}</span>
      </div>
    </div>
    <div className={`ai-faq-description ${isOpen ? "open" : "closed"}`}>
      <div className="ai-item-description">{description}</div>
    </div>
  </div>
);

const FAQList = ({ list = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    AOS.refresh(); // Refresh AOS after toggle to ensure animations
  };

  return (
    <div className="ai-faq-list">
      {list.map((item, i) => (
        <div key={i} className="ai-faq-item my-2" data-aos="fade-up">
          <FAQItem
            {...item}
            isOpen={openIndex === i}
            toggleOpen={() => toggleOpen(i)}
          />
        </div>
      ))}
    </div>
  );
};

const FAQ = ({ data = faqData }) => {
  const { faqHeading, faqList } = data;

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
    <div className="ai-faq">
      <div className="container p-3">
        <div className="ai-faq-top-background" />
        <div className="ai-faq-container">
          <ViewsTitle text={faqHeading} containerClassName="mt-12" />
          <div>
            <FAQList list={faqList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
