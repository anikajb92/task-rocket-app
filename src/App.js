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
  const [categories, setCategories] = useState([])

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
            console.error(result.error);
          } else {
            handleLogin();
            console.log(result);
            setUser(result.user);
            setCategories(result.categories);
          }
        })
    }
  }, [])
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar 
          isLoggedIn={isLoggedIn}
          user={user}
          />
        <hr></hr>
        <Switch>
          <Route
            exact path="/home"
            render={() =>
              <Home 
                user={user}
                categories={categories}
              />
            }
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
  </BrowserRouter>
  );
}

export default App;
