import React, { useState } from 'react';
import api from '../../services/api';

const MessageInput = ({ threadId, onMessageSent }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (message.trim()) {
            await api.post(`/messages/${threadId}`, { content: message });
            setMessage('');
            onMessageSent(); // Callback to refresh messages
        }
    };

    return (
        <form onSubmit={handleSendMessage}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                required
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageInput;
