import Banner from "../components/Banner";
import NewEyewear from "../components/NewEyewear";
import Collaboration from "../components/Collaboration";
import Products from "../components/Products";
import About from "../components/About";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import LogoLine from "../assets/icons/LogoLine.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Section = styled.section`
  /* min-height: 100vh; */

  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

const LogoLineBox = styled.img`
  height: 100px;
  width: 100%;
  background-color: transparent;
`;
export default function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location.hash]);
  return (
    <>
      <Section id="banner">
        <Banner />
      </Section>
      <LogoLineBox src={LogoLine} />
      <Section id="new">
        <NewEyewear />
      </Section>
      <LogoLineBox src={LogoLine} />
      <Section id="collaboration">
        <Collaboration />
      </Section>
      <LogoLineBox src={LogoLine} />
      <Section id="products">
        <Products />
      </Section>
      <LogoLineBox src={LogoLine} />
      <Section id="about">
        <About />
        <LogoLineBox src={LogoLine} />
        <Footer />
      </Section>
    </>
  );
}
