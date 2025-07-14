import { openLink, scrollTo } from "./methods";

const header = {
  menus: [
    { title: "Home", id: "home" },
    { title: "Empowering", id: "my-self" },
    // { title: "Initiatives", id: "experience" },
    { title: "Wisdom", id: "reviews" },
    { title: "", id: "" },
    { title: "", id: "" },
    { title: "", id: "" },
    { title: "", id: "" },
  ],
  rightBtn: {
    label: "Download App",
    onClick: () => openLink(""),
  },
  logo: {
    src: "/assets/logoLightbg.png",
    alt: "",
  },
  handleIconClick: () => scrollTo("home"),
  handleItemSelect: (menu) => scrollTo(menu.id),
};

export default header;
// import { openLink, scrollTo } from "./methods";

// const header = {
//     menus: [
//         { title: 'Home', id: 'home' },
//         { title: 'My Self', id: 'my-self' },
//         { title: 'Experience', id: 'experience' },
//         { title: 'My Work', id: 'my-work' },
//         { title: 'Reviews', id: 'reviews' },
//         { title: 'Certifications', id: 'certifications' },
//         { title: 'Contribution', id: 'contributions' },
//         { title: 'Contact', id: 'contact' },
//     ],
//     rightBtn: {
//         label: 'Download App',
//         onClick: () => openLink('')
//     },
//     logo: {
//         src: '/assets/logoLightbg.png',
//         alt: ''
//     },
//     handleIconClick: () => scrollTo('home'),
//     handleItemSelect: (menu) => scrollTo(menu.id),
// }

// export default header
