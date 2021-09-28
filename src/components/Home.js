import React, {useState, useEffect} from 'react';
import '../styles/home.css';
import {FaBuffer} from "react-icons/fa";

import TaskForm from './TaskForm';
import Tasks from './Tasks';
import SideBar from './SideBar';
import StatsContainer from './StatsContainer';
import EditTask from './EditTask';

export default function Home(props) {
  const [pendingTasks, setPendingTasks] = useState([]); // sorted pending tasks from High to Low
  const [completedTasks, setCompletedTasks] = useState([]); // sorted completed tasks from High to Low
  // const [description, setDescription] = useState('');
  // const [category, setCategory] = useState('Work');
  // const [priority, setPriority] = useState(2);
  // const [completed, setCompleted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected]= useState({ //holds state of filter selected on sidebar
    name: 'All Tasks',
    id: 'All Tasks',
  });
  const [selectedToEdit, setSelectedToEdit] = useState({}); //holds state of the clicked task & all of its data to be updated
  const [openEditTask, setOpenEditTask] = useState(false); //modal for task edit form
  const [openAddTask, setOpenAddTask] = useState(false); //modal for task add form

  // fetches all sorted tasks from backend on page load and sets state
  useEffect(() => {
    fetch('http://localhost:3000/alltasks', {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          alert(result.error);
        } else {
          setPendingTasks(result.sorted_tasks);
          setCompletedTasks(result.completed_tasks);
        }
      })
  }, [])

  // handles click of each Task: edit button
  const taskToEdit = (task) => {
    console.log(task);
    setOpenEditTask(true);
    setSelectedToEdit(task);
  }

  // function to handle filter selection on sidebar
  const changeSelected = (name, id) => {
    setSelected({
      name: name,
      id: id,
    })
  }

  // const submitUpdate = event => {
  //   event.preventDefault();
  //   console.log("form values updated as", description, category, priority, completed)

  //   fetch('http://localhost:3000/tasks', {
  //     method: 'PATCH',
  //     headers: {
  //       Accept: 'application/json', 
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${localStorage.token}`
  //     },
  //     body: JSON.stringify({task: {description, category, priority, completed}})
  //   })
  //   .then(response => response.json())
  // }

  const renderTasks = () => {
    if (selected.id === "All Tasks") {
      return pendingTasks.map(task => {
        return <Tasks
        task={task}
        handleEdit={setOpenEditTask}
        taskToEdit={taskToEdit}
        />
      })
    } else if (selected.id == "Priority"){
      let items = pendingTasks.filter(item => item.priority == selected.name)
      {return items? (
        items.map(item => {
          return <Tasks 
            task={item}
            handleEdit={setOpenEditTask}
            taskToEdit={taskToEdit}
          />
        })
      )
        : "<p>Nothing is here</p>"
      }
    } else if(selected.id == "Category"){
        let items = pendingTasks.filter(item => item.category == selected.name)
        return items.map(item => {
          return <Tasks 
            task={item}
            handleEdit={setOpenEditTask}
            taskToEdit={taskToEdit}
          />
        })
    } else if(selected.id == "Completed"){
        return completedTasks.map(item => {
          return <Tasks 
          task={item}
          handleEdit={setOpenEditTask}
          taskToEdit={taskToEdit}
          />
        })
    }
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
          setOpenAddTask={setOpenAddTask}
          openAddTask={openAddTask}
          />
        </div>
        <div className="board">
          <div className="taskcolumn">
            <h2>Pending Tasks</h2>
            {renderTasks()}
            {openEditTask && <EditTask 
              setOpenEditTask={setOpenEditTask} //function to open/close modal
              // submitUpdate={submitUpdate}
              // description={description}
              // setDescription={setDescription}
              // completed={completed}
              // setCompleted={setCompleted}
              // category={category}
              // setCategory={setCategory}
              // priority={priority}
              // setPriority={setPriority}
              submitted={submitted}
              setSubmitted={setSubmitted}
              selectedToEdit={selectedToEdit}
            />}
            {openAddTask && <TaskForm 
              setTasks={props.setTasks}
              tasks={pendingTasks}
              handleOpenAdd={setOpenAddTask} 
            />}
          </div>
          <div className="statscolumn">
            <h2>{props.user.firstname}'s Stats</h2> {/* User props from App.js */}
            <StatsContainer />
          </div>
        </div>
      </div>
    </div>
  )
}
