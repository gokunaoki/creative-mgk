import styled, { css } from "styled-components";
import Tag from "./Tag";

interface TProps {
  singlePage: boolean;
}

const TagsList = ({ tags = null }) => {
  let tagsArr = [
    {
      name: "Next",
      backgroundColor: "black",
      color: "white",
    },
    {
      name: "React",
      backgroundColor: "#0288d1",
      color: "white",
    },
    {
      name: "React Native",
      backgroundColor: "#aab6fe",
      color: 'black',
    },
    {
      name: "Node.js",
      backgroundColor: "#4db6ac",
      color: "white",
    },
    {
      name: "JavaScript",
      backgroundColor: "#ecdb54",
      color: "black",
    },
    {
      name: "Algorithm",
      backgroundColor: "#e040fb",
      color: "white",
    },
  ];

  if (tags) {
    tagsArr = tagsArr.filter((tag) => {
      return tags.some((item) => tag.name.toLocaleLowerCase() == item);
    });
  }

  const displyaTags = tagsArr.map((tag) => (
    <Tag
      name={tag.name.toLocaleLowerCase()}
      bg={tag.backgroundColor}
      color={tag.color}
      singlePage={tags}
      key={tag.name}
    >
      {tag.name}
    </Tag>
  ));
  return <ListWrapper singlePage={tags}>{displyaTags}</ListWrapper>;
};

export default TagsList;

const ListWrapper = styled.ul<TProps>`
  display: ${(props) => (props.singlePage ? "flex" : "block")};
`;
