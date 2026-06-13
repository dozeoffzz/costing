import styled from "@emotion/styled";
import AboutMp4 from "../assets/aboutmp4/AboutMp4.mp4";
const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  scroll-snap-align: center;
`;

const Video = styled.video`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.479);

  z-index: 2;
`;

const AboutContent = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  gap: 80px;
  bottom: 50px;
  left: 63px;
  z-index: 3;

  h3 {
    font-size: 36px;
  }
  span {
    font-size: 24px;
  }
  p {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
    left: 20px;
    right: 20px;
    align-items: flex-start;
    text-align: left;
    transform: none;
    h3 {
      font-size: 24px;
    }
    span {
      font-size: 21px;
    }
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 375px) {
    h3 {
      font-size: 16px;
    }
    span {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;

const LogoCotent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BrandStoryContent = styled(LogoCotent)``;
export default function About() {
  return (
    <Section>
      <Overlay />
      <Video autoPlay muted loop playsInline>
        <source src={AboutMp4} type="video/mp4" />
      </Video>
      <AboutContent>
        <BrandStoryContent>
          <h3>Brand Story</h3>
          <span>"The Cost of Seeing"</span>
          <div>
            <p>진정한 시선에는 대가가 따른다.</p>
            <p>COSTING은 단순히 안경을 판매하는 브랜드가 아니다.</p>
            <p>우리는 세상을 바라보는 방식의 가치를 만든다.</p>
            <p>누군가는 가격을 본다, 누군가는 브랜드를 본다.</p>
            <p>COSTING은 그 너머의 시선을 본다.</p>
            <p>우리가 지불하는 것은 제품의 가격이 아니라 세상을 더 선명하게 바라보는 경험이다.</p>
          </div>
        </BrandStoryContent>
        <LogoCotent>
          <h3>Logo</h3>

          <span>"Sight Flow"</span>
          <div>
            <p>로고는 한 번에 그어진 선이 아니다.</p>
            <p>그것은 사람의 시선이 움직이는 궤적이다.</p>
            <p>안경을 쓰는 순간 사람은 세상을 새롭게 바라본다.</p>
            <p>로고의 시작점은 과거의 시선, 끝점은 미래의 시선을 의미한다.</p>
          </div>
        </LogoCotent>
      </AboutContent>
    </Section>
  );
}
