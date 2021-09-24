import React, {useState} from 'react'
import {Link} from 'react-router-dom';


export default function Profile(props) {
  const[users, setUsers]= useState([])

  const getUsers = () => {
    fetch('http://localhost:3000/users', {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      setUsers(result.users)
    });
  }

  return (
    <div className="profile">
        {props.isLoggedIn? (
        <>
          <h1> Hi, {props.user.firstname}! </h1>
          <h2>Here's a look at your profile. Need to make changes?</h2>
          <hr/>
          <h3>Full Name: {props.user.firstname} {props.user.lastname}</h3>
          <h3>Username: {props.user.username}</h3>
          <h3>Password: (Currently Unavailable)</h3>
          <h3>Profile Picture: </h3>
          <button>Currently Unavailable</button>
          <hr/>
          <h2>Admin Access</h2>
          <button onClick={getUsers}>See all users</button>
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