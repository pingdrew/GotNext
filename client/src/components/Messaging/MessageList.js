import React from 'react';
import MessageThread from './MessageThread';

const MessageList = ({ threads }) => {
    return (
        <div className="message-list">
            {threads.map((thread) => (
                <div key={thread._id} className="message-thread-item">
                    <h3>{thread.title}</h3>
                    <MessageThread messages={thread.messages} />
                </div>
            ))}
        </div>
    );
};

export default MessageList;
