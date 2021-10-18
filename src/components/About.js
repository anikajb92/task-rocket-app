import React from 'react';
import {Link} from 'react-router-dom';

import RocketGirl from './RocketGirl';
import CalendarMan from './CalendarMan';
import '../styles/about.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about">
        <div className="rocket-girl">
          <RocketGirl />
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
          <Link to="/login">
            <button type="button"> Sign Up!</button>
          </Link>
        </div>
      </div>
      <hr/>
      <div className="about-2">
        <div className="about-words-2">
          <h3>  
            Plan, organize, and track all of your tasks in <span2>one place</span2>.
            Save time, streamline projects, and keep track of all the moving pieces.
          </h3>
          <h3>
            Create a <span2>profile</span2> so you can start <span2>rocking</span2> your tasks today!
          </h3>
          <Link to="/login">
            <button type="button"> Get Started!</button>
          </Link>
        </div>
        <div className="calendar-man">
          <CalendarMan />
        </div>
      </div>
    </div>
  )
}
