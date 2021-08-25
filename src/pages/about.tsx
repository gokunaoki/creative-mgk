import React from "react";
import Head from "../components/head";
import styled from "styled-components";

const about = () => {
  return (
    <>
      <Head
        title="About | Creative MGK"
        description="フロントエンドに関するプログラミングやエンジニアとしての実務経験を発信します"
        url="https://creativemgk.com/about"
        image="https://images.ctfassets.net/68ugjdsn6k9b/3JUtW9MUASCvw84IIwM8kS/b5e2a84ef850f09d5fe5162c22d601ad/Abstract_5.png?h=250"
      />
      <About>About</About>
      <Coming>coming soon</Coming>
    </>
  );
};

export default about;

const About = styled.p`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const Coming = styled.p`
  margin-top: 100px;
  font-size: 2.5rem;
`;