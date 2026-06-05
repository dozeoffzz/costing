import styled from "@emotion/styled";
import { CollaborationProducts } from "../apis/BannerList";
import { useState } from "react";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  /* margin-bottom: 63px; */
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
`;

const ProductsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const MainImgContainer = styled.div`
  width: 500px;
  height: 100%;
`;

const CollaboProductImg = styled.div`
  width: 100%;
  height: 100%;
  min-height: 0;
`;

const CollaborationProductsWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProductTitle = styled.span`
  font-size: 36px;
`;

const ProductsImgs = styled.div`
  height: calc(100% - 60px);
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PrevOverlay = styled.button`
  display: flex;
  justify-self: flex-start;
  width: 70px;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), transparent);
`;

const NextOverlay = styled(PrevOverlay)`
  background: linear-gradient(to left, rgba(255, 255, 255, 0.8), transparent);
`;

export default function Collaboration() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const prevProduct = () => {
    setCurrentProduct((prev) => (prev === 0 ? CollaborationProducts.length - 1 : prev - 1));
  };
  const nextProduct = () => {
    setCurrentProduct((prev) => (prev === CollaborationProducts.length - 1 ? 0 : prev + 1));
  };
  const product = CollaborationProducts[currentProduct];
  return (
    <Section>
      <Title>Collaboration</Title>
      <ProductsContainer>
        <PrevOverlay onClick={prevProduct} />
        <ProductsWrap>
          <MainImgContainer>
            <Img src={product.mainImage} alt={product.name} />
          </MainImgContainer>
          <CollaborationProductsWrap>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductsImgs>
              {product.products.map((img, index) => (
                <CollaboProductImg key={index}>
                  <Img src={img} alt={product.name} />
                </CollaboProductImg>
              ))}
            </ProductsImgs>
          </CollaborationProductsWrap>
        </ProductsWrap>
        <NextOverlay onClick={nextProduct} />
      </ProductsContainer>
    </Section>
  );
}
