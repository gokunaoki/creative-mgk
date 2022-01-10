import React from "react";
import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { GetServerSidePropsContext } from "next";
import { getAllPosts } from "../../../lib/index";
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const posts = await getAllPosts(0);
  const fields = posts.map((post) => ({
    loc: `https://creativemgk.com/posts/${post.fields.category.fields.name}/${post.fields.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 0.7,
  }));

  return getServerSideSitemap(ctx, fields);
};

const Page = () => null;
export default Page;
