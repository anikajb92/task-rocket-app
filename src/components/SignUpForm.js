import React, {useState} from 'react';

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
    <div className="signup-form signup-right">
      <form 
        onSubmit={handleSubmit}
        id="signup"
      >
        <h3>New to Task Rocket?</h3>
        <h1>Create An Account</h1>
          <br/>
          <input 
            type="text" 
            name="firstname" 
            placeholder="First Name"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
          <input 
            type="text" 
            name="lastname" 
            placeholder="Last Name"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
          <input 
            type="text" 
            name="username" 
            placeholder="Username (must be unique)"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        <button 
          className="ghost"
          id="signUp"
        >
          Create User
        </button>
      </form>
    </div>
  );
}
