import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const LayoutContainer = styled.div`
  width: 100%;
`;
const MainContainer = styled.main`
  width: 100%;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

export default function MainLayout() {
  return (
    <LayoutContainer>
      <MainContainer>
        <Header />
        <Outlet />
      </MainContainer>
    </LayoutContainer>
  );
}
