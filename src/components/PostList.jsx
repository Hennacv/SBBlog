import ky from 'ky';
import { useQuery } from "@tanstack/react-query";

const getPosts = async () => await ky.get('https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=10&sortBy=title&sortDirection=desc', {
    headers: {
        'content-type': 'application/json',
        "token": "pj11daaQRz7zUIH56B9Z"
    }
}).json();

export function PostList() {
    // console.log(json);
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        })

    if (isLoading) {
    return <span>Be patient please...</span>
    }

    if (isError) {
    return <span>Error: {error.message}</span>
    }
    const posts = data.data;

    console.log(posts);
    // We can assume by this point that `isSuccess === true`
    return (
    // <pre>{JSON.stringify(data.data, null, 2)}</pre>

    <div>
        <ol>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
                ))}
        </ol>

    </div>

    )
}