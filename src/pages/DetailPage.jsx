import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { AllProducts } from "../apis/BannerList";
import fitguide from "../assets/detail/fitguide.webp";
import sizeguide from "../assets/detail/sizeguide.webp";
import SaveIcon from "../assets/icons/SaveIcon.svg";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import LogoLine from "../assets/icons/LogoLine.svg";
import ProductInfo from "../components/ProductInfo";

const DetailContainer = styled.div`
  position: relative;
  margin-top: 200px;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 100px;
  }

  @media (max-width: 375px) {
    margin-top: 150px;
  }
`;

const ImgContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 1919px) {
    width: 100%;
    max-width: 1440px;
  }
  @media (max-width: 1024px) {
    max-width: 100%;
    gap: 30px;

    img {
      width: 100%;
      display: block;
    }
  }
`;

const ImgSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Detailcontent = styled.p`
  padding: 0px 10px;
  margin-bottom: 100px;
  font-size: 24px;
  max-width: 1440px;

  @media (max-width: 1919px) {
    width: 100%;
    max-width: 1240px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    font-size: 16px;
  }
  @media (max-width: 375px) {
    width: 100%;
    font-size: 12px;
  }
`;

const DetailFitContianer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: center;
  margin-bottom: 100px;
`;
const DetailFit = styled.span`
  font-size: 36px;

  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 375px) {
    font-size: 24px;
  }
`;
const FitGuide = styled.img`
  width: 1240px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 924px;
  }
  @media (max-width: 375px) {
    width: 100%;
    max-width: 335px;
  }
`;
const DetailSizeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #202f3d;
  padding: 50px 0;
`;

const DetailSize = styled(DetailFit)`
  margin-bottom: 50px;
`;

const FitGuideImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 30px;
  }
  @media (max-width: 375px) {
    padding: 10px;
  }
`;

const DetailInfoContainer = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  border-bottom: 1px solid #809db5;
  width: 100%;
  max-width: 1240px;

  @media (max-width: 1024px) {
  }
  @media (max-width: 375px) {
    padding: 50px 30px;
    gap: 30px;
  }
`;

const SizeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  white-space: nowrap;
`;

const SizeInfoTitle = styled.p`
  font-size: 24px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;
const SizeInfoSub = styled.p`
  font-size: 14px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;
const SizeInfoMain = styled.p`
  font-size: 36px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const ProductSkinContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1240px;
  padding-top: 50px;

  @media (max-width: 1024px) {
    padding: 50px 20px 0px 20px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
  }
`;
const ProductSkinWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductSkin = styled.div`
  text-align: right;
`;

const OtherProductContainer = styled.div`
  padding: 100px 0 0 0;
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
  position: relative;
`;
const OtherProductTitle = styled(DetailFit)`
  display: flex;
  justify-self: center;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
  }
  @media (max-width: 375px) {
  }
`;

const PrevBtn = styled.button`
  display: flex;
  width: 50px;
  height: 270px;
  overflow: hidden;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), transparent);
  @media (max-width: 375px) {
    max-height: 230px;
  }
`;
const NextBtn = styled(PrevBtn)`
  background: linear-gradient(to left, rgba(255, 255, 255, 0.8), transparent);
`;
const OtherProdcutWrap = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-self: center;
`;

const OtherCarousel = styled.div`
  display: flex;
  align-items: center;
`;

const OtherProductTrack = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform 0.4s ease;
  transform: translateX(${(props) => props.translate}px);

  @media (max-width: 1024px) {
    display: flex;

    transform: none !important;

    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    scroll-snap-type: x mandatory;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 375px) {
  }
`;
const OtherImg = styled.div`
  position: relative;
  width: 270px;
  flex-shrink: 0;

  img {
    width: 100%;
    display: block;
  }

  @media (max-width: 375px) {
    width: 82%;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(128, 157, 181, 50%);
  text-align: right;
  color: #0c0c0c;
  font-size: 16px;
`;

const SaveIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 31px;
`;

const SaveIcons = styled.img`
  width: 100%;
  height: 100%;
`;

const LogoLineImg = styled.img`
  height: 100px;
