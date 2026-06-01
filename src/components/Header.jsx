import styled from "@emotion/styled";
import React from "react";
import MyPageIcon from "../assets/icons/MyPageIcon.svg";
import CartIcon from "../assets/icons/CartIcon.svg";
import { NavLink } from "react-router-dom";

const HeaderContianer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 63px;
  height: 100px;
  /* background: linear-gradient(to bottom, rgba(32, 47, 61, 1) 0%, rgba(32, 47, 61, 0) 100%); */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
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
  return (
    <HeaderContianer>
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
  );
}
