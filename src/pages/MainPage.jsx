import Banner from "../components/Banner";
import NewEyewear from "../components/NewEyewear";
import Collaboration from "../components/Collaboration";
import Products from "../components/Products";
import About from "../components/About";
import styled from "@emotion/styled";
import Footer from "../components/Footer";

const Section = styled.section`
  min-height: 100vh;

  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
export default function MainPage() {
  return (
    <>
      <Section id="banner">
        <Banner />
      </Section>
      <Section id="new">
        <NewEyewear />
      </Section>
      <Section id="collaboration">
        <Collaboration />
      </Section>
      <Section id="products">
        <Products />
      </Section>
      <Section id="about">
        <About />
        <Footer />
      </Section>
    </>
  );
}
