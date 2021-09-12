import React from "react";
import styled from "styled-components";
// import Image from "next/image";


const Profile: React.FC = () => {
  return (
    <IntroBox>
      <ProfileImage src="/images/mgk.jpg" width={100} height={100} />
      <Name>
        Mgk<span>age23</span>
      </Name>

      <Desc>
        <DescP> Frontend Engineer in Tokyo</DescP>
        <DescP>新卒2年目の2021年4月に未経験からエンジニアに転職。</DescP>
        <DescP>
          主にフロントエンドに関して発信しています。
        </DescP>
      </Desc>
    </IntroBox>
  );
};

export default Profile;

const IntroBox = styled.div`
  margin-bottom: 50px;
  color:${({theme})=>theme.text};
`;

const ProfileImage = styled.img`
  border-radius: 50%;
`;
const Name = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 10px;
  span {
    margin-left: 15px;
    font-weight: normal;
    font-size: 1.2rem;
  }
`;
const Desc = styled.div`
  font-size: 1.2rem;
  width: 90%;
  text-align: justify;
`;
const DescP = styled.p`
  line-height: 1.5;
  letter-spacing: 0.8px;

  &:nth-child(1) {
    margin-bottom: 20px;
    text-align: left;
  }
`;