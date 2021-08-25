import Link from "next/link";
import styled from "styled-components";
import Moment from "react-moment";
import breakpoint from "../../common/breakpoint";
const PostItem = ({ post }) => {
  const { title, slug, coverImage, date, category } = post.fields;

  const { tags } = post.metadata;

  //tag表示の優先順位
  const tagsOrder = ["next", "react", "javascript", "algorithm"];
  const displayTagNum = tagsOrder.findIndex((tagName) =>
    tags.some((tag) => tagName == tag.sys.id)
  );
  const tagName = tags[0] ? tagsOrder[displayTagNum] : null;

  const categoryName =
    category.fields.name === "asEngineer"
      ? "as-engineer"
      : post.fields.category.fields.name;

  const imagePath = coverImage.fields.file.url;
  return (
    <Post>
      <Link href={`/posts/${categoryName}/${slug}`}>
        <Inner>
          <ImageWrapper src={imagePath}>
            <CoverContent>
              {tagName && <ContentTag>{tagName}</ContentTag>}
            </CoverContent>
          </ImageWrapper>

          <PostInfo>
            <PostName>{title}</PostName>
            <Moment format="YYYY/MM/DD">{date}</Moment>
          </PostInfo>
        </Inner>
      </Link>
    </Post>
  );
};

export default PostItem;

const Post = styled.li`
  position: relative;
  width: 47.5%;
  margin-bottom: 5%;
  background: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 7px 1px;
  &:not(:nth-child(2n)) {
    margin-right: 5%;
  }
  @media only screen and ${breakpoint.device.xs} {
    width: 100%;
  }
`;

const Inner = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const PostInfo = styled.div`
  width: 100%;
  padding: 5%;
`;

const PostName = styled.p`
  font-size: 1.6rem;
  margin-bottom: 30px;
  word-break: break-all;
`;

const ImageWrapper = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  width: 100%;
  height: 0;
  padding-top: 65%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;
const CoverContent = styled.div`
  width: 100%;
  height: 0;
  padding-top: 65%;

  position: absolute;
  top: 0;
  right: 0;
`;
const ContentTag = styled.p`
  position: absolute;
  top: 5%;
  left: 5%;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;

  background: rgba(0, 0, 0, 0.3);
  border-radius: 40px;
  padding: 2px 15px;
`;
