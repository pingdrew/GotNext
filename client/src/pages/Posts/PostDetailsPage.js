import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const PostDetailsPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await api.get(`/posts/${id}`);
            setPost(response.data);
        };
        fetchPost();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h3>Post Details</h3>
            <p>{post.content}</p>
            {post.media && <img src={post.media} alt="Post media" />}
            <p>Posted on: {new Date(post.createdAt).toLocaleString()}</p>
        </div>
    );
};

export default PostDetailsPage;
