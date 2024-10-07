import React, { useState } from 'react';
import api from '../../services/api';

const PasswordResetForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/reset-password', { email });
            setMessage('Check your email for reset instructions.');
        } catch (error) {
            setMessage('Error sending reset instructions.');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleReset}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Instructions</button>
            </form>
        </div>
    );
};

export default PasswordResetForm;
