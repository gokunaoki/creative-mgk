import Head from "next/head";
import PostsList from "../components/posts/PostsList";
import { getAllPosts } from "../../lib/index";
import { useState } from "react";
import useScroll from "../hooks/scroll-loading";

const HomePage = (props) => {
  const [posts, setPosts] = useState(props.posts);
  const [hasMore, setHasMore] = useState(props.posts.length > 6);
  const { scrollFetchedData } = useScroll();

  const loadMore = () => {
    setTimeout(async () => {
      const currentLength = posts.length;
      const response = await scrollFetchedData(currentLength);

      if (response.length < 1) {
        setHasMore(false);
        return [];
      }
      setPosts((prev) => [...prev, ...response]);
    }, 2000);
  };
  return (
    <>
      <PostsList posts={posts} loadMore={loadMore} hasMore={hasMore} />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const posts = await getAllPosts(0);

  return {
    props: {
      posts: posts,
    },
  };
}
