import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import EditProfileForm from '../../components/Profile/EditProfileForm';

const EditProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await api.get('/users/me');
            setUser(response.data);
        };
        fetchUser();
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>Edit Profile</h2>
            <EditProfileForm user={user} onProfileUpdated={() => {}} />
        </div>
    );
};

export default EditProfilePage;
