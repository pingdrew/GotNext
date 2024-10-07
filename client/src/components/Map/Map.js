import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import GameMarker from './GameMarker';
import api from '../../services/api';

const Map = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            const response = await api.get('/games');
            setGames(response.data);
        };
        fetchGames();
    }, []);

    const mapContainerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: 37.7749, // Default to San Francisco
        lng: -122.4194
    };

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
                {games.map(game => (
                    <GameMarker key={game._id} game={game} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
