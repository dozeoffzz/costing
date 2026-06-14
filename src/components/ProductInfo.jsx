import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AllProducts } from "../apis/BannerList";
import SaveIconWhite from "../assets/icons/SaveIconWhite.svg";
import styled from "@emotion/styled";

const InfoContainer = styled.div`
  padding: 20px;
  position: sticky;
  top: 100px;
  right: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 430px;
  background: transparent;
  gap: 20px;

  @media (max-width: 1919px) {
    width: 100%;
    max-width: 280px;
    margin-left: 20px;
  }
  @media (max-width: 1024px) {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    top: auto;
    max-width: 100%;
    width: 100%;
    margin-top: 30px;
    background-color: #202f3d;
    z-index: 3;
    margin-left: 0;
  }
`;
const NamePriceSave = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
  }
`;
const NamePrice = styled.div`
  text-align: right;
`;
const NumName = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: 1024px) {
  }
`;
const Color = styled.span`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const AddBtn = styled.button`
  padding: 10px 0;
  width: 100%;
  background-color: #fafafa;
  color: #0c0c0c;
  border-radius: 10px;
`;
const MoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const MoreInfo = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #fafafa;
`;
const MoreInfoContents = styled.div`
  padding-top: 20px;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.8s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MoreInfoWrap = styled.div`
  padding-top: 10px;
`;
export default function ProductInfo() {
  const { id } = useParams();
  const [openItem, setOpenItem] = useState(null);

  const product = AllProducts.find((item) => item.id === Number(id));
  return (
    <InfoContainer>
      <NamePriceSave>
        <NamePrice>
          <NumName>
            <span>{product.num}</span>
            <span>{product.name}</span>
          </NumName>
          <span>{product.price}</span>
        </NamePrice>
        <div>
          <img src={SaveIconWhite} alt="saveIcon" />
        </div>
      </NamePriceSave>
      <Color>Black</Color>
      <AddBtn>구매하기</AddBtn>
      <MoreInfoContainer>
        <MoreInfoWrap>
          <MoreInfo onClick={() => setOpenItem(openItem === "shipping" ? null : "shipping")}>
            <span>무료배송 & 반품</span>
            <span>{openItem === "shipping" ? "-" : "+"}</span>
          </MoreInfo>
          <MoreInfoContents isOpen={openItem === "shipping"}>
            Costing은 무료 배송 및 반품 서비스를 제공합니다.
            <br /> 제품을 수령하신 날로부터 7일 이내에 접수해 주셔야 합니다.
            <br />
            제품은 사용되지 않은 상태여야 하며,
            <br /> 모든 구성품을 포함하고 있어야 합니다.
          </MoreInfoContents>
        </MoreInfoWrap>
        <MoreInfoWrap>
          <MoreInfo onClick={() => setOpenItem(openItem === "detail" ? null : "detail")}>
            <span>세부정보</span>
            <span>{openItem === "detail" ? "-" : "+"}</span>
          </MoreInfo>
          <MoreInfoContents isOpen={openItem === "detail"}>
            스틸 소재의 선글라스
            <br /> 002 컬렉션
            <br /> 스틸 프레임 혼합색상
            <br />
            렌즈 스틸 라인 쉐입
            <br /> UV 99.9% 차단 렌즈
            <br /> 제조국명: 중국 본 제품은 렌즈 교체 및 피팅이 불가합니다.
          </MoreInfoContents>
        </MoreInfoWrap>
        <MoreInfoWrap>
          <MoreInfo onClick={() => setOpenItem(openItem === "size" ? null : "size")}>
            <span>사이즈</span>
            <span>{openItem === "size" ? "-" : "+"}</span>
          </MoreInfo>
          <MoreInfoContents isOpen={openItem === "size"}>
            <div>총길이 : {product.totalwidth}</div>
            <div>다리길이 : {product.templelength}</div>
            <div>렌즈사이의 거리 : {product.dbl}</div>
            <div>가로길이 : {product.eyesizea}</div>
            <div>세로길이 : {product.eyesizeb}</div>
          </MoreInfoContents>
        </MoreInfoWrap>
      </MoreInfoContainer>
    </InfoContainer>
  );
}
