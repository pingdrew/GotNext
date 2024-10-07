import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import LocationCard from '../../components/Explore/LocationCard';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [locations, setLocations] = useState([]);

    const handleSearch = async () => {
        const response = await api.get(`/locations/search?query=${searchQuery}`);
        setLocations(response.data);
    };

    return (
        <div>
            <h2>Search Locations</h2>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for locations..."
            />
            <button onClick={handleSearch}>Search</button>
            <div className="location-list">
                {locations.map(location => (
                    <LocationCard key={location.id} location={location} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
