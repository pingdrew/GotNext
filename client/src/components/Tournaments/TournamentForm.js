import React, { useState } from 'react';

const TournamentForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Tournament Name"
                onChange={handleInputChange}
                required
            />
            <input
                type="date"
                name="date"
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                onChange={handleInputChange}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
                required
            />
            <button type="submit">Create Tournament</button>
        </form>
    );
};

export default TournamentForm;
