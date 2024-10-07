import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import TournamentList from '../../components/Tournaments/TournamentList';

const TournamentsPage = () => {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        const fetchTournaments = async () => {
            const response = await api.get('/tournaments');
            setTournaments(response.data);
        };
        fetchTournaments();
    }, []);

    return (
        <div>
            <h2>Tournaments</h2>
            <TournamentList tournaments={tournaments} />
        </div>
    );
};

export default TournamentsPage;
