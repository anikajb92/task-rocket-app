import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import {BsClockHistory} from 'react-icons/bs';
import {IoRocketOutline} from "react-icons/io5";


export default function Profile(props) {

  return (
    <div className="profileContainer">
      <div className="profile">
          {props.isLoggedIn? (
            <>
            <h1> Hi, {props.user.firstname}! </h1>
            <p>Thank you for being a loyal patron of Task Rocket.</p>
            <p><BsClockHistory /> Your acount has been active for <span>{props.user.user_active}</span> days.</p>

            <h2>Here's a look at your profile.</h2>
            <hr/>
            <h3>Full Name: <p>{props.user.firstname} {props.user.lastname}</p></h3>
            <h3>Username: <p>{props.user.username}</p></h3>
            <h3>Password: <p>(Currently Unavailable)</p></h3>
            <h3>Profile Picture: </h3>
            <button>Upload</button>
            <br/>
            <hr/>
            <button onClick={props.handleLogout}>Logout</button>
          </>) : (
            <>
            <div className="profile">
              <h1 style={{fontSize:"100px"}}><IoRocketOutline /></h1>
              <h1 style={{fontSize:"100px", color:"#FF4B2B"}}>!Mayday!</h1>
              {/* <h1 style={{fontSize:"60px"}}>Crash landing!</h1> */}
              <br/>
              <h1>It doesn't look like we're able to find your information.</h1>
              <br/>
              <hr/>
              <h2>Please log in to your account to view your profile.</h2>
            </div>
          </>
          )}
      </div>
      <div className="user-profile">
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_h1l0ibez.json"
          style={{ height: '600px', width: '600px' }}
        >
        </Player>
      </div>
    </div>
  )
}

