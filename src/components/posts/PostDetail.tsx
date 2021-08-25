import styled from "styled-components";
// import Image from "next/image";
import Moment from "react-moment";
const ReactMarkdownWithHtml = require("react-markdown/with-html");
import { Prism as SyntaxHightlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import TagsList from "../layout/SideBar/Tags/TagsList";


const PostDetail = ({ post, preview }) => {
  const customRenderers = {
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];

        return <img src={`https:${image.url}`} alt={image.alt} />;
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { language, value } = code;
      return (
        <SyntaxHightlighter
          language={language}
          children={value}
          style={atomDark}
        />
      );
    },
  };

  return (
    <Post>
      <Title>{post.fields.title}</Title>
      {preview && (
        <a
          href="/api/exit-preview"
          className="underline hover:text-cyan duration-200 transition-colors"
        >
          Exit
        </a>
      )}
      <PostInfo>
        {post.metadata.tags[0] && (
          <TagsList tags={post.metadata.tags.map((tag) => tag.sys.id)} />
        )}
        <Moment format="YYYY/MM/DD">{post.fields.date}</Moment>
      </PostInfo>
      <StyledMark>
        <ReactMarkdownWithHtml renderers={customRenderers} allowDangerousHtml>
          {post.fields.content}
        </ReactMarkdownWithHtml>
      </StyledMark>
    </Post>
  );
};

export default PostDetail;

const Post = styled.article`
  width: 100%;
  height: 100%;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 3rem;
  margin-bottom: 30px;
  overflow-wrap: break-word;
`;

const StyledMark = styled.div`
  color: rgba(41, 41, 41, 1);
  font-size: 1.8rem;
  letter-spacing: 1px;

  & > h3 {
    font-size: 3rem;
    margin-bottom: 20px;
    margin-top: 40px;
    &:before {
      content: "|";
      margin-right: 5px;
    }
  }
  & > h4 {
    font-size: 2.4rem;
    margin-bottom: 20px;
    margin-top: 40px;
    &:before {
      content: "|";
      margin-right: 5px;
    }
  }

  & > p {
    margin-top: 18px;
    margin-bottom: 25px;
    line-height: 1.8;
    & > strong {
      font-weight: bold;
      color: rgba(41, 41, 41, 1);
    }
    & > a {
      color: #0097a7;
      font-weight: bold;
    }
    & > span {
      color: #f06292;
    }
  }
  & > strong {
    font-weight: bold;
  }
  & > pre {
    margin-top: 50px !important;
    margin-bottom: 50px !important;
  }
  & > img {
    width: 100%;
    margin-bottom: 20px;
  }
  & > ul,
  ol {
    padding-left: 10px;
    margin-bottom: 25px;
    counter-reset: item;
  }
  & > ul > li {
    &:before {
      content: "-";
      margin-right: 20px;
      line-height: 2;
    }
    & > strong {
      font-weight: bold;
      color: rgba(41, 41, 41, 1);
    }
    & > a {
      color: #0097a7;
      font-weight: bold;
    }
  }
  & > ol > li {
    &:before {
      counter-increment: item;
      content: counter(item);
      margin-right: 20px;
      line-height: 2;
    }
    & > strong {
      font-weight: bold;
      color: rgba(41, 41, 41, 1);
    }
    & > a {
      color: #0097a7;
      font-weight: bold;
    }
  }
`;

const PostInfo = styled.div`
  font-size: 1.2rem;
  margin-bottom: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgb(234, 234, 234);

  ul {
    margin-bottom: 20px;
  }
  time {
    margin-right: 60px;
  }
`;