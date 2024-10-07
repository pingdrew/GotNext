import React from 'react';

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <p>{post.content}</p>
            {post.media && <img src={post.media} alt="Post media" />}
            <p>Posted on: {new Date(post.createdAt).toLocaleString()}</p>
        </div>
    );
};

export default PostCard;
