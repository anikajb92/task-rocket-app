import React, {useState} from 'react';
import '../styles/creds.css';

import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

export default function Credentials(props) {
  const [loginInstead, setLoginInstead] = useState(false)
  const [newUser, setNewUser] = useState(true)

  const handleClick = () => {
      setLoginInstead(true)
      setNewUser(false)
  }

  return (
    <div className="credentials">
      <h1> Sign In To Task Rocket</h1>
      {newUser? (
      <>
        <SignUpForm />
        <h3>Already have an account?</h3>
        <button onClick={handleClick}>Login</button>
      </>) : (
      <>
        <LoginForm 
        handleLogin={props.handleLogin}
        setUser={props.setUser}
        />
        <h3>Create an account</h3>
        <button onClick={handleClick}>Login</button>
      </>
      )}
      {/* {loginInstead? (
      <>
        <LoginForm 
        handleLogin={props.handleLogin}
        setUser={props.setUser}
        />
        <h3>Already have an account?</h3>
        <button onClick={handleClick}>Login</button>
      )} */}
    </div>
  )
}
