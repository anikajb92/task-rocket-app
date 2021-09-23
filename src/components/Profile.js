import React from 'react'
import {Link} from 'react-router-dom';


export default function Profile(props) {

  return (
    <div>
        {props.isLoggedIn? (
        <>
          <h1> Hi {props.user.firstname} </h1>
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
