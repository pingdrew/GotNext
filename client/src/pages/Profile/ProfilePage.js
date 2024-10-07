import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import UserProfileCard from '../../components/Profile/UserProfileCard';
import EditProfileForm from '../../components/Profile/EditProfileForm';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await api.get('/users/me'); // Adjust according to your endpoint
            setUser(response.data);
        };
        fetchUser();
    }, []);

    const handleProfileUpdated = () => {
        // Refresh user data after updating
        const fetchUser = async () => {
            const response = await api.get('/users/me');
            setUser(response.data);
        };
        fetchUser();
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <UserProfileCard user={user} />
            <EditProfileForm user={user} onProfileUpdated={handleProfileUpdated} />
        </div>
    );
};

export default ProfilePage;
