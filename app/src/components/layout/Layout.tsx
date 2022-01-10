import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import MainNav from "./MainNav/MainNav";
import styled, { ThemeProvider } from "styled-components";
import SideBar from "./SideBar/SideBar";
import { useRouter } from "next/router";
import breakpoint from "../../common/breakpoint";
import { useDarkMode } from "../../hooks/useDarkMode";
import dynamic from "next/dynamic";

const ColorPick = dynamic(() => import("../shared/ColorPick"));

const Layout: React.FC = (props) => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);
  const route = useRouter();
  const currentPath = route.pathname;
  //isSingle時はsideBar非表示かつmainを100%に

  const light = {
    background: "white",
    text: "black",
    postText: "rgba(41, 41, 41, 1)",
    box: "white",
    shadow: "rgb(0 0 0 / 10%) 0px 0px 7px 1px",
  };
  const dark = {
    background: "#282c35",
    text: "#fff",
    postText: "#fff",
    box: "#363c48",
    shadow: "0 2px 15px 0 rgba(26,26,27,0.637)",
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const isSingle = currentPath == "/about";
  if(isLoading)return null
  
  return (
    <>
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <MainNav />
        <Home>
          <StyledColorPickerArea>
            <ColorPick isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </StyledColorPickerArea>

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
      </ThemeProvider>
    </>
  );
};

export default Layout;

const Home = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 30px;
  background: ${({ theme }) => theme.background};
`;

const StyledColorPickerArea = styled.div`
  width: 90%;
  max-width: 1000px;
  padding: 15px 0 12px 0;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  @media only screen and ${breakpoint.device.lg} {
    max-width: 1200px;
  }
`;
const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media only screen and ${breakpoint.device.lg} {
    max-width: 1200px;
  }
`;

const PageArea = styled.main<{ isSingle: boolean }>`
  width: ${({ isSingle }) => (isSingle ? "100%" : "65%")};
  min-height: calc(100vh - 100px);
  position: relative;
  z-index: 1;
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
