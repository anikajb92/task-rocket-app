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
          <span>Task Rocket</span> is a task-management platform that <span2>organizes</span2> all 
          of your to-do's in one place. 
        </h3>
        <h3>  
          With a customizable, easy-to-navigate user interface and <span2>robust tracking</span2> systems, 
          this application will encourage <span2>productivity</span2> and lower
          turnaround times for all of your task completion needs. 
        </h3>
        <div>
          <h3>Together, we can <span2>rock</span2> it! </h3>
        </div>
      </div>
    </div>
  )
}
