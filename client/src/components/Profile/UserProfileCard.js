import React from 'react';

const UserProfileCard = ({ user }) => {
    return (
        <div className="profile-card">
            <h2>{user.username}</h2>
            <img src={user.profilePicture} alt={`${user.username}'s profile`} />
            <p>{user.bio}</p>
            <h4>Stats</h4>
            <p>Games Played: {user.stats.gamesPlayed}</p>
            <p>Wins: {user.stats.wins}</p>
            <p>Losses: {user.stats.losses}</p>
        </div>
    );
};

export default UserProfileCard;
