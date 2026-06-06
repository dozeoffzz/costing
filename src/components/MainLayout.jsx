import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useRef } from "react";

const LayoutContainer = styled.div`
  max-width: 1920px;
`;
const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: auto;

  background-color: #0c0c0c;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

export default function MainLayout() {
  const scrollRef = useRef(null);
  return (
    <LayoutContainer>
      <Header scrollRef={scrollRef} />
      <MainContainer ref={scrollRef}>
        <Outlet context={{ scrollRef }} />
      </MainContainer>
    </LayoutContainer>
  );
}
