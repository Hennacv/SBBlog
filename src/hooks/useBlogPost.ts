import { useMutation } from "@tanstack/react-query";
import ky from "ky";
import type { Post } from "../types";

const TOKEN = process.env.NEXT_PUBLIC_BLOG_TOKEN;
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

const updateBlogPosts = async (data: FormData): Promise<Post> => {
  console.log("INSIDE KY", data, { dataTobeparswed: { ...data } });
  return await ky
    .post(`${ENDPOINT}/posts`, {
      body: data,
      headers: { token: TOKEN },
    })
    .json();
};

export const useBlogPost = () => {
  return useMutation((blogArticle: FormData) => updateBlogPosts(blogArticle), {
    onError: (e) => {
      console.error("Blog Post Mutation Error", e);
    },
  });
};
