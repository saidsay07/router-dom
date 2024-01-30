import React, {useEffect, useState} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";

function SinglePage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    function goBack() {
        return navigate(-1);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((json) => setPost(json));
    }, [id]);

    return (
        <div>
            <button onClick={goBack}>go back</button>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/blog/${id}/edit`}>patch</Link>
                </>
            )}
        </div>
    );
}

export default SinglePage;
