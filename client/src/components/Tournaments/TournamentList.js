import React from 'react';
import TournamentCard from './TournamentCard';

const TournamentList = ({ tournaments }) => {
    return (
        <div className="tournament-list">
            {tournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
        </div>
    );
};

export default TournamentList;
