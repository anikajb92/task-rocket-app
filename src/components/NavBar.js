import React from 'react';
import {BrowserRoute as Router, Switch, Route, Link} from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div>
      {props.isLoggedIn? (
      <>
        <nav>
          <Link classname="link" to="/login">Login/Signup</Link>
          <Link classname="link" to="/home">Home</Link>
          <Link classname="link" to="/about">About</Link>
        </nav>
      </>) : (null)
      }
     
    </div>
  )
}
