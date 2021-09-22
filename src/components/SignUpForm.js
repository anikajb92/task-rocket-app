import React from 'react';
import { useState } from 'react';

export default function CreateUserForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      'username:', username, 
      'password:', password, 
      'first name:', firstname, 
      'last name:', lastname
    );
  

    fetch('http://localhost:3000/users', {
      method: 'POST', 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: {username, password, firstname, lastname} })
    })
    .then(response => response.json())
    .then(newUser => console.log(newUser))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Please Enter Your Full Name:
        <br/>
        <input 
          type="text" 
          name="firstname" 
          placeholder="First Name"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
        />
        <br/>
        <input 
          type="text" 
          name="lastname" 
          placeholder="Last Name"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />
      </label>
      <br/>
      <label>Desired Username (must be unique):
        <br/>
        <input 
          type="text" 
          name="username" 
          placeholder="Enter Here"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br/>
      <label>Secure Password:
        <br/>
        <input 
          type="password" 
          name="password" 
          placeholder="Enter Here"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br/>
      <input type="submit" value="Create User" />
    </form>
  );
}
