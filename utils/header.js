import { openLink, scrollTo } from "./methods";

const header = {
  menus: [
    { title: "Home", id: "home" },
    { title: "About Us", id: "certifications" },
    { title: "Offers", id: "offer" },
    { title: "FAQ's", id: "faq" },
    { title: "Vip Slots", id: "vip" },
  ],
  rightBtn: {
    label: "Download App",
    onClick: () => openLink(""),
  },
  logo: {
    src: "/assets/bg.png",
    alt: "",
  },
  handleIconClick: () => scrollTo("home"),
  handleItemSelect: (menu) => scrollTo(menu.id),
};

export default header;
