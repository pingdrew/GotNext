import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const GameDetailsPage = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        const fetchGameDetails = async () => {
            const response = await api.get(`/games/${id}`);
            setGame(response.data);
        };
        fetchGameDetails();
    }, [id]);

    if (!game) return <p>Loading...</p>;

    return (
        <div>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <p>Date: {new Date(game.date).toLocaleDateString()}</p>
            <p>Location: {game.location.name}</p>
        </div>
    );
};

export default GameDetailsPage;
