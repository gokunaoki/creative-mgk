import styled from "styled-components";
import breakpoint from "../../../common/breakpoint";
const FooterComponent = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #fafafa;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
   @media only screen and ${breakpoint.device.lg} {
    max-width: 1200px;
  }
`;
const CopyRight = styled.p`
  color: #8c8c8c;
  font-size: 1.4rem;
  @media only screen and ${breakpoint.device.xs} {
    font-size: 1rem;
  }
`;
const Footer = () => {
  return (
    <FooterComponent>
      <Wrapper>
        <CopyRight>
          Copyright @ 2021 Creative MGK. All rights reserved.
        </CopyRight>
      </Wrapper>
    </FooterComponent>
  );
};

export default Footer;
