import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Bannerlist } from "../apis/BannerList";
import { NavLink } from "react-router-dom";

const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  @media (max-width: 1024px) {
    height: 100%;
  }
  @media (max-width: 375px) {
    height: 100%;
  }
`;

const BannerTrack = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 1.5s ease-in-out;

  transform: ${({ current }) => `translateX(-${current * 100}%)`};
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const PageNationContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 63px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    left: 30px;
    height: 300px;
  }
  @media (max-width: 375px) {
    left: 20px;
    height: 400px;
  }
`;

const PageNation = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${({ active }) => (active ? "300px" : "150px")};
  height: 45px;
  background-color: #202f3d75;
  font-size: 24px;

  transition: all 0.4s ease;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: ${({ active }) => (active ? "200px" : "100px")};
    font-size: 16px;
  }
  @media (max-width: 375px) {
    width: ${({ active }) => (active ? "150px" : "70px")};
    font-size: 14px;
  }
`;

const CollectionText = styled.div`
  padding: 30px;
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  background-color: #202f3d75;

  span {
    font-size: 24px;
  }
  p {
    font-size: 16px;
    white-space: pre-line;
  }

  @media (max-width: 1919px) {
    padding: 10px;
    left: auto;
    right: 30px;
    bottom: 50px;
    transform: none;
  }
  @media (max-width: 1024px) {
    padding: 10px;
    left: auto;
    right: 30px;
    bottom: 20px;
    transform: none;

    span {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

const GoCollection = styled(NavLink)`
  font-size: 16px;
`;

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const activeBanner = Bannerlist[current];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev === Bannerlist.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [current]);
  return (
    <BannerContainer>
      <BannerTrack current={current}>
        {Bannerlist.map((item) => (
          <ImgContainer key={item.id}>
            <img src={isMobile ? item.mobileImg : item.img} alt={item.name} />
          </ImgContainer>
        ))}
      </BannerTrack>
      <PageNationContainer>
        {Bannerlist.map((item, index) => (
          <PageNation key={item.id} active={current === index} onClick={() => setCurrent(index)}>
            <p>{item.name}</p>
          </PageNation>
        ))}
      </PageNationContainer>
      <CollectionText>
        <span>{activeBanner.name} collection</span>
        <p>{activeBanner.collection}</p>
        <GoCollection>컬렉션 보러가기 -</GoCollection>
      </CollectionText>
    </BannerContainer>
  );
}
