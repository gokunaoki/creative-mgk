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
`;

const Left = styled.div`
  margin-right: 50px;
`;
const Title = styled.h3`
  color: #696969;
  font-size: 2rem;
  width: 150px;
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  width: calc(95% - 150px);
  overflow: scroll;
  @media only screen and ${breakpoint.device.sm} {
    justify-content: flex-start;
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
`;

const SearchInput = styled.div`
  width: 150px;
  height: 30px;
  border: 1px solid #696969;
  border-radius: 30px;
`;
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
            <NavItem>
              <Button link="/posts/code">CODE</Button>
            </NavItem>
            <NavItem>
              <Button link="/posts/as-engineer">AS ENGINEER</Button>
            </NavItem>
            <NavItem>
              <Button link="/posts/life">LIFE</Button>
            </NavItem>
            <NavItem>
              <Button link="/about">ABOUT</Button>
            </NavItem>
          </NavList>
        </Right>
      </Wrapper>
    </Navigation>
  );
};

export default MainNav;
