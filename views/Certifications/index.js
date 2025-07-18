import React from "react";
import Image from "next/image";

const certificationsData = {
  heading: "Why Choose Fasal360?",
  list: [
    {
      size: 1,
      title: "Daily News",
      date: "Stay updated with the latest agricultural news and insights to make informed decisions.",
      image: "/assets/pic5.png",
      aos: "zoom-out-left",
    },
    {
      size: 2,
      title: "Seed Checker",
      date: "Analyze seed quality with AI-driven tools to ensure optimal planting and maximize crop yield potential.",
      image: "/assets/pic1.png",
      aos: "zoom-out-right",
    },
    {
      size: 2,
      title: "Weather Forecast with Farmer Insights",
      date: "Accurate weather predictions using farmer-contributed data for informed agricultural planning.",
      image: "/assets/pic4.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "Crop Solution",
      date: "Customized crop management solutions to boost growth, prevent diseases, and enhance harvest quality.",
      image: "/assets/pic2.png",
      aos: "zoom-out-right",
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

const Items = ({ list = [] }) => (
  <div className="row">
    {list.map((item, i) => (
      <div
        data-aos={item.aos}
        key={i}
        className={`ai-certifications-item m-0 p-1 col-12 col-lg-${
          item.size * 4
        }`}
      >
        <SingleItem {...item} className="ai-item-body" />
      </div>
    ))}
  </div>
);

const Certifications = ({ data = certificationsData }) => {
  const { heading, list } = data;
  return (
    <div className="ai-certifications">
      <div className="container p-3">
        <div className="ai-certifications-top-background" />
        <div className="ai-certifications-container">
          <ViewsTitle text={heading} />
          <div>
            <Items list={list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
