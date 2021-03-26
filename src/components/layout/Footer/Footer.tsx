import styled from "styled-components";

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
`;
const CopyRight = styled.p`
  color: #8c8c8c;
  font-size: 1.4rem;
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
