import ky from 'ky';
import { useQuery } from "@tanstack/react-query";
import Image from 'next/image';
import type { Post } from "../types";

type Props = {
itemCount: number;
pageCount?: number;
currentPage?: number;
}

const TOKEN = process.env.NEXT_PUBLIC_BLOG_TOKEN;
const apiEndpoint = process.env.NEXT_PUBLIC_HOSTNAME;

type PostsRequest = {
pageCount: number;
itemCount: number;
}

const getPosts = async ({ pageCount = 1, itemCount }: PostsRequest) => await ky.get(`https://frontend-case-api.sbdev.nl/api/posts?page=${pageCount}&perPage=${itemCount}&sortBy=title&sortDirection=asc`, {
    headers: {
        'content-type': 'application/json',
        "token": TOKEN
    }
}).json();

export function PostList({ itemCount, currentPage }: Props) {

    const { isLoading, isError, data, error } = useQuery([`posts-${currentPage}`],
         () => getPosts({ pageCount: currentPage, itemCount: itemCount }), {
        refetchOnWindowFocus: false,
    });

    if (isLoading) {
    return <span>Be patient please...</span>
    }

    if (isError) {
    return <span>Error: {(error as Error).message}</span>
    }

    console.log({ isLoading })

    const posts: Post[] = (data as any).data;

    return (
            <>
                {posts.map((post) => (
                    <div key={post.id} className="flex flex-col overflow-hidden shadow-bl w-[200px]">
                        <div className="relative text-[8px] text-white italic">
                            <Image
                            className="h-[72px] w-full object-cover"
                            src={apiEndpoint + post.img_url}
                            alt=""
                            width={200}
                            height={72}
                            />
                            <p className="absolute bottom-0 left-0 mb-2 ml-4">{post.created_at.slice(0,10)}</p>
                            <p className="absolute bottom-0 right-0 mb-2 mr-4">{post.category.name}</p>
                        </div>
                        <div className="px-4 py-5 bg-white p-6">
                                <p className="text-title font-semibold text-gray-900">{post.title}</p>
                                <p className="mt-3 h-28 text-xs text-gray-500">{post.content}</p>
                        </div>
                    </div>
                ))}
            </>
    )
}
