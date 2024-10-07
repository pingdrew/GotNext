import React, { useState } from 'react';

const CreatePostForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        content: '',
        media: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, media: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                name="content"
                placeholder="What's on your mind?"
                onChange={handleInputChange}
                required
            />
            <input type="file" name="media" onChange={handleFileChange} />
            <button type="submit">Post</button>
        </form>
    );
};

export default CreatePostForm;
