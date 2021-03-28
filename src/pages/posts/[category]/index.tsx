import Head from "next/head";
import styled from "styled-components";
import SideBar from "../../../components/layout/SideBar/SideBar";
import PostsList from "../../../components/posts/PostsList";
import { getPostsByCategory } from "../../../../lib/index";
import { useState, useEffect } from "react";
import useScroll from "../../../hooks/scroll-loading";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

const CategoryName = styled.p`
  font-size: 2rem;
  margin-bottom: 30px;
`;
const CategoryPage = (props) => {
  const router = useRouter();
  const [posts, setPosts] = useState(props.posts);
  const [hasMore, setHasMore] = useState(props.posts.length > 6);

  //routerを関してして、中身が変わればsetする！！！！！！！！！！！！　state管理むず

  useEffect(() => {
    setPosts(props.posts);
    setHasMore(props.posts.length >= 6 ? true : false);
  }, [router.query.category]);

  const { scrollFetchedData } = useScroll();

  const loadMore = () => {
    setTimeout(async () => {
      const currentLength = posts.length;
      const category = router.query.category;
      const response = await scrollFetchedData(
        currentLength,
        category as string
      );

      if (response.length < 1) {
        setHasMore(false);
      } else {
        setPosts((prev) => [...prev, ...response]);
      }
    }, 2000);
  };

  return (
    <>
      <CategoryName>{router.query.category}</CategoryName>
      <PostsList posts={posts} loadMore={loadMore} hasMore={hasMore} />
    </>
  );
};

export default CategoryPage;

export async function getStaticProps(context) {
  const { params } = context;
  const { category } = params;
  const posts = await getPostsByCategory(0, category);

  return {
    props: {
      posts: posts,
    },
  };
}

export function getStaticPaths() {
  const categories = ["code", "career", "life"];
  const paths = categories.map((item) => ({ params: { category: item } }));
 
  return {
    paths: paths,
    fallback: false,
  };
}
