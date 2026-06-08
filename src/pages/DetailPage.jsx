import React, { useState } from "react";
import styled from "@emotion/styled";
import { AllProducts, DetailImg } from "../apis/BannerList";
import fitguide from "../assets/detail/fitguide.webp";
import sizeguide from "../assets/detail/sizeguide.webp";

const DetailContainer = styled.div`
  margin-top: 200px;
`;

const ImgContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 1240px;
`;

const Detailcontent = styled.p`
  margin-bottom: 100px;
  font-size: 24px;
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
`;
const FitGuide = styled.img`
  width: 1240px;
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

const DetailInfoContainer = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  border-bottom: 1px solid #809db5;
  width: 1240px;
`;

const SizeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;

const SizeInfoTitle = styled.p`
  font-size: 24px;
`;
const SizeInfoSub = styled.p`
  font-size: 14px;
`;
const SizeInfoMain = styled.p`
  font-size: 36px;
`;

const ProductSkinContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1240px;
  padding-top: 50px;
`;
const ProductSkinWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductSkin = styled.div`
  text-align: right;
`;

const OtherProductContainer = styled.div`
  padding: 100px 0;
  width: 1580px;
  position: relative;
`;
const OtherProductTitle = styled(DetailSize)``;
const OtherProdcutWrap = styled.div`
  overflow: hidden;
  width: 1580px;
`;
const OtherProductTrack = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.4s ease;
  transform: translateX(${(props) => props.translate}px);
`;
const OtherImg = styled.div`
  width: 300px;
  flex-shrink: 0;

  img {
    width: 100%;
    display: block;
  }
`;

export default function DetailPage() {
  const DetailProduct = DetailImg[0];
  const [currentIndex, setCurrentIndex] = useState(0);

  const CARD_WIDTH = 300;
  const GAP = 20;

  const moveDistance = CARD_WIDTH + GAP;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, AllProducts.length - 5));
  };
  return (
    <DetailContainer>
      <div>
        {DetailImg.map((item) => (
          <ImgContainer key={item.id}>
            {item.products.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`detail-${index}`} />
              </div>
            ))}
          </ImgContainer>
        ))}
      </div>
      <Detailcontent>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Detailcontent>
      <DetailFitContianer>
        <DetailFit>Fit Guide</DetailFit>
        <div>
          <FitGuide src={fitguide} />
        </div>
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
            <SizeInfoMain>{DetailProduct.totalwidth}</SizeInfoMain>
          </SizeInfo>
          <SizeInfo>
            <SizeInfoTitle>2-TEMPLE LENGTH</SizeInfoTitle>
            <SizeInfoSub>*안경다리의 길이</SizeInfoSub>
            <SizeInfoMain>{DetailProduct.templelength}</SizeInfoMain>
          </SizeInfo>
          <SizeInfo>
            <SizeInfoTitle>3-DBL</SizeInfoTitle>
            <SizeInfoSub>*렌즈 사이의 거리</SizeInfoSub>
            <SizeInfoMain>{DetailProduct.dbl}</SizeInfoMain>
          </SizeInfo>
          <SizeInfo>
            <SizeInfoTitle>4-EYE SIZE A</SizeInfoTitle>
            <SizeInfoSub>*가로 최장거리</SizeInfoSub>
            <SizeInfoMain>{DetailProduct.eyesizea}</SizeInfoMain>
          </SizeInfo>
          <SizeInfo>
            <SizeInfoTitle>5-EYE SIZE B</SizeInfoTitle>
            <SizeInfoSub>*수직 최장거리</SizeInfoSub>
            <SizeInfoMain>{DetailProduct.eyesizeb}</SizeInfoMain>
          </SizeInfo>
        </DetailInfoContainer>
        <ProductSkinContainer>
          <ProductSkinWrap>
            <div>
              <SizeInfoTitle>Meterial</SizeInfoTitle>
              <SizeInfoSub>*재질</SizeInfoSub>
            </div>
            <ProductSkin>
              <SizeInfoTitle>{DetailProduct.meterial}</SizeInfoTitle>
              <SizeInfoSub>*스테인레스 스틸</SizeInfoSub>
            </ProductSkin>
          </ProductSkinWrap>
          <ProductSkinWrap>
            <div>
              <SizeInfoTitle>Coating</SizeInfoTitle>
              <SizeInfoSub>*코팅</SizeInfoSub>
            </div>
            <ProductSkin>
              <SizeInfoTitle>{DetailProduct.coating}</SizeInfoTitle>
              <SizeInfoSub>*무반사 코팅</SizeInfoSub>
            </ProductSkin>
          </ProductSkinWrap>
          <ProductSkinWrap>
            <div>
              <SizeInfoTitle>Base</SizeInfoTitle>
              <SizeInfoSub>*렌지의 곡률</SizeInfoSub>
            </div>
            <ProductSkin>
              <SizeInfoTitle>{DetailProduct.Base}</SizeInfoTitle>
            </ProductSkin>
          </ProductSkinWrap>
          <ProductSkinWrap>
            <div>
              <SizeInfoTitle>Transmission rate</SizeInfoTitle>
              <SizeInfoSub>*렌즈 빛의 투과율</SizeInfoSub>
            </div>
            <ProductSkin>
              <SizeInfoTitle>{DetailProduct.transmissionrate}</SizeInfoTitle>
            </ProductSkin>
          </ProductSkinWrap>
          <ProductSkinWrap>
            <div>
              <SizeInfoTitle>UV Protection</SizeInfoTitle>
              <SizeInfoSub>*UV 렌즈 유무</SizeInfoSub>
            </div>
            <ProductSkin>
              <SizeInfoTitle>{DetailProduct.uvprotection}</SizeInfoTitle>
            </ProductSkin>
          </ProductSkinWrap>
        </ProductSkinContainer>
        <OtherProductContainer>
          <OtherProductTitle>Other Products</OtherProductTitle>
          <OtherProdcutWrap>
            <OtherProductTrack translate={-(currentIndex * moveDistance)}>
              {AllProducts.map((item) => (
                <OtherImg key={item.id}>
                  <img src={item.img} alt={item.name} />
                </OtherImg>
              ))}
            </OtherProductTrack>
          </OtherProdcutWrap>
        </OtherProductContainer>
      </DetailSizeMainContainer>
    </DetailContainer>
  );
}
