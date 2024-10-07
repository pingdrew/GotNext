import React from 'react';

const MessageThread = ({ messages }) => {
    return (
        <div className="message-thread">
            {messages.map((message) => (
                <div key={message._id} className="message">
                    <p><strong>{message.sender}</strong>: {message.content}</p>
                </div>
            ))}
        </div>
    );
};

export default MessageThread;
