import styled from "styled-components";
import PostItem from "./PostItem";
import InfiniteScroll from "react-infinite-scroller";
import Spinner from "../shared/Spinner";
import breakpoint from "../../common/breakpoint";

const PostsList = (props) => {
  const displayPosts =
    props.posts.length != 0 &&
    props.posts.map((item) => <PostItem key={item.sys.id} post={item} />);
    console.log(props.theme)
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

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
  `;

  const Posts = styled.ul`
    display: flex;
    flex-wrap: wrap;
    @media only screen and ${breakpoint.device.xs} {
      display: block;
    }
  `;
  const NoContent = styled.p`
    margin-top: 100px;
    font-size: 2.5rem;
  `;