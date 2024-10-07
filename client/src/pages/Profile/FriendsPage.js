import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const FriendsPage = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            const response = await api.get('/users/me/friends');
            setFriends(response.data);
        };
        fetchFriends();
    }, []);

    return (
        <div>
            <h2>Your Friends</h2>
            <ul>
                {friends.map((friend) => (
                    <li key={friend._id}>{friend.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default FriendsPage;
