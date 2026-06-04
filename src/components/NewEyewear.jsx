import styled from "@emotion/styled";
import { NewEyewearProducts } from "../apis/BannerList";
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

const NewItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const NewItemList = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0c0c0c50;

  span {
    font-size: 36px;
  }
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
    <Container>
      <Section>
        <Title>New Eyewear</Title>
        <NewItemContainer onMouseLeave={() => setActive(null)}>
          <PrevOverlay onClick={prevProduct}></PrevOverlay>
          <ItemContainer>
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
    </Container>
  );
}
