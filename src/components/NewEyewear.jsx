import styled from "@emotion/styled";
import { NewEyewearProducts } from "../apis/BannerList";
import { useState } from "react";

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
  margin-bottom: 63px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const NewItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
`;

const NewItemList = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  flex: 1;
  height: 100%;
  overflow: hidden;

  @media (max-width: 1024px) {
    /* height: 350px; */
  }
  @media (max-width: 375px) {
    /* height: 150px; */
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0c0c0c50;

  span {
    font-size: 24px;
  }

  @media (max-width: 1024px) {
    span {
      font-size: 21px;
    }
  }
  @media (max-width: 375px) {
    padding: 10px;
    span {
      font-size: 12px;
    }
  }
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

const ItemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const DefaultImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: opacity 0.5s ease;

  opacity: ${({ active }) => (active ? 0 : 1)};
`;

const HoverImg = styled.img`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: opacity 0.5s ease;

  opacity: ${({ active }) => (active ? 1 : 0)};
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

  transition: all 0.3s ease;

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
    transition: all 0.3s ease;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

export default function NewEyewear() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [active, setActive] = useState(null);
  const product = NewEyewearProducts[currentProduct];

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev === 0 ? NewEyewearProducts.length - 1 : prev - 1));
  };
  const nextProduct = () => {
    setCurrentProduct((prev) => (prev === NewEyewearProducts.length - 1 ? 0 : prev + 1));
  };
  return (
    <Section>
      <Title>New Eyewear</Title>
      <CategoryContainer>
        {NewEyewearProducts.map((item, index) => (
          <CategoryButton key={item.id} $active={currentProduct === index} onClick={() => setCurrentProduct(index)}>
            New {item.num}
          </CategoryButton>
        ))}
      </CategoryContainer>
      <NewItemContainer>
        <PrevOverlay onClick={prevProduct}></PrevOverlay>
        <ItemContainer onMouseLeave={() => setActive(null)}>
          {product.images.map((item, index) => (
            <NewItemList key={index} active={active === index} onMouseEnter={() => setActive(index)}>
              <DefaultImg src={item.default} active={active === index} alt={item.name} />
              <HoverImg src={item.hover} active={active === index} alt={item.name} />
            </NewItemList>
          ))}
          <Overlay>
            <span>New {product.num}</span>
            <span>{product.name}</span>
          </Overlay>
        </ItemContainer>
        <NextOverlay onClick={nextProduct}></NextOverlay>
      </NewItemContainer>
    </Section>
  );
}
