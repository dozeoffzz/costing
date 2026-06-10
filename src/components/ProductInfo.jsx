import React from "react";
import { useParams } from "react-router-dom";
import { AllProducts } from "../apis/BannerList";
import SaveIconWhite from "../assets/icons/SaveIconWhite.svg";
import styled from "@emotion/styled";

const InfoContainer = styled.div`
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  background: transparent;
  gap: 20px;
`;
const NamePriceSave = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NamePrice = styled.div`
  text-align: right;
`;
const NumName = styled.div`
  display: flex;
  gap: 5px;
`;
const Color = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const AddBtn = styled.button`
  width: 100%;
  height: 30px;
  background-color: #fafafa;
  color: #0c0c0c;
  border-radius: 5px;
`;
const MoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const MoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default function ProductInfo() {
  const { id } = useParams();

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
      <AddBtn>쇼핑백에 추가하기</AddBtn>
      <MoreInfoContainer>
        <MoreInfo>
          <span>무료배송 & 반품</span>
          <span>+</span>
        </MoreInfo>
        <MoreInfo>
          <span>세부정보</span>
          <span>+</span>
        </MoreInfo>
        <MoreInfo>
          <span>사이즈</span>
          <span>+</span>
        </MoreInfo>
      </MoreInfoContainer>
    </InfoContainer>
  );
}
