import React from 'react';
import { useState } from 'react';

export default function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({user: {username, password} })
    })
      .then(response => response.json())
      .then(result => {
        if (result.error){
          console.error(result.error);
        } else {
          localStorage.setItem('token', result.token);
          console.log('login successful');
          props.handleLogin();
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="username"
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input type="submit" value="Login" />
    </form>
  )
}
