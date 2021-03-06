import React from 'react';
import {Link} from 'react-router-dom';
import {IoRocketOutline} from "react-icons/io5";
import {CgProfile} from "react-icons/cg";

export default function NavBar(props) {
  return (
    <div id="navbar">
      {props.isLoggedIn? (
        <>
        <nav>
          <Link to="/"><IoRocketOutline /></Link>
          <Link className="link" to="/">Task Rocket</Link>
          <Link className="link" to="/home">My Tasks</Link>
        </nav>
        <nav>
        <Link className="link" to="/profile"><CgProfile /> {props.user.firstname} {props.user.lastname}</Link>
        </nav>
      </>) : (
      <>
      <nav>
        <Link to="/"><IoRocketOutline /></Link>
        <Link className="link" to="/">Task Rocket</Link>
      </nav>
      <nav>
        <Link className="link" to="/login">Login</Link>
      </nav>
      </>
      )
      }
    </div>
  )
}
