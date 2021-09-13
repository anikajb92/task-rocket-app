import './App.css';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

import {useState} from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)
  
  return (
    <div className="App">
      <h1> Sign In To Task Rocket</h1>
      <h2> Create User </h2>
      <SignUpForm />
      <h2> Login </h2>
      <LoginForm handleLogin={handleLogin}/>
      {isLoggedIn
        ? <Welcome />
        : null
      }
    </div>
  );
}

export default App;
