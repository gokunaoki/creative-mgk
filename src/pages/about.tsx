import React from "react";
import Head from "next/head";
import styled from "styled-components";
const About = styled.p`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const Coming = styled.p`
  margin-top: 100px;
  font-size: 2.5rem;
`;
const about = () => {
  return (
    <>
      <Head>
        <title>about</title>
      </Head>
      <About>About</About>
      <Coming>coming soon</Coming>
    </>
  );
};

export default about;
