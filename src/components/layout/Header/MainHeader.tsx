import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Header = styled.header`
  width: 100%;
  height: 50px;
  padding: 13px 0;
  text-align: center;
  background-color: black;
`;
const MainHeader: React.FC = () => {
  return (
    <Header>
      <Logo />
    </Header>
  );
};

export default MainHeader;
