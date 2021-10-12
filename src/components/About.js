import React from 'react';
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
        </div>
      </div>
      <hr/>
      <div className="about-2">
        <div className="about-words-2">
          <h3>  
            Create a <span2>profile</span2> today! 
            Your information will be safely <span2>encryted</span2> so you can 
          </h3>
          <div>
            <h3>Together, we can <span2>rock</span2> it! </h3>
          </div>
        </div>
        <div className="calendar-man">
          <CalendarMan />
        </div>
      </div>
      <hr/>
      <div className="about-3">
        <div>
          <p>SIGN UP</p>
        </div>
      </div>
    </div>
  )
}
