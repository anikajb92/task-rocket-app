import React from 'react';
import {Link} from 'react-router-dom';
import {BsClockHistory} from 'react-icons/bs';

export default function Profile(props) {

  return (
    <div className="profile">
        {props.isLoggedIn? (
        <>
          <h1> Hi, {props.user.firstname}! </h1>
          <p><BsClockHistory /> Thank you for being a loyal patron of Task Rocket. Your acount has been active for <span>{props.user.user_active}</span> hours.</p>

          <h2>Here's a look at your profile. Need to make changes?</h2>
          <hr/>
          <h3>Full Name: <p>{props.user.firstname} {props.user.lastname}</p></h3>
          <h3>Username: <p>{props.user.username}</p></h3>
          <h3>Password: <p>(Currently Unavailable)</p></h3>
          <h3>Profile Picture: </h3>
          <button>Currently Unavailable</button>
          <hr/>
          <br/>
          <hr/>
          <button onClick={props.handleLogout}>Logout</button>
        </>) : (
        <>
          <h1>Please login to your account to view your profile</h1>
          <Link classname="link" to="/login">Login</Link>
        </>
        )}
    </div>
  )
}
