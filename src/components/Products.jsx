import styled from "@emotion/styled";
import { AllProducts } from "../apis/BannerList";
import { useState } from "react";
import SaveIcon from "../assets/icons/SaveIcon.svg";

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
  justify-content: space-between;
  width: 100%;
  height: 800px;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 100px;
`;

const CategoryButton = styled.button`
  position: relative;
  padding-left: 20px;
  color: ${({ $active }) => ($active ? "#fafafa" : "#444")};
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  font-size: 24px;
  transition: all.3s ease;

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
`;

const ProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ProductsContianer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(128, 157, 181, 50%);
  text-align: right;
  color: #0c0c0c;
  font-size: 16px;
`;

const SaveIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 31px;
`;

const SaveIcons = styled.img`
  width: 100%;
  height: 100%;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70px;
  height: 100%;
  cursor: pointer;
`;

const PrevOverlay = styled.button`
  display: flex;
  justify-self: flex-start;
  width: 100%;
  height: 50%;
  overflow: hidden;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), transparent);
`;

const NextOverlay = styled(PrevOverlay)`
  background: linear-gradient(to left, rgba(255, 255, 255, 0.8), transparent);
`;

export default function Products() {
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProducts = category === "all" ? AllProducts : AllProducts.filter((item) => item.category === category);

  const itemsPerPage = 8;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const visibleProducts = filteredProducts.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handleCategory = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(0);
  };
  return (
    <Container>
      <Section>
        <Title>Products</Title>
        <CategoryContainer>
          <CategoryButton $active={category === "all"} onClick={() => handleCategory("all")}>
            All
          </CategoryButton>
          <CategoryButton $active={category === "glasses"} onClick={() => handleCategory("glasses")}>
            Glasses
          </CategoryButton>
          <CategoryButton $active={category === "sunglasses"} onClick={() => handleCategory("sunglasses")}>
            SunGlasses
          </CategoryButton>
        </CategoryContainer>
        <ProductsWrapper>
          <ButtonWrap onClick={prevPage}>
            <PrevOverlay />
            <PrevOverlay />
          </ButtonWrap>
          <ProductsContianer>
            {visibleProducts.map((item) => (
              <ProductCard key={item.id}>
                <img src={item.img} alt={item.name} />
                <Info>
                  <div>
                    <h4>
                      {item.num} {item.name}
                    </h4>
                    <p>219,000 ₩</p>
                  </div>
                  <SaveIconWrap>
                    <SaveIcons src={SaveIcon} />
                  </SaveIconWrap>
                </Info>
              </ProductCard>
            ))}
          </ProductsContianer>
          <ButtonWrap onClick={nextPage}>
            <NextOverlay />
            <NextOverlay />
          </ButtonWrap>
        </ProductsWrapper>
      </Section>
    </Container>
  );
}
