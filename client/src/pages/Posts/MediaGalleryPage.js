import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import PostList from '../../components/Post/PostList';

const MediaGalleryPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await api.get('/posts');
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Media Gallery</h2>
            <PostList posts={posts} />
        </div>
    );
};

export default MediaGalleryPage;
