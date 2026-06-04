import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MyPageIcon from "../assets/icons/MyPageIcon.svg";
import CartIcon from "../assets/icons/CartIcon.svg";
import { NavLink } from "react-router-dom";

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
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: transform 0.3s ease;
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(-100%)")};

  background: ${({ isTop }) => (isTop ? "transparent" : "transparent")};
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

export default function Header() {
  const moveSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 100;
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY < 100);

      if (currentScrollY < 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [hoverHeader, setHoverHeader] = useState(false);

  return (
    <>
      <HoverArea onMouseEnter={() => setHoverHeader(true)} />
      <HeaderContianer
        visible={visible || hoverHeader}
        isTop={isTop}
        onMouseEnter={() => setHoverHeader(true)}
        onMouseLeave={() => setHoverHeader(false)}
      >
        <NavLink to="/">
          <Costing onClick={() => moveSection("banner")}>costhing</Costing>
        </NavLink>

        <MenuContainer>
          <p onClick={() => moveSection("new")}>New</p>
          <p onClick={() => moveSection("collaboration")}>Collaboration</p>
          <p onClick={() => moveSection("products")}>Products</p>
          <p onClick={() => moveSection("about")}>About</p>
        </MenuContainer>
        <IconContainer>
          <NavLink>
            <img src={MyPageIcon} />
          </NavLink>
          <NavLink>
            <img src={CartIcon} />
          </NavLink>
        </IconContainer>
      </HeaderContianer>
    </>
  );
}
