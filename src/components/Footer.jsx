import styled from "@emotion/styled";
import React from "react";

const FooterContainer = styled.footer`
  padding: 50px 63px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 300px;
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 508px;
`;

const Costing = styled.h1`
  font-size: 36px;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 56px;
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
        <p>
          주) 쿨럭아카이브 | 대표명: 최원희 | 사업자번호: xxx-xx-xxxxx | 통신판매신고번호: 제 xxxx-xxxx-xxx |
          개인정보보호책임자: 최원희 | 주소: 서울특별시: xxx-xx | 대표번호: xxxx-xxxx
        </p>
        <p>costing All rights reversed</p>
      </FooterLeft>
      <FooterRight>
        <p>Email - cooolluck247@gmail.com</p>
        <p>Phone - 82) 10-3375-8440</p>
      </FooterRight>
    </FooterContainer>
  );
}
