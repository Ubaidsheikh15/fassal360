import { openLink } from "./methods";

const outer = {
  title1: `Cultivating Your Future,`,
  title2: "Harvest at a Time",
  decrypTexts: [
    "Empowering Farmers with Technology",
    "Cultivating a Sustainable Future",
    "Innovating Agriculture at Fassal 360",
    "Growing Prosperity for Farmers",
    "Bridging Tech and Farming",
    "Harvesting Solutions for Tomorrow",
  ],
  desciption: `Fasal 360 is an innovative platform empowering farmers with cutting-edge web solutions, driving sustainable agriculture and prosperity through technology.`,
  button: {
    label: "Hurry up, Join now !",
    onClick: () => openLink("mailto:afzalimdad9@gmail.com?subject=Hello"),
  },
};

export default outer;
