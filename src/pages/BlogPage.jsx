import React, {useEffect, useState} from "react";

import {Link, useSearchParams} from "react-router-dom";
import BlogFilter from "../components/BlogFilter.jsx";

function BlogPage() {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get("post") || "";
    const latest = searchParams.has("latest");

    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }, []);

    return (
        <>
            <h1>Blog page</h1>
            <BlogFilter
                postQuery={postQuery}
                latest={latest}
                setSearchParams={setSearchParams}
            />
            <Link to="/blog/new">Create page</Link>
            {posts
                .filter((post) => {
                    return post.title.includes(postQuery) && post.id >= startsFrom;
                })
                .map((post) => {
                    return (
                        <Link key={post.id} to={`/blog/${post.id}`}>
                            <li>{post.title}</li>
                        </Link>
                    );
                })}
        </>
    );
}

export default BlogPage;
