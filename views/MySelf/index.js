
import React from "react";
import PropTypes from "prop-types";
import HoverImage from "../../components/HoverImage";
import ViewsTitle from "../../components/ViewsTitle";
import Helm from "../../components/SVGs/Helm";
import { useParallax } from "react-scroll-parallax";
import { FaLeaf, FaTractor, FaChartLine, FaGlobe, FaSeedling, FaTools } from "react-icons/fa";

// Fassal 360 data object
const fassal360 = {
  heading: "Fassal 360 - Empowering Agriculture Through Innovation",
  paragraphs: [
    "Welcome to Fassal 360, revolutionizing agriculture with innovative tools for productivity and sustainability.",
    "Our mission is to empower farmers with data analytics, IoT, and AI for precision agriculture.",
    "A 360-degree platform bridging traditional farming with modern tech, offering soil monitoring and crop management.",
    "Serving a global community, our solutions reduce waste and promote eco-friendly farming practices.",
    "We innovate to tackle challenges like weather and market fluctuations, keeping farmers ahead.",
    "Join us to redefine agriculture with cutting-edge technology for a sustainable future.",
  ],
  techList1: [
    "Crop Production",
    "Horticulture",
    "Animal Husbandry",
    "Dairy Farming",
    "Poultry Farming",
    "Aquaculture",
  ],
  techList2: [
    "Agroforestry",
    "Soil Science",
    "Agricultural Engineering",
    "Organic Farming",
    "Agri-Business",
    "Precision Farming",
  ],
  image: "/assets/logoLightbg.png",
};

// Paragraph component with icon
const Paragraph = ({ text, icon: Icon }) => (
  <div data-aos="zoom-in-left" className="ai-myself-paragraph d-flex align-items-center">
    {Icon && <Icon className="me-2 text-success" size={24} />}
    <span>{text}</span>
  </div>
);

// List component with icons
const List = ({ items, icon: Icon }) => (
  <div className="col">
    {(items || []).map((item, index) => (
      <div
        data-aos="zoom-in-left"
        className="ai-myself-skill d-flex align-items-center"
        key={index}
      >
        {Icon && <Icon className="me-2 text-primary" size={20} />}
        <span>{item}</span>
      </div>
    ))}
  </div>
);

// ListParent for two-column lists
const ListParent = ({ list1, list2 }) => (
  <div className="ai-myself-list-parent row mt-4">
    <List items={list1} icon={FaSeedling} />
    <List items={list2} icon={FaTools} />
  </div>
);

const MySelf = () => {
  const { ref } = useParallax({
    speed: -20,
    easing: [1, 1.5, 0.5, 2],
    rotate: [0, 360 * 1],
  });

  // Map icons to paragraphs for visual enhancement
  const paragraphIcons = [FaLeaf, FaTractor, FaChartLine, FaGlobe, FaSeedling, FaTools];

  // Use fassal360 directly
  const { heading, paragraphs, techList1, techList2, image } = fassal360;

  return (
    <div className="ai-myself py-5">
      <div ref={ref} className="ai-myself-settings-icon">
        <Helm />
      </div>
      <div className="container">
        <div data-aos="fade-down-left" className="ai-myself-container">
          <ViewsTitle text={heading} />
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="mb-4">
                {(paragraphs || []).map((text, i) => (
                  <Paragraph key={i} text={text} icon={paragraphIcons[i % paragraphIcons.length]} />
                ))}
                <ListParent list1={techList1} list2={techList2} />
              </div>
            </div>
            <div className="col-12 col-md-4 mt-5 mt-md-0">
              <div
                data-aos="zoom-in-right"
                className="ai-myself-profile-wrapper d-flex justify-content-center"
              >
                <HoverImage
                  showFilter
                  showBorder
                  imageClassName="ai-myself-profile"
                  parentClassName="ai-myself-profile-parent"
                  src={image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes are optional since we're not passing props anymore
MySelf.propTypes = {};

export default MySelf;
