import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import MessageThread from '../../components/Messaging/MessageThread';
import MessageInput from '../../components/Messaging/MessageInput';

const MessageThreadPage = () => {
    const { id } = useParams();
    const [messages, setMessages] = useState([]);

    // Memoize fetchMessages using useCallback
    const fetchMessages = useCallback(async () => {
        try {
            const response = await api.get(`/messages/${id}`);
            setMessages(response.data.messages);
        } catch (error) {
            console.error("Error fetching messages:", error);
            // Optionally show an error message to the user
        }
    }, [id]); // Include id as a dependency

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]); // Now we can safely include fetchMessages

    const handleMessageSent = () => {
        fetchMessages();
    };

    return (
        <div>
            <h2>Message Thread</h2>
            <MessageThread messages={messages} />
            <MessageInput threadId={id} onMessageSent={handleMessageSent} />
        </div>
    );
};

export default MessageThreadPage;
