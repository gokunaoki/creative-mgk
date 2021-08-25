import styled from "styled-components";
import Link from "next/link";

const TagItem = styled.li<{ singlePage: boolean }>`
  margin: ${(props) => (props.singlePage ? "0 15px 0 0 " : "0 0 20px 0")};
`;

const Tag = (props) => {
  const { name, bg, color, singlePage = false } = props;
  return (
    <TagItem singlePage={singlePage}>
      <Link href={`/posts/tags/${name}`}>
        <StyledLink bg={bg} color={color}>
          {props.children}
        </StyledLink>
      </Link>
    </TagItem>
  );
};

export default Tag;

const StyledLink = styled.a<{ bg: string; color: string }>`
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: 5px 20px;
  font-size: 1.2rem;
  border-radius: 40px;
  cursor: pointer;
`;