import React from "react";
import Link from "next/link";
import styled from "styled-components";
interface ButtonProps {
  link?: string;
}


const Button: React.FC<ButtonProps> = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <LinkButton>{props.children}</LinkButton>
      </Link>
    );
  }
  return <div></div>;
};

export default Button;

const LinkButton = styled.a`
  color: #696969;
  cursor: pointer;
`;