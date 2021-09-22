import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter, Router, Switch, Route, Link} from 'react-router-dom';

import Credentials from './components/Credentials';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.error) {
            console.error(result.error);
          } else {
            handleLogin();
            console.log(result);
          }
        })
    }
  }, [])
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar 
          isLoggedIn={isLoggedIn}
          />
        <Switch>
          <Route
            exact path="/home"
            component={Home}
            />
          <Route 
            path="/about"
            component={About}
            />
          <Route 
            path="/login"
            render={() =>
              <Credentials 
              isLoggedIn={isLoggedIn}
              />
            }  
            />
        </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
