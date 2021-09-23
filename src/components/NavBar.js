import React from 'react';
import {Link} from 'react-router-dom';
import {IoRocketOutline} from "react-icons/io5";

export default function NavBar(props) {
  return (
    <div id="navbar">
      {props.isLoggedIn? (
        <>
        <nav>
          <Link classname="icon" to="/about"><IoRocketOutline classname="icon"/></Link>
          <Link classname="link" to="/about">Task Rocket</Link>
          <Link classname="link" to="/home">My Tasks</Link>
        </nav>
        <nav>
        <Link to="/profile">{props.user.firstname} {props.user.lastname}</Link>
        </nav>
      </>) : (
      <>
      <nav>
        <Link classname="icon" to="/about"><IoRocketOutline classname="icon"/></Link>
        <Link classname="link" to="/about">Task Rocket</Link>
      </nav>
      <nav>
        <Link classname="link" to="/login">Login</Link>
      </nav>
      </>
      )
      }
    </div>
  )
}
