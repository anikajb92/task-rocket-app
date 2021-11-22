import React, {useState} from 'react';
import '../styles/creds.css';

import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

export default function Credentials(props) {
  const [successful, setSuccessful] = useState(false)

  const successAnimation = () => {
    setTimeout(() => {
      
    }, 1200);
  }

  return (
  <div className="main">
    <div className="credentials">
      {successful? <>
        (
          <p>Success!</p>
        )</> : <>
        (
          <SignUpForm 
            setSuccessful={setSuccessful}
          />
          <LoginForm 
            handleLogin={props.handleLogin}
            user={props.user}
            setUser={props.setUser}
            setSuccessful={setSuccessful}
            routerprops={props.routerprops}
            logInError={props.logInError}
            /> 
        )</>
      }
    </div>
  </div>
  )
}
