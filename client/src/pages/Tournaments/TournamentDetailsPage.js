import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const TournamentDetailsPage = () => {
    const { id } = useParams();
    const [tournament, setTournament] = useState(null);

    useEffect(() => {
        const fetchTournament = async () => {
            const response = await api.get(`/tournaments/${id}`);
            setTournament(response.data);
        };
        fetchTournament();
    }, [id]);

    if (!tournament) return <div>Loading...</div>;

    return (
        <div>
            <h3>{tournament.name}</h3>
            <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
            <p>Location: {tournament.location}</p>
            <p>Description: {tournament.description}</p>
            <p>Participants: {tournament.participants.join(', ')}</p>
        </div>
    );
};

export default TournamentDetailsPage;
