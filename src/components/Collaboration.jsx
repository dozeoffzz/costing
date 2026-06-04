import styled from "@emotion/styled";
import { CollaborationProducts } from "../apis/BannerList";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 63px;
  width: 100%;
  height: 100vh;
  background-color: #0c0c0c;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 63px;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const ProductsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

const CollaborationProductsWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.span`
  font-size: 36px;
`;

const ProductsImgs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const Img = styled.img`
  object-fit: cover;
  /* height: 100%; */
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
    <Container>
      <Section>
        <Title>Collaboration</Title>
        <ProductsContainer>
          <PrevOverlay onClick={prevProduct} />
          <ProductsWrap>
            <div>
              <Img src={product.mainImage} alt={product.name} />
            </div>
            <CollaborationProductsWrap>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductsImgs>
                {product.products.map((img, index) => (
                  <div key={index}>
                    <Img src={img} alt={product.name} />
                  </div>
                ))}
              </ProductsImgs>
            </CollaborationProductsWrap>
          </ProductsWrap>
          <NextOverlay onClick={nextProduct} />
        </ProductsContainer>
      </Section>
    </Container>
  );
}
