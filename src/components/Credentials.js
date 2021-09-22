import React from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

export default function Credentials(props) {
  return (
    <div>
      <h1> Sign In To Task Rocket</h1>
      <h2> Create User </h2>
      <SignUpForm />
      <h2> Login </h2>
      <LoginForm handleLogin={props.handleLogin}/>
    </div>
  )
}
