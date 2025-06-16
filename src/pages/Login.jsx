// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [nome, setNome] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (nome.trim() !== '') {
      navigate('/chat', { state: { user: nome } });
    } else {
      alert('Por favor, insira um nome para continuar.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Bem-vindo ao Chat!</h1>
        <p>Digite seu nome para entrar</p>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)} 
        />
        <button type="submit">Entrar no Chat</button>
      </form>
    </div>
  );
}

export default Login;