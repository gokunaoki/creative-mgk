import styled from "styled-components";
import SideBar from "../../../components/layout/SideBar/SideBar";
import PostDetail from "../../../components/posts/PostDetail";
import { getAllPosts, getPostBySlug } from "../../../../lib/index";

const PostDetailPage = ({ post }) => {
  return <PostDetail post={post} />;
};

export default PostDetailPage;

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = await getPostBySlug(slug);
  return {
    props: {
      post: post,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts(0);

  const paths = allPosts.map((post) => ({
    params: {
      category:
        post.fields.category.fields.name === "asEngineer"
          ? "as-engineer"
          : post.fields.category.fields.name,
      slug: post.fields.slug,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
