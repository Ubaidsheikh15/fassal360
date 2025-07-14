import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const offerData = {
  offerHeading: "What We Offer",
  offerList: [
    {
      size: 1,
      title: "Daily Agri News",
      date: "Stay updated with the latest agricultural news and insights to make informed decisions.",
      image: "/assets/pic5.png",
      aos: "fade-up",
    },
    {
      size: 1,
      title: "Seed Checker",
      date: "Analyze seed quality with AI-driven tools to ensure optimal planting and maximize crop yield potential.",
      image: "/assets/pic1.png",
      aos: "fade-up",
    },
    {
      size: 1,
      title: "Crop Solution",
      date: "Customized crop management solutions to boost growth, prevent diseases, and enhance harvest quality.",
      image: "/assets/pic2.png",
      aos: "fade-up",
    },
    {
      size: 1,
      title: "Weather Forecast with Farmer Insights",
      date: "Accurate weather predictions using farmer-contributed data for informed agricultural planning.",
      image: "/assets/pic4.png",
      aos: "fade-up",
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

const SingleItem = ({ image, title, platform, date, size, className }) => (
  <div
    className={`p-4 ${className || "ai-item-body"} ${
      size === 2 ? "flex flex-row gap-4 items-center" : "flex flex-col"
    }`}
    data-aos="fade-up"
  >
    {size === 2 ? (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "70%", display: "flex", flexDirection: "column" }}>
          <div className="ai-item-title">{title}</div>
          <div className="ai-item-platform">{platform}</div>
          <div className="ai-item-description">{date}</div>
        </div>
        <div className="ai-item-logo">
          <Image
            src={image}
            alt={title}
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
    ) : (
      <>
        <div className="ai-item-head">
          <div className="ai-item-logo">
            <Image
              src={image}
              alt={title}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="ai-item-title">{title}</div>
          <div className="ai-item-platform">{platform}</div>
          <div className="ai-item-description">{date}</div>
        </div>
      </>
    )}
  </div>
);

const OfferSlider = ({ list = [] }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false, // Allow animations to replay on every scroll
      mirror: false,
    });
    // Force AOS refresh on mount to ensure visibility
    AOS.refreshHard();
    return () => AOS.refresh();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    afterChange: () => {
      AOS.refresh(); // Refresh AOS after slide change
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ai-offer-slider" data-aos="fade-up">
      <Slider ref={sliderRef} {...settings}>
        {list.map((item, i) => (
          <div key={i} className="px-2">
            <SingleItem {...item} className="ai-offer-item-body" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Offer = ({ data = offerData }) => {
  const { offerHeading, offerList } = data;
  return (
    <div className="ai-certifications">
      <div className="container p-3">
        <div className="ai-certifications-top-background" />
        <div className="ai-certifications-container">
          <ViewsTitle text={offerHeading} containerClassName="mt-12" />
          <div>
            <OfferSlider list={offerList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
