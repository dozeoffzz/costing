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
  padding: 0 63px;
  height: 110px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: transform 0.3s ease;
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(-100%)")};

  background: ${({ isTop }) => (isTop ? "transparent" : "transparent")};

  backdrop-filter: ${({ isTop, hover }) => (isTop && !hover ? "none" : "blur(12px)")};
`;

const Costing = styled.h1`
  font-size: 36px;
`;

const MenuContainer = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 487px;

  p {
    cursor: pointer;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
`;

export default function Header({ scrollRef }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [hoverHeader, setHoverHeader] = useState(false);

  const moveSection = (id) => {
    const isHome = location.pathname === "/";

    if (!isHome) {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
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
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);
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
          <Costing>costhing</Costing>
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
