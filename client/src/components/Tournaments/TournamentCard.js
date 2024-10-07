import React from 'react';

const TournamentCard = ({ tournament }) => {
    return (
        <div className="tournament-card">
            <h3>{tournament.name}</h3>
            <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
            <p>Location: {tournament.location}</p>
            <p>Description: {tournament.description}</p>
            <p>Participants: {tournament.participants.length}</p>
        </div>
    );
};

export default TournamentCard;
