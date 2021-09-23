import React from 'react';
import '../styles/rocket.css';

import Rocket from '../images/rocket.png';

export default function About() {
  return (
    <div className="about">
      <div className="pulse-container">
        <div classname="pulse">
          <span style={{"--i": 1}}></span>
          <span style={{"--i": 2}}></span>
          <span style={{"--i": 3}}></span>
          <span style={{"--i": 4}}></span>
          <span style={{"--i": 5}}></span>

          <div className="rocket">
            <img src={Rocket}></img>
          </div>
        </div>
      </div>
      <div className="about-words">
        <h1>Welcome!</h1>
        <hr/>
        <h3>
          Task Rocket is a task-management platform that organizes all 
          of your to-do's in one place. With a customizable and 
          easy-to-navigate user interface and robust tracking systems, 
          this application will encourage productivity and lower
          turnaround times for all of your task completion needs. 
          Together, we can Rock It! 
        </h3>
      </div>
    </div>
  )
}
