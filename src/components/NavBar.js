import React from 'react';
import {BrowserRoute as Router, Switch, Route, Link} from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div id="navbar">
      {props.isLoggedIn? (
      <>
        <nav>
          <Link classname="link" to="/home">Home</Link>
          <Link classname="link" to="/about">About</Link>
          <Link classname="link" to="/login">Login</Link>
        </nav>
      </>) : (null)
      }
    </div>
  )
}
