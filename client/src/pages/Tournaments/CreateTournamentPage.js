import React, { useState } from 'react';
import TournamentForm from '../../components/Tournaments/TournamentForm';
import api from '../../services/api';

const CreateTournamentPage = () => {
    const [message, setMessage] = useState('');

    const handleCreateTournament = async (tournamentData) => {
        try {
            await api.post('/tournaments', tournamentData);
            setMessage('Tournament created successfully!');
        } catch (error) {
            setMessage('Error creating tournament.');
        }
    };

    return (
        <div>
            <h2>Create Tournament</h2>
            <TournamentForm onSubmit={handleCreateTournament} />
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateTournamentPage;
