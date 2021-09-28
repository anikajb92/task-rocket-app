import React, {useState, useEffect} from 'react';
import '../styles/home.css';
import {FaBuffer} from "react-icons/fa";

import TaskForm from './TaskForm';
import Tasks from './Tasks';
import SideBar from './SideBar';
import StatsContainer from './StatsContainer';
import EditTask from './EditTask';

export default function Home(props) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Work');
  const [priority, setPriority] = useState(2);
  const [completed, setCompleted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected]= useState({
    name: 'All Tasks',
    id: 'All Tasks',
  });
  const [selectedToEdit, setSelectedToEdit] = useState({});
  const [openEditTask, setOpenEditTask] = useState(false);
  const [openAddTask, setOpenAddTask] = useState(false);

  const taskToEdit = (task) => {
    console.log(task);
    setOpenEditTask(true);
    setSelectedToEdit(task);
  }

  const changeSelected = (name, id) => {
    setSelected({
      name: name,
      id: id,
    })
  }

  const submitUpdate = event => {
    event.preventDefault();
    console.log("form values updated as", description, category, priority, completed)

    fetch('http://localhost:3000/tasks', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({task: {description, category, priority, completed}})
    })
    .then(response => response.json())
  }

  const renderTasks = () => {
    if (selected.id === "All Tasks") {
      return props.tasks.map(task => {
        return <Tasks
        description={task.description}
        selected={selected}
        task={task}
        completed={completed}
        handleEdit={setOpenEditTask}
        taskToEdit={taskToEdit}
        />
      })
    } else if (selected.id == "Priority"){
      let items = props.tasks.filter(item => item.priority == selected.name)
      {return items? (
        items.map(item => {
          return <Tasks 
            description={item.description}
            selected={selected}
            task={item}
            items={items}
            completed={completed}
            handleEdit={setOpenEditTask}
            taskToEdit={taskToEdit}
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
            task={item}
            completed={completed}
            handleEdit={setOpenEditTask}
            taskToEdit={taskToEdit}
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
            {openEditTask && <EditTask 
              handleEdit={setOpenEditTask}
              submitUpdate={submitUpdate}
              description={description}
              setDescription={setDescription}
              completed={completed}
              setCompleted={setCompleted}
              category={category}
              setCategory={setCategory}
              priority={priority}
              setPriority={setPriority}
              submitted={submitted}
              setSubmitted={setSubmitted}
              selectedToEdit={selectedToEdit}
            />}
            {openAddTask && <TaskForm 
              renderTasks={renderTasks}
              setTasks={props.setTasks}
              tasks={props.tasks}
              completed={completed}
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
