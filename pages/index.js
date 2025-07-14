import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "../views/Contact";
import FullPageScroll from "../components/FullPageScroll";
import Header from "../components/Header";
import MapsContribution from "../views/MapsContribution";
import MySelf from "../views/MySelf";
import Outer from "../views/Outer";
import Projects from "../views/Projects";
import Reviews from "../views/Reviews";
import SideElements from "../components/SideElements";
import TopScrolledBar from "../components/TopScrolledBar";
import Works from "../views/Works";
import {
  contact,
  graphics,
  header,
  mapsContribution,
  mySelf,
  outer,
  projects,
  reviews,
  works,
} from "../utils";
import sideElements from "../utils/sideElements";
import Cursor from "../components/Cursor";
import PreLoader from "../components/PreLoader";
import Certifications from "../views/Certifications";
import { certifications } from "../views/Certifications"; // Import certifications data
import WaterMark from "../components/WaterMark";
import EmailPopup from "../utils/EmailPopup";
import Offer from "../views/Offer";
import { offerData } from "../views/Offer";
import FAQ from "../views/FAQ";
import { faqData } from "../views/FAQ";
import Hero from "../views/Hero";
import { heroData } from "../views/Hero";
import Footer from "../views/Footer";

const ViewElement = ({ children, id }) => (
  <div id={id} className="view-element">
    {children}
  </div>
);

export async function getStaticProps() {
  return {
    props: {}, // Add static data here if needed
  };
}

export default function Home() {
  return (
    <>
      <Cursor />
      <ParallaxProvider>
        <TopScrolledBar />
        <FullPageScroll />
        <Header data={header} />
        <SideElements data={sideElements} />
        <ViewElement id="home">
          <Outer data={outer} />
        </ViewElement>
        <ViewElement id="certifications">
          <Certifications data={certifications} />
        </ViewElement>{" "}
        <ViewElement id="offer">
          <Offer data={offerData} />
        </ViewElement>{" "}
        <ViewElement id="faq">
          <FAQ data={faqData} />
        </ViewElement>{" "}
        <ViewElement id="vip">
          <Hero data={heroData} />
        </ViewElement>{" "}
        <ViewElement id="footer">
          <Footer />
        </ViewElement>
        <EmailPopup />
      </ParallaxProvider>
    </>
  );
}
