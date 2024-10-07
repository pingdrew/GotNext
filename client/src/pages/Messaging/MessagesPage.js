import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import MessageList from '../../components/Messaging/MessageList';

const MessagesPage = () => {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const fetchThreads = async () => {
            const response = await api.get('/messages');
            setThreads(response.data);
        };
        fetchThreads();
    }, []);

    return (
        <div>
            <h2>Messages</h2>
            <MessageList threads={threads} />
        </div>
    );
};

export default MessagesPage;
