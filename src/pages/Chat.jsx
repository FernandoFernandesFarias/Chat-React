// src/pages/Chat.jsx
import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

function Chat() {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  if (!location.state || !location.state.user) {
    return <Navigate to="/" />;
  }

  const user = location.state.user;
  const handleSendMessage = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      const message = {
        id: Date.now(), 
        text: newMessage,
        sender: user,
      };

      setMessages([...messages, message]);
      setNewMessage(''); 
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h2>Chat com {user}</h2>
      </header>
      
      <div className="messages-list">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`message ${msg.sender === user ? 'sent' : 'received'}`}
          >
            <p>{msg.text}</p>
            <span>{msg.sender}</span>
          </div>
        ))}
      </div>

      <form className="message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Chat;