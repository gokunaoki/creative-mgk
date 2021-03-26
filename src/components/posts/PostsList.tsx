import styled from "styled-components";
import PostItem from "./PostItem";
import InfiniteScroll from "react-infinite-scroller";
import Spinner from "../shared/Spinner";
// interface Post{
//   title:string;
//   subTitle:string;
//   date:Date;

// interface PostsListProps{
//   posts:
// }

const PostsList = (props) => {
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    // position: relative;
    // z-index: 1;
  `;

  const Posts = styled.ul`
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
  `;
  const NoContent = styled.p`
    margin-top: 100px;
    font-size: 2.5rem;

    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
  `;
  const displayPosts =
    props.posts.length != 0 &&
    props.posts.map((item) => <PostItem key={item.sys.id} post={item} />);
  console.log(props.posts);
  return (
    <Wrapper>
      {props.posts.length != 0 ? (
        <InfiniteScroll
          loadMore={props.loadMore} //項目を読み込む際に処理するコールバック関数
          hasMore={props.hasMore} //読み込みを行うかどうかの判定
          loader={<Spinner />}
        >
          <Posts>{displayPosts}</Posts>
        </InfiniteScroll>
      ) : (
        <NoContent>Coming Soon</NoContent>
      )}
    </Wrapper>
  );
};

export default PostsList;
