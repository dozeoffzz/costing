import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MyPageIcon from "../assets/icons/MyPageIcon.svg";
import CartIcon from "../assets/icons/CartIcon.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const HoverArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 100px;

  z-index: 9998;
`;

const HeaderContianer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 63px;
  /* height: 110px; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: transform 0.3s ease;
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(-100%)")};

  background: ${({ isTop }) => (isTop ? "transparent" : "transparent")};

  backdrop-filter: ${({ isTop, hover }) => (isTop && !hover ? "none" : "blur(12px)")};

  @media (max-width: 1024px) {
    padding: 30px 30px;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    row-gap: 20px;
  }
`;

const Costing = styled.h1`
  display: flex;
  align-items: center;
  font-size: 36px;
  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const MenuContainer = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 487px;
  gap: 100px;

  p {
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    gap: 0;
  }
  @media (max-width: 375px) {
    order: 3;
    width: 100%;
    min-width: auto;
    position: static;
    gap: 0;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  /* min-width: 100px; */
  @media (max-width: 1024px) {
    img {
      width: 16px;
    }
  }
  @media (max-width: 375px) {
    gap: 40px;
    img {
      width: 16px;
    }
  }
`;

export default function Header({ scrollRef }) {
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [hoverHeader, setHoverHeader] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const moveSection = (id) => {
    const isMainPage = location.pathname === "/";

    if (isMainPage && scrollRef?.current) {
      const el = document.getElementById(id);
      const container = scrollRef.current;

      if (!el) return;

      const isTabletOrMobile = window.innerWidth <= 1024;

      const top = isTabletOrMobile ? el.offsetTop - (container.clientHeight - el.clientHeight) / 2 : el.offsetTop;

      container.scrollTo({
        top,
        behavior: "smooth",
      });

      return;
    }

    navigate(`/#${id}`);
  };

  useEffect(() => {
    const container = scrollRef?.current;

    if (!container) return;

    const handleScroll = () => {
      const currentScrollY = container.scrollTop;

      setIsTop(currentScrollY < 100);
      setVisible(currentScrollY < 100);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return (
    <>
      <HoverArea onMouseEnter={() => setHoverHeader(true)} />

      <HeaderContianer
        visible={visible || hoverHeader}
        isTop={isTop}
        onMouseEnter={() => setHoverHeader(true)}
        onMouseLeave={() => setHoverHeader(false)}
      >
        {/* Logo */}
        <NavLink to="/">
          <Costing>costing</Costing>
        </NavLink>

        {/* Menu */}
        <MenuContainer>
          <p onClick={() => moveSection("new")}>New</p>
          <p onClick={() => moveSection("collaboration")}>Collaboration</p>
          <p onClick={() => moveSection("products")}>Products</p>
          <p onClick={() => moveSection("about")}>About</p>
        </MenuContainer>

        {/* Icons */}
        <IconContainer>
          <NavLink to="/mypage">
            <img src={MyPageIcon} />
          </NavLink>
          <NavLink to="/cart">
            <img src={CartIcon} />
          </NavLink>
        </IconContainer>
      </HeaderContianer>
    </>
  );
}
