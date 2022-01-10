import Head from "../components/head";
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
      <Head
        title="Creative MGK"
        description="フロントエンドに関するプログラミングやエンジニアとしての実務経験を発信します"
        url="https://creativemgk.com/"
        image="https://images.ctfassets.net/68ugjdsn6k9b/3JUtW9MUASCvw84IIwM8kS/b5e2a84ef850f09d5fe5162c22d601ad/Abstract_5.png?h=250"
      />
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
