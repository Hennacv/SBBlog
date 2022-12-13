import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import type { PostsRequest, Post, Link } from "../types";

type QueryProps = {
  data: Post[];
  links: Link[];
};

const TOKEN = process.env.NEXT_PUBLIC_BLOG_TOKEN;
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

const initData = {
  data: [],
  links: [],
};

const getPosts = async ({
  pageCount = 1,
  itemCount,
}: PostsRequest): Promise<QueryProps> =>
  await ky
    .get(
      `${ENDPOINT}/posts?page=${pageCount}&perPage=${itemCount}&sortBy=title&sortDirection=asc`,
      {
        headers: {
          "Content-Type": "application/json",
          token: TOKEN,
        },
      },
    )
    .json();

export const usePosts = ({ pageCount = 1, itemCount }: PostsRequest) =>
  useQuery<QueryProps>(
    [`posts-${pageCount}`],
    () => getPosts({ pageCount, itemCount }),
    {
      initialData: initData,
      refetchOnWindowFocus: false,
    },
  );
