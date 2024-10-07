import React from 'react';

const ProfileStats = ({ stats }) => {
    return (
        <div className="profile-stats">
            <h4>Profile Statistics</h4>
            <p>Games Played: {stats.gamesPlayed}</p>
            <p>Wins: {stats.wins}</p>
            <p>Losses: {stats.losses}</p>
        </div>
    );
};

export default ProfileStats;
