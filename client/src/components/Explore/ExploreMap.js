import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ExploreMap = ({ locations }) => {
    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                id="explore-map"
                mapContainerStyle={{ height: "400px", width: "100%" }}
                zoom={10}
                center={{ lat: locations[0]?.lat || 0, lng: locations[0]?.lng || 0 }}
            >
                {locations.map((location) => (
                    <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default ExploreMap;
