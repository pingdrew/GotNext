import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ExploreMap from '../../components/Explore/ExploreMap';
import LocationCard from '../../components/Explore/LocationCard';

const ExplorePage = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await api.get('/locations');
                setLocations(response.data);
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };
        fetchLocations();
    }, []);

    return (
        <div>
            <h2>Explore Locations</h2>
            <ExploreMap locations={locations} />
            <div className="location-list">
                {locations.map(location => (
                    <LocationCard key={location.id} location={location} />
                ))}
            </div>
        </div>
    );
};

export default ExplorePage;
