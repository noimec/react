import { useMemo } from "react";
import { Post } from "../App";

export const useSortedPosts = (posts: Post[], sort: string) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a: any, b: any) => a[sort].localeCompare(b[sort]));
        }

        return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts: Post[], sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}