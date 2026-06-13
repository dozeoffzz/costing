import styled from "@emotion/styled";
import React from "react";

const FooterContainer = styled.footer`
  padding: 50px 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  @media (max-width: 1024px) {
    height: 204px;
    padding: 30px;
  }
  @media (max-width: 375px) {
    height: 206px;
    padding: 20px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const FooterInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    text-align: center;
    justify-content: center;
    font-size: 10px;
  }
`;

const FooterText = styled.p`
  font-size: 14px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    text-align: center;
    font-size: 10px;
  }
`;

const Costing = styled.h1`
  font-size: 36px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 375px) {
    text-align: center;
    font-size: 24px;
  }
`;

const FooterReversed = styled.p`
  font-size: 14px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    text-align: center;
    font-size: 10px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLeft>
        <Costing>costing</Costing>
        <FooterInfo>
          <p>온라인 문의 바로가기</p>
          <p>개인정보 처리방침</p>
          <p>국가: SOUTH KOREA</p>
        </FooterInfo>
        <FooterText>
          주) 쿨럭아카이브 | 대표명: 최원희 | 사업자번호: xxx-xx-xxxxx | 통신판매신고번호: 제 xxxx-xxxx-xxx |
          개인정보보호책임자: 최원희 | 주소: 서울특별시: xxx-xx | 대표번호: xxxx-xxxx
        </FooterText>
        <FooterReversed>costing All rights reversed</FooterReversed>
      </FooterLeft>
    </FooterContainer>
  );
}
