import type { UseQueryResult } from "@tanstack/react-query";
import Image from "next/image";
import type { Post, Link } from "../types";

const apiEndpoint = process.env.NEXT_PUBLIC_HOSTNAME;

type Props = UseQueryResult<{
  isLoading: boolean;
  isError: boolean;
  error: Error;
  data: Post[];
  links: Link[];
}>;

export function PostList({ isLoading, isError, data, error }: Props) {
  if (isLoading) {
    return <span>Be patient please...</span>;
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>;
  }

  const posts: Post[] = data.data;
  // const links = data.links;
  // console.log({ links })

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex w-[200px] flex-col overflow-hidden shadow-bl"
        >
          <div className="relative bg-black text-[8px] italic text-white">
            <Image
              className="h-[72px] w-full object-cover opacity-80"
              src={apiEndpoint + post.img_url}
              alt=""
              width={200}
              height={72}
            />
            <p className="absolute bottom-0 left-0 mb-2 ml-4">
              {post.created_at.slice(0, 10)}
            </p>
            <p className="absolute bottom-0 right-0 mb-2 mr-4">
              {post.category.name}
            </p>
          </div>
          <div className="bg-white p-6 px-4 py-5">
            <p className="text-title font-semibold text-gray-900">
              {post.title}
            </p>
            <p className="mt-3 h-28 text-xs text-gray-500">{post.content}</p>
          </div>
        </div>
      ))}
    </>
  );
}
