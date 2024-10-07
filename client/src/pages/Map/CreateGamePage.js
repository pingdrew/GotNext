import React, { useState } from 'react';
import api from '../../services/api';

const CreateGamePage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState({ name: '', latitude: '', longitude: '' });
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newGame = { title, description, location, date };
        await api.post('/games', newGame);
        // Reset form or redirect as needed
    };

    return (
        <div>
            <h2>Create a Pickup Game</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Game Title"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                <input
                    type="text"
                    value={location.name}
                    onChange={(e) => setLocation({ ...location, name: e.target.value })}
                    placeholder="Location Name"
                    required
                />
                <input
                    type="text"
                    value={location.latitude}
                    onChange={(e) => setLocation({ ...location, latitude: e.target.value })}
                    placeholder="Latitude"
                    required
                />
                <input
                    type="text"
                    value={location.longitude}
                    onChange={(e) => setLocation({ ...location, longitude: e.target.value })}
                    placeholder="Longitude"
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <button type="submit">Create Game</button>
            </form>
        </div>
    );
};

export default CreateGamePage;