`;

export default function DetailPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const product = AllProducts.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>상품이 없습니다.</h1>;
  }

  const otherProducts = AllProducts.filter((item) => item.id !== Number(id));

  const CARD_WIDTH = 270;
  const GAP = 20;

  const moveDistance = CARD_WIDTH + GAP;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, otherProducts.length - 5));
  };
  return (
    <>
      <DetailContainer>
        <ImgSection>
          <ImgContainer>
            {product.detailImg.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`detail-${index}`} />
              </div>
            ))}
          </ImgContainer>
          <ProductInfo />
        </ImgSection>
        <Detailcontent>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Detailcontent>
        <DetailFitContianer>
          <DetailFit>Fit Guide</DetailFit>
          <FitGuideImgContainer>
            <FitGuide src={fitguide} />
          </FitGuideImgContainer>
        </DetailFitContianer>
        <DetailSizeMainContainer>
          <DetailSize>Size Guide</DetailSize>
          <div>
            <img src={sizeguide} />
          </div>
          <DetailInfoContainer>
            <SizeInfo>
              <SizeInfoTitle>SIZE</SizeInfoTitle>
              <SizeInfoMain>One Size</SizeInfoMain>
            </SizeInfo>
            <SizeInfo>
              <SizeInfoTitle>1-TOTAL WIDTH</SizeInfoTitle>
              <SizeInfoSub>*안경의 총 길이</SizeInfoSub>
              <SizeInfoMain>{product.totalwidth}</SizeInfoMain>
            </SizeInfo>
            <SizeInfo>
              <SizeInfoTitle>2-TEMPLE LENGTH</SizeInfoTitle>
              <SizeInfoSub>*안경다리의 길이</SizeInfoSub>
              <SizeInfoMain>{product.templelength}</SizeInfoMain>
            </SizeInfo>
            <SizeInfo>
              <SizeInfoTitle>3-DBL</SizeInfoTitle>
              <SizeInfoSub>*렌즈 사이의 거리</SizeInfoSub>
              <SizeInfoMain>{product.dbl}</SizeInfoMain>
            </SizeInfo>
            <SizeInfo>
              <SizeInfoTitle>4-EYE SIZE A</SizeInfoTitle>
              <SizeInfoSub>*가로 최장거리</SizeInfoSub>
              <SizeInfoMain>{product.eyesizea}</SizeInfoMain>
            </SizeInfo>
            <SizeInfo>
              <SizeInfoTitle>5-EYE SIZE B</SizeInfoTitle>
              <SizeInfoSub>*수직 최장거리</SizeInfoSub>
              <SizeInfoMain>{product.eyesizeb}</SizeInfoMain>
            </SizeInfo>
          </DetailInfoContainer>
          <ProductSkinContainer>
            <ProductSkinWrap>
              <div>
                <SizeInfoTitle>Meterial</SizeInfoTitle>
                <SizeInfoSub>*재질</SizeInfoSub>
              </div>
              <ProductSkin>
                <SizeInfoTitle>{product.meterial}</SizeInfoTitle>
                <SizeInfoSub>*스테인레스 스틸</SizeInfoSub>
              </ProductSkin>
            </ProductSkinWrap>
            <ProductSkinWrap>
              <div>
                <SizeInfoTitle>Coating</SizeInfoTitle>
                <SizeInfoSub>*코팅</SizeInfoSub>
              </div>
              <ProductSkin>
                <SizeInfoTitle>{product.coating}</SizeInfoTitle>
                <SizeInfoSub>*무반사 코팅</SizeInfoSub>
              </ProductSkin>
            </ProductSkinWrap>
            <ProductSkinWrap>
              <div>
                <SizeInfoTitle>Base</SizeInfoTitle>
                <SizeInfoSub>*렌지의 곡률</SizeInfoSub>
              </div>
              <ProductSkin>
                <SizeInfoTitle>{product.Base}</SizeInfoTitle>
              </ProductSkin>
            </ProductSkinWrap>
            <ProductSkinWrap>
              <div>
                <SizeInfoTitle>Transmission rate</SizeInfoTitle>
                <SizeInfoSub>*렌즈 빛의 투과율</SizeInfoSub>
              </div>
              <ProductSkin>
                <SizeInfoTitle>{product.transmissionrate}</SizeInfoTitle>
              </ProductSkin>
            </ProductSkinWrap>
            <ProductSkinWrap>
              <div>
                <SizeInfoTitle>UV Protection</SizeInfoTitle>
                <SizeInfoSub>*UV 렌즈 유무</SizeInfoSub>
              </div>
              <ProductSkin>
                <SizeInfoTitle>{product.uvprotection}</SizeInfoTitle>
              </ProductSkin>
            </ProductSkinWrap>
          </ProductSkinContainer>
          <OtherProductContainer>
            <OtherProductTitle>Other Products</OtherProductTitle>
            <OtherCarousel>
              <PrevBtn onClick={handlePrev} />
              <OtherProdcutWrap>
                <OtherProductTrack translate={-(currentIndex * moveDistance)}>
                  {otherProducts.map((item) => (
                    <OtherImg key={item.id}>
                      <NavLink to={`/detailpage/${item.id}`}>
                        <img src={item.img} alt={item.name} />
                        <Info>
                          <div>
                            <h4>
                              {item.num} {item.name}
                            </h4>
                            <p>219,000 ₩</p>
                          </div>
                          <SaveIconWrap>
                            <SaveIcons src={SaveIcon} />
                          </SaveIconWrap>
                        </Info>
                      </NavLink>
                    </OtherImg>
                  ))}
                </OtherProductTrack>
              </OtherProdcutWrap>
              <NextBtn onClick={handleNext} />
            </OtherCarousel>
          </OtherProductContainer>
        </DetailSizeMainContainer>
      </DetailContainer>
      <LogoLineImg src={LogoLine} alt="LogoLine" />
      <Footer />
    </>
  );
}
