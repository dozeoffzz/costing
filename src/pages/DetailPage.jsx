import React from "react";
import styled from "@emotion/styled";
import { DetailImg } from "../apis/BannerList";

const DetailContainer = styled.div`
  margin-top: 200px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 1440px;
`;

export default function DetailPage() {
  return (
    <DetailContainer>
      <div>
        {DetailImg.map((item) => (
          <ImgContainer key={item.id}>
            {item.products.map((img, index) => (
              <div>
                <img key={index} src={img} alt={`detail-${index}`} />
              </div>
            ))}
          </ImgContainer>
        ))}
      </div>
      <div>abcdefg</div>
      <div>
        <span>Fit Guide</span>
      </div>
    </DetailContainer>
  );
}
