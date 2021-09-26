import React, {useState} from 'react';
import '../styles/home.css';
import {FaBuffer} from "react-icons/fa";

import TaskForm from './TaskForm';
import Tasks from './Tasks';
import SideBar from './SideBar';

export default function Welcome(props) {
  const [selected, setSelected]= useState("all");

  const renderTasks = () => props.tasks.map(task => {
    // console.log(task);
    return <Tasks 
      description={task.description}
      category={task.category}
      priority={task.priority}
      selected={selected}
    />
  })

  const changeSelected = (value) => {setSelected(value)}
  
  return (
    <div className="home">
      {/* <h1>Welcome back, {props.user.firstname}!</h1>
      <br/> */}
      <div className="existing-tasks">
        <div className="aside-container">
          <SideBar 
          selected={selected} 
          changeSelected={changeSelected}
          />
        </div>
        <div className="board">
          {renderTasks()}
        </div>
      </div>
      <div className="new-tasks">
        <TaskForm renderTasks={renderTasks}/>
      </div>
    </div>
  )
}
