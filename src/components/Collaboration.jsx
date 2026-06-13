import styled from "@emotion/styled";
import { CollaborationProducts } from "../apis/BannerList";
import { useEffect, useState } from "react";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;

  @media (max-width: 1024px) {
    height: 100%;
  }
  @media (max-width: 375px) {
    height: 100%;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 600px;

  @media (max-width: 1024px) {
    height: 350px;
  }
  @media (max-width: 375px) {
    height: auto;
  }
`;

const ProductsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  height: 100%;
  @media (max-width: 1024px) {
    gap: 10px;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 15px;
  }
`;

const CollaboProductImg = styled.div`
  width: 100%;
  overflow: hidden;
  @media (max-width: 375px) {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
`;

const ProductsImgs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  height: 100%;
  @media (max-width: 1024px) {
    gap: 10px;
  }
  @media (max-width: 375px) {
    width: 100%;
    max-width: 320px;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;
const MainImg = styled.img`
  width: 100%;
  max-width: 500px;
  height: 100%;
  object-fit: cover;
  display: block;

  @media (max-width: 1024px) {
    width: 350px;
  }
  @media (max-width: 375px) {
    width: 100%;
    max-width: 320px;
    height: 220px;
  }
`;
const SubImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const PrevOverlay = styled.button`
  display: flex;
  justify-self: flex-start;
  align-self: center;
  width: 70px;
  height: 90%;
  overflow: hidden;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), transparent);

  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

const NextOverlay = styled(PrevOverlay)`
  background: linear-gradient(to left, rgba(255, 255, 255, 0.8), transparent);
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 30px;

  @media (max-width: 375px) {
    gap: 20px;
  }
`;

const CategoryButton = styled.button`
  position: relative;
  padding-left: 20px;
  color: ${({ $active }) => ($active ? "#fafafa" : "#aaaaaa")};
  font-size: 20px;
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  transition: 0.3s;

  &::before {
    content: "";
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    position: absolute;

    left: 0;
    top: 50%;

    width: 6px;
    height: 6px;

    border-radius: 50%;
    background: #fafafa;
    transform: translateY(-50%);
    transition: all.3s ease;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

export default function Collaboration() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const product = CollaborationProducts[currentProduct];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const prevProduct = () => {
    setCurrentProduct((prev) => (prev === 0 ? CollaborationProducts.length - 1 : prev - 1));
  };
  const nextProduct = () => {
    setCurrentProduct((prev) => (prev === CollaborationProducts.length - 1 ? 0 : prev + 1));
  };
  return (
    <Section>
      <Title>Collaboration</Title>
      <CategoryContainer>
        {CollaborationProducts.map((item, index) => (
          <CategoryButton key={item.id} $active={currentProduct === index} onClick={() => setCurrentProduct(index)}>
            {item.name}
          </CategoryButton>
        ))}
      </CategoryContainer>
      <ProductsContainer>
        <PrevOverlay onClick={prevProduct} />
        <ProductsWrap>
          <MainImg src={product.mainImage} alt={product.name} />
          <ProductsImgs>
            {product.products.map((img, index) => (
              <CollaboProductImg key={index}>
                <SubImg src={img} alt={product.name} />
              </CollaboProductImg>
            ))}
          </ProductsImgs>
        </ProductsWrap>
        <NextOverlay onClick={nextProduct} />
      </ProductsContainer>
    </Section>
  );
}
