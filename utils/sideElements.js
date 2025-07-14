import { openLink } from "./methods";

const handleIconClick = (icon) => {
  const links = {
    github: "",
    instagram:
      "https://www.instagram.com/fasal360_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    twitter: "https://www.facebook.com/people/Fasal360/61578398211918/",
    linkedin: "https://www.linkedin.com/company/108191981",
  };
  openLink(links[icon]);
};

const sideElements = {
  emailButton: {
    label: "support@fasal360.com",
    onClick: () => openLink(""),
  },
  handleIconClick,
};

export default sideElements;
