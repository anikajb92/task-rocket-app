import React from 'react';
import '../styles/creds.css';

import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

export default function Credentials(props) {

  return (
  <div className="main">
    <div 
      className="credentials"
    >
        <SignUpForm />
        <LoginForm 
          handleLogin={props.handleLogin}
          setUser={props.setUser}
          routerprops={props.routerprops}
          /> 
    </div>
  </div>
  )
}
