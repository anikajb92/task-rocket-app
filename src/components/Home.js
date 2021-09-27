import React, {useState} from 'react';
import '../styles/home.css';
import {FaBuffer} from "react-icons/fa";

import TaskForm from './TaskForm';
import Tasks from './Tasks';
import SideBar from './SideBar';

export default function Welcome(props) {
  const [selected, setSelected]= useState({
    name: 'All Tasks',
    id: 'all tasks',
  });

  const changeSelected = (name, id) => {
    setSelected({
      name: name,
      id: id,
    })
    console.log("attempting to setSelected", selected)
  }

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
    if (selected.id === "All tasks") {
      return props.tasks.map(task => {
        return <Tasks
        description={task.description}
        selected={selected}
        />
      })
    } else if (selected.id == "Priority"){
      let items = props.tasks.filter(item => item.priority == selected.name)
      return items.map(item => {
        return <Tasks 
          description={item.description}
          selected={selected}/>
      })
    } else if(selected.id == "Category"){
        let items = props.tasks.filter(item => item.category == selected.name)
        return items.map(item => {
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
          {selected.id=="all tasks"? (
            <>
            <h2>All Tasks</h2>
            </>) : (
              <>
            <h2>Showing All Tasks For: {selected.id}: {selected.name}</h2>
            </>)
          }
          {renderTasks()}
        </div>
      </div>
      <div className="new-tasks">
        <TaskForm renderTasks={renderTasks}/>
      </div>
    </div>
  )
}
