import React, {useState} from 'react';
import '../styles/home.css';
import {FaBuffer} from "react-icons/fa";

import TaskForm from './TaskForm';
import Tasks from './Tasks';
import SideBar from './SideBar';

export default function Welcome(props) {
  const [selected, setSelected]= useState({
    name: 'All Tasks',
    id: 'All Tasks',
  });

  const changeSelected = (name, id) => {
    setSelected({
      name: name,
      id: id,
    })
  }

  const renderTasks = () => {
    if (selected.id === "All Tasks") {
      return props.tasks.map(task => {
        return <Tasks
        description={task.description}
        selected={selected}
        tasks={props.tasks}
        />
      })
    } else if (selected.id == "Priority"){
      let items = props.tasks.filter(item => item.priority == selected.name)
      return items.map(item => {
        return <Tasks 
          description={item.description}
          selected={selected}
          tasks={props.tasks}
          items={items}
        />
      })
    } else if(selected.id == "Category"){
        let items = props.tasks.filter(item => item.category == selected.name)
        return items.map(item => {
          return <Tasks 
            description={item.description}
            selected={selected}
            tasks={props.tasks}
            items={items}
          />
        })
    }
  }
  
  return (
    <div className="home">
      <h1>Welcome back, {props.user.firstname}!</h1>
      <br/>
      <div className="existing-tasks">
        <div className="aside-container">
          <SideBar 
          selected={selected} 
          changeSelected={changeSelected}
          />
        </div>
        <div className="board">
          <div className="taskcolumn">
            {selected.id=="All Tasks"? (
              <>
              <h2>High Priority Tasks</h2>
              </>) : (
                <>
              <h2>Showing All Pending Tasks For</h2>
              <h3>{selected.id}: {selected.name}</h3>
              </>)
            }
            {renderTasks()}
          </div>
          <div className="taskcolumn">
          <h2>Medium Priority Tasks</h2>
            {renderTasks()}
          </div>
          <div className="taskcolumn">
          <h2>Low Priority Tasks</h2>
            {renderTasks()}
          </div>
        </div>
      </div>
      <div className="new-tasks">
        <TaskForm 
        renderTasks={renderTasks}
        setTasks={props.setTasks}
        tasks={props.tasks}
        />
      </div>
    </div>
  )
}
