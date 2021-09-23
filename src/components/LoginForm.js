import React, {useState} from 'react';

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
          localStorage.setItem('name', result.user.firstname, result.user.lastname);
          console.log('login successful');
          props.handleLogin();
          props.setUser(result.user);
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Username:
        <input 
          name="username"
          type="text"
          placeholder="Enter Here"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br/>
      <label> Password:
        <input
          name="password"
          type="password"
          placeholder="Enter Here"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <input type="submit" value="Login" />
    </form>
  )
}
