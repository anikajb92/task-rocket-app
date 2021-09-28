import React, {useState} from 'react';
import '../styles/home.css';
import {FaBuffer} from "react-icons/fa";

import TaskForm from './TaskForm';
import Tasks from './Tasks';
import SideBar from './SideBar';
import StatsContainer from './StatsContainer';
import EditTask from './EditTask';

export default function Home(props) {
  const [selected, setSelected]= useState({
    name: 'All Tasks',
    id: 'All Tasks',
  });
  const [openEditTask, setOpenEditTask] = useState(false);
  const [openAddTask, setOpenAddTask] = useState(false);


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
        handleEdit={setOpenEditTask}
        />
      })
    } else if (selected.id == "Priority"){
      let items = props.tasks.filter(item => item.priority == selected.name)
      {return items? (
        items.map(item => {
          return <Tasks 
            description={item.description}
            selected={selected}
            tasks={props.tasks}
            items={items}
            handleEdit={setOpenEditTask}
          />
        })
      )
        : "<p>Nothing is here</p>"
      }
    } else if(selected.id == "Category"){
        let items = props.tasks.filter(item => item.category == selected.name)
        return items.map(item => {
          return <Tasks 
            description={item.description}
            selected={selected}
            tasks={props.tasks}
            items={items}
            handleEdit={setOpenEditTask}
          />
        })
    } // write else if for completed tasks here
  }
  
  return (
    <div className="home">
      <div className="welcomeback">
        <h1>Welcome Back, {props.user.firstname}!</h1>
      </div>
      <br/>
      <div className="existing-tasks">
        <div className="aside-container">
          <SideBar 
          selected={selected} 
          changeSelected={changeSelected}
          handleOpenAdd={setOpenAddTask}
          openAddTask={openAddTask}
          />
        </div>
        <div className="board">
          <div className="taskcolumn">
            <h2>Pending Tasks</h2>
            {renderTasks()}
            {openEditTask && <EditTask handleEdit={setOpenEditTask}/>}
            {openAddTask && <TaskForm 
              renderTasks={renderTasks}
              setTasks={props.setTasks}
              tasks={props.tasks}
              handleOpenAdd={setOpenAddTask}
            />}
          </div>
          <div className="statscolumn">
            <h2>{props.user.firstname}'s Stats</h2>
            <StatsContainer />
          </div>
        </div>
      </div>
    </div>
  )
}
