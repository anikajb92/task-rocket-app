import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {IoRocketOutline} from "react-icons/io5";

export default function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const history = useHistory()

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
          setError(result.error);
        } else {
          localStorage.setItem('token', result.token);
          localStorage.setItem('name', result.user.firstname, result.user.lastname);
          console.log('login successful');
          props.setSuccessful(true);
          props.handleLogin();
          props.setUser(result.user);
          history.push('/home');
        }
      });
  }

  return (
    
    <div className="form-container sign-in-container">
      <form id="login" onSubmit={handleSubmit}>
      <IoRocketOutline className="iconlarge"/>
      <h3>Already have an account?</h3>
      <h1>Sign In</h1>
      <br/>
          <input 
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br/>
          <p style={{color:"red"}}>{error? error : null} </p>
        <button className="button">Login</button>
      </form>
    </div>
  )
}
