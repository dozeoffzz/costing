import Banner from "../components/Banner";
import NewEyewear from "../components/NewEyewear";
import Collaboration from "../components/Collaboration";
import Products from "../components/Products";
import About from "../components/About";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import LogoLine from "../assets/icons/LogoLine.svg";

const Section = styled.section`
  min-height: 100vh;

  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

const LogoLineBox = styled.img`
  height: 100px;
  width: 100%;
  background-color: transparent;
`;
export default function MainPage() {
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
