import { useState, useEffect } from "react";
import {
  getAllPosts,
  getPostsByCategory,
  getPostsByTag,
} from "../../lib/index";
import { useRouter } from "next/router";

const useScroll = () => {
  const scrollFetchedData = async (
    postLength: number,
    category: string = "",
    tag: string = ""
  ) => {
    let response;
    if (category) {
      response = await getPostsByCategory(postLength, category);
    } else if (tag) {
      response = await getPostsByTag(postLength, tag);
    } else {
      response = await getAllPosts(postLength);
    }

    return response;
  };

  return {
    scrollFetchedData: scrollFetchedData,
  };
};

export default useScroll;
