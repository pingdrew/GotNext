import React from 'react';

const LocationCard = ({ location }) => {
    return (
        <div className="location-card">
            <h3>{location.title}</h3>
            <p>{location.description}</p>
            <p>Address: {location.address}</p>
            <a href={`/map/${location.id}`}>View on Map</a>
        </div>
    );
};

export default LocationCard;
