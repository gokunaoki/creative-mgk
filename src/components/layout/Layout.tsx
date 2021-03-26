import Footer from "./Footer/Footer";
import MainHeader from "./Header/MainHeader";
import MainNav from "./MainNav/MainNav";
import styled from "styled-components";
import SideBar from "./SideBar/SideBar";
import { useRouter } from "next/router";
import breakpoint from "../../common/breakpoint";
const Home = styled.div`
  width: 100%;
  min-height: 100vh;
  //header50px
  padding-top: 100px;
  padding-bottom: 30px;
`;
const Container = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const PageArea = styled.main<{ isSingle: boolean }>`
  width: ${({ isSingle }) => (isSingle ? "100%" : "65%")};
  height: 100%;
  @media only screen and ${breakpoint.device.sm} {
    width: 100%;
  }
`;

const SideArea = styled.aside`
  width: 25%;
  height: 100%;
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
`;
const Layout: React.FC = (props) => {
  const route = useRouter();
  const currentPath = route.pathname;
  //isSingle時はsideBar非表示かつmainを100%に

  const isSingle = currentPath == "/about";
  return (
    <>
      {/* <MainHeader /> */}
      <MainNav />
      <Home>
        <Container>
          {!isSingle && (
            <SideArea>
              <SideBar />
            </SideArea>
          )}
          <PageArea isSingle={isSingle}>{props.children}</PageArea>
        </Container>
      </Home>
      <Footer />
    </>
  );
};

export default Layout;
