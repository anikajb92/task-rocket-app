import React, {useState} from 'react';
import '../styles/home.css';
import {FaBuffer} from "react-icons/fa";

import TaskForm from './TaskForm';
import Tasks from './Tasks';
import SideBar from './SideBar';

export default function Welcome(props) {
  const [selected, setSelected]= useState("All Tasks");

  const changeSelected = (value) => {setSelected(value)}

  // const renderTasks = () => {props.tasks.map(task => {
  //   // console.log(task);
  //   return <Tasks 
  //     description={task.description}
  //     category={task.category}
  //     priority={task.priority}
  //     selected={selected}
  //   />
  // })

  const renderTasks = () => {
    if (selected === "All Tasks") {
      return props.tasks.map(task => {
        console.log("all tasks selected")
        return <Tasks
        description={task.description}
        selected={selected}
        />
      })
    } else {
      let items = props.tasks.filter(item => item.category == selected)
      console.log("else statement:", items)
      return items.map(item => {
        console.log("priority selected")
        return <Tasks 
          description={item.description}
          selected={selected}
        />
      })
    }
  }

  
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
