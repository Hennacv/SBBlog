import ky from 'ky';
import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import Image from 'next/image';
const TOKEN = process.env.NEXT_PUBLIC_BLOG_TOKEN;
const apiEndpoint = process.env.NEXT_PUBLIC_HOSTNAME;

type Post = {
    id: number;
    category_id: number;
    created_at: string;
    updated_at: string;
    img_url: string;
    title: string;
    content: string;
    category: {
        name: string;
        created_at?: string;
        updated_at?: string;
    }
}

const getPosts = async ({ pageCount = 1 }) => await ky.get(`https://frontend-case-api.sbdev.nl/api/posts?page=${pageCount}&perPage=4&sortBy=title&sortDirection=desc`, {
    headers: {
        'content-type': 'application/json',
        "token": TOKEN
    }
}).json();

export function PostList() {

    const [currentPage, setCurrentPage] = useState(1);

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['posts'],
        queryFn: () => getPosts({ pageCount: currentPage }),
        })

    if (isLoading) {
    return <span>Be patient please...</span>
    }

    if (isError) {
    return <span>Error: {(error as Error).message}</span>
    }

    const addPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const posts: Post[] = (data as any).data;
    console.log({ posts })

    return (
        <div className="bg-white m-2.5 p-6">
            <div className="grid gap-6 lg:grid-cols-2">
                {posts.map((post) => (
                    <div key={post.id} className="flex flex-col overflow-hidden shadow-bl w-48">
                        <div className="relative max-16 text-[8px] bg-orange text-white italic">
                            <Image
                            className="w-full object-contain"
                            src={apiEndpoint + post.img_url}
                            alt=""
                            width={500}
                            height={500}
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
            </div>
            <div className="flex flex-col items-center">
                <button
                    onClick={addPage}
                    className="h-8 w-48 mt-6 rounded-[18px] border border-transparent bg-orange text-xxs text-white shadow-sm"
                    >
                    Meer laden
                </button>
            </div>
        </div>

    )
}
