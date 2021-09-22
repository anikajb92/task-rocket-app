import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div id="navbar">
      {props.isLoggedIn? (
      <>
        <nav>
          <Link classname="link" to="/about">Task Rocket</Link>
          <Link classname="link" to="/home">My Tasks</Link>
          <Link classname="link" to="/login">Login</Link>
        </nav>
      </>) : (null)
      }
    </div>
  )
}
