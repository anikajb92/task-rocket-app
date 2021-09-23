import React, {useState} from 'react';
import '../styles/creds.css';

import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { Container } from '@material-ui/core';

export default function Credentials(props) {
  const [loginInstead, setLoginInstead] = useState(false);
  const [newUser, setNewUser] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
      setLoginInstead(!loginInstead);
      setNewUser(!newUser);
  };

  return (
  <div id="body">
    <div 
      className="credentials"
    >
        <SignUpForm />
        <LoginForm 
          handleLogin={props.handleLogin}
          setUser={props.setUser}
          /> 
    </div>
  </div>
  )
}
