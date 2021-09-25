import React, {useState} from 'react';
import '../styles/home.css';
import {FaBuffer} from "react-icons/fa";

import TaskForm from './TaskForm';
import CategoryList from './CategoryList';
import SideBar from './SideBar';

export default function Welcome(props) {
  const [selected, setSelected]= useState("all");

  const renderTasks = () => props.tasks.map(task => {
    console.log(task);
  //   return <h2><FaBuffer/> {category.name}</h2>
    
  //   // return <CategoryList 
  //   //   name={category.name}
  //   //   tasks={category.tasks}
  //   // />
  // })

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
          {/* {props.tasks? {renderTasks() : (<TaskForm />} */}
        </div>
      </div>
      <div className="new-tasks">
        {props.tasks? "null" : <TaskForm />}
      </div>
    </div>
  )
}
