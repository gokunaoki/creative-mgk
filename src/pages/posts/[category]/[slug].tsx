import styled from "styled-components";
import SideBar from "../../../components/layout/SideBar/SideBar";
import PostDetail from "../../../components/posts/PostDetail";
import { getAllPosts, getPostBySlug } from "../../../../lib/index";
import Head from "../../../components/head";
import PostsList from "../../../components/posts/PostsList";
import { useRouter } from "next/router";
const PostDetailPage = ({ post, preview }) => {
  const router = useRouter();

  return (
    <>
      <Head
        title={`${post.fields.title} | Creative MGK`}
        description={post.fields.description}
        url={`https://creativemgk.com/posts/${router.query.category}/${router.query.slug}`}
        image={`https:${post.fields.coverImage.fields.file.url}`}
      />
      {/* <Head>
        <title>{post.fields.title}</title>
        <meta name="description" content={post.fields.description || ""} />
      </Head> */}
      <PostDetail post={post} preview={preview} />
    </>
  );
};

export default PostDetailPage;

export async function getStaticProps({ params, preview = false }) {
  const { slug } = params;
  const post = await getPostBySlug(slug, preview);
  return {
    props: {
      post: post,
      preview: preview,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts(0);

  const paths = allPosts.map((post) => ({
    params: {
      category: post.fields.category.fields.name,
      slug: post.fields.slug,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
