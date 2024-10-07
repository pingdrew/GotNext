import React from 'react';
import { Marker } from '@react-google-maps/api';

const GameMarker = ({ game }) => {
    return (
        <Marker
            position={{
                lat: game.location.latitude,
                lng: game.location.longitude,
            }}
            title={game.title}
        />
    );
};

export default GameMarker;
