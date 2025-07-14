import { openLink } from "./methods";

const certifications = {
  heading: "Why Choose Fasal360?",
  list: [
    {
      size: 1,
      title: "Direct Marketplace",
      platform: "Fassal.ai",
      link: "https://fassal.ai/marketplace",
      date: "Connect farmers directly with buyers, eliminating middlemen and maximizing profits for both parties.",
      logo: "/assets/fassal-marketplace.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "Real-time Bidding",
      platform: "Fassal.ai",
      link: "https://fassal.ai/bidding",
      date: "Dynamic bidding system that ensures farmers get the best prices for their crops in real-time.",
      logo: "/assets/fassal-bidding.png",
      aos: "zoom-out-right",
    },
    {
      size: 1,
      title: "Crop Price Analytics",
      platform: "Fassal.ai",
      link: "https://fassal.ai/analytics",
      date: "Provides data-driven insights into crop prices, helping farmers make informed selling decisions.",
      logo: "/assets/fassal-analytics.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "Farmer Support Portal",
      platform: "Fassal.ai",
      link: "https://fassal.ai/support",
      date: "Offers dedicated support for farmers, including resources and assistance for platform usage.",
      logo: "/assets/fassal-support.png",
      aos: "zoom-out-right",
    },
    {
      size: 2,
      title: "AI-Powered Yield Prediction",
      platform: "Fassal.ai",
      link: "https://fassal.ai/yield-prediction",
      date: "Leverages AI to predict crop yields, enabling better planning and resource management.",
      logo: "/assets/fassal-ai.png",
      aos: "zoom-out-left",
    },
  ],
  handleIconClick: openLink,
};

export default certifications;