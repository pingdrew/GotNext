import React from 'react';

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <p>Date: {new Date(game.date).toLocaleDateString()}</p>
            <p>Location: {game.location.name}</p>
        </div>
    );
};

export default GameCard;
