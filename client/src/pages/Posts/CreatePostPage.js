import React, { useState } from 'react';
import MediaUploader from '../../components/Post/MediaUploader';
import api from '../../services/api';

const CreatePostPage = () => {
    const [content, setContent] = useState('');
    const [media, setMedia] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = { content, media };
        try {
            await api.post('/posts', postData);
            setMessage('Post created successfully!');
            setContent('');
            setMedia(null);
        } catch (error) {
            setMessage('Error creating post.');
        }
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's on your mind?"
                    required
                />
                <MediaUploader onUpload={setMedia} />
                <button type="submit">Post</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreatePostPage;
