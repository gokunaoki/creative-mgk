import React from "react";
import styled from "styled-components";
import Button from "../../shared/Button";
import breakpoint from "../../../common/breakpoint";

const Navigation = styled.nav`
  width: 100%;
  height: 50px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
   @media only screen and ${breakpoint.device.lg} {
    max-width: 1200px;
  }
`;

const Left = styled.div`
  margin-right: 50px;
  @media only screen and ${breakpoint.device.xs} {
    margin-right: 20px;
  }
`;
const Title = styled.h3`
  font-size: 2rem;
  width: 150px;
  a {
    color: black;
    font-weight: bold;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 1.6rem;
    width: 120px;
  }
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  width: calc(95% - 150px);
  overflow: scroll;
  @media only screen and ${breakpoint.device.xs} {
    justify-content: flex-start;
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and ${breakpoint.device.sm} {
    flex-shrink: 0;
  }
`;
const NavItem = styled.li`
  font-size: 1.6rem;
  &:not(:last-child) {
    margin-right: 40px;
  }
  a {
    padding: 10px 0;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 1.4rem;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const SearchInput = styled.div`
  width: 150px;
  height: 30px;
  border: 1px solid #696969;
  border-radius: 30px;
`;

const NavItems = [
  { link: "/posts/code", name: "CODE" },
  { link: "/posts/career", name: "CAREER" },
  { link: "/posts/life", name: "LIFE" },
  { link: "/about", name: "ABOUT" },
];
const MainNav: React.FC = () => {
  return (
    <Navigation>
      <Wrapper>
        <Left>
          <Title>
            <Button link="/">Creative MGK</Button>
          </Title>
        </Left>

        <Right>
          <NavList>
            {NavItems.map((item) => (
              <NavItem>
                <Button link={item.link}>{item.name}</Button>
              </NavItem>
            ))}
          </NavList>
        </Right>
      </Wrapper>
    </Navigation>
  );
};

export default MainNav;
