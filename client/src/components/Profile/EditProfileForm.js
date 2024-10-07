import React, { useState } from 'react';
import api from '../../services/api';

const EditProfileForm = ({ user, onProfileUpdated }) => {
    const [bio, setBio] = useState(user.bio || '');
    const [profilePicture, setProfilePicture] = useState(user.profilePicture || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = { bio, profilePicture };
        await api.put(`/users/${user._id}`, updatedUser);
        onProfileUpdated(); // Notify parent component
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Your bio"
            />
            <input
                type="text"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
                placeholder="Profile picture URL"
            />
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default EditProfileForm;
