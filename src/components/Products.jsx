import styled from "@emotion/styled";
import { AllProducts } from "../apis/BannerList";
import { useEffect, useState } from "react";
import SaveIcon from "../assets/icons/SaveIcon.svg";
import { NavLink, useParams } from "react-router-dom";

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

const CategoryContainer = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    gap: 100px;
  }
  @media (max-width: 375px) {
    gap: 30px;
  }
`;

const CategoryButton = styled.button`
  position: relative;
  padding-left: 20px;
  color: ${({ $active }) => ($active ? "#fafafa" : "#aaaaaa")};
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  font-size: 20px;
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

  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
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
  /* height: 500px; */
  @media (max-width: 1728px) {
    height: 500px;
  }

  @media (max-width: 1024px) {
    display: grid;

    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;

    grid-auto-columns: 220px;

    width: max-content;

    overflow-x: auto;
    overflow-y: hidden;

    gap: 20px;
    height: 100%;
  }

  @media (max-width: 375px) {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    height: 100%;

    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ProductCard = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 220px;
  }

  @media (max-width: 375px) {
    flex: 0 0 180px;
  }
`;
const ProductImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
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

  @media (max-width: 1024px) {
    padding: 5px;
    font-size: 14px;
  }
  @media (max-width: 375px) {
    padding: 5px;
    font-size: 12px;
  }
`;

const SaveIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SaveIcons = styled.img`
  width: 100%;
  height: 100%;
`;

const ButtonWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70px;
  height: 90%;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 30px;
    height: 460px;
    gap: 20px;
  }
  @media (max-width: 375px) {
    width: 20px;
    height: 180px;
    gap: 0px;
  }
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
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredProducts = category === "all" ? AllProducts : AllProducts.filter((item) => item.category === category);

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
          {(isMobileOrTablet ? filteredProducts : visibleProducts).map((item) => (
            <ProductCard key={item.id}>
              <NavLink to={`/detailpage/${item.id}`}>
                <ProductImg src={item.img} alt={item.name} />
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
              </NavLink>
            </ProductCard>
          ))}
        </ProductsContianer>
        <ButtonWrap onClick={nextPage}>
          <NextOverlay />
          <NextOverlay />
        </ButtonWrap>
      </ProductsWrapper>
    </Section>
  );
}
