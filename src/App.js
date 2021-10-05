import './styles/App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Credentials from './components/Credentials';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Profile from './components/Profile';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.clear()
    setUser({})
  }

  const handleLogin = () => setIsLoggedIn(true)

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
            alert(result.error);
          } else {
            handleLogin();
            setUser(result.user);
          }
        })
    }
  }, [])
  
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <NavBar 
            isLoggedIn={isLoggedIn}
            user={user}
            />
        </div>
      <div className="container">
        <Switch>
          <Route
            path="/home"
            render={() =>
              <Home 
                user={user}
              />
            }
            />
          <Route 
            exact path="/"
            component={About}
            />
          <Route 
            path="/login"
            render={() =>
              <Credentials 
              isLoggedIn={isLoggedIn}
              handleLogin={handleLogin}
              setUser={setUser}
              />
            }  
            />
          <Route
            path="/profile"
            render={() =>
            <Profile 
              user={user}
              setUser={setUser}
              handleLogout={handleLogout}
              isLoggedIn={isLoggedIn}
            />
            }
          />
        </Switch>
        </div>
        <footer>
          <p>Task Rocket was created by Anika Bernstein 2021. All rights reserved.</p>
        </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
