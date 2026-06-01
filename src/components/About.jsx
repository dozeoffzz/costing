import styled from "@emotion/styled";
import LogoLine from "../assets/icons/LogoLine.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 63px;
  width: 100%;
  height: 100vh;
  background-color: #0c0c0c;
`;

const Section = styled.section`
  width: 100%;
  height: 800px;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
`;

const LogoLineBox = styled.img`
  height: 100px;
  width: 100%;
  background-color: transparent;
`;

export default function About() {
  return (
    <Container>
      <Section>
        <LogoLineBox src={LogoLine} />
        <Title>About</Title>
      </Section>
    </Container>
  );
}
