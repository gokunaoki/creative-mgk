import Head from "../../../components/head";
import styled from "styled-components";
import SideBar from "../../../components/layout/SideBar/SideBar";
import PostsList from "../../../components/posts/PostsList";
import { getPostsByTag } from "../../../../lib/index";
import { useState, useEffect } from "react";
import useScroll from "../../../hooks/scroll-loading";
import { useRouter } from "next/router";

const CategoryPage = (props) => {
  const router = useRouter();
  const [posts, setPosts] = useState(props.posts);
  const [hasMore, setHasMore] = useState(props.posts.length > 6);

  //routerを関してして、中身が変わればsetする！！！！！！！！！！！！　state管理むず

  useEffect(() => {
    setPosts(props.posts);
    setHasMore(props.posts.length >= 6 ? true : false);
  }, [router.query.tag]);

  const { scrollFetchedData } = useScroll();

  const loadMore = () => {
    setTimeout(async () => {
      const currentLength = posts.length;
      const tag = router.query.tag;
      const response = await scrollFetchedData(
        currentLength,
        null,
        tag as string
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
      <Head
        title={`${router.query.tag} | Creative MGK`}
        description="フロントエンドに関する知識やエンジニアとしての実務経験を発信します"
        url={`https://creativemgk.com/${router.query.tag}`}
        image="https://images.ctfassets.net/68ugjdsn6k9b/3JUtW9MUASCvw84IIwM8kS/b5e2a84ef850f09d5fe5162c22d601ad/Abstract_5.png?h=250"
      />
      <TagName>{`#${router.query.tag}`}</TagName>
      <PostsList posts={posts} loadMore={loadMore} hasMore={hasMore} />
    </>
  );
};

export default CategoryPage;

export async function getStaticProps(context) {
  const { params } = context;
  const { tag } = params;
  const posts = await getPostsByTag(0, tag);

  return {
    props: {
      posts: posts,
    },
  };
}

export function getStaticPaths() {
  const tags = [
    "react",
    "next",
    "react native",
    "node.js",
    "javascript",
    "algorithm",
  ];
  const paths = tags.map((item) => ({ params: { tag: item } }));

  return {
    paths: paths,
    fallback: false,
  };
}

const TagName = styled.p`
  font-size: 2rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text};
`;
