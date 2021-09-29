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
  const [task, setTask] = useState({
    description: '',
    category: 'Work',
    priority: 2,
    completed: false
  })
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
    // console.log(task);
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

  //function to handle add task on form submit
  const handleAddTask = event => {
    event.preventDefault();
    setOpenAddTask(false);
    console.log("form values logged as", task)

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({task}) // : {description, category, priority, completed}
    })
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        alert(result.error);
      } else {
        console.log("backend result", result);
        setPendingTasks([...pendingTasks, result]);
        setSubmitted(true);
        // write function to have Thank You/Nice work modal pop up 
      }
    })
  }

  //function to handle edit task on form submit
  const handleEditTask = event => {
    event.preventDefault();
    setOpenEditTask(false);

    fetch(`http://localhost:3000/tasks/${selectedToEdit.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(
        {task: 
          { description: selectedToEdit.description, 
            category: selectedToEdit.category,
            priority: selectedToEdit.priority,
            completed: selectedToEdit.completed
          }
        })
    })
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        alert(result.error)
      } else {
      console.log("backend result", result);
      setPendingTasks([...pendingTasks, result]);
      }
    })
  }

  // function to filter through tasks based on (selected) state
  const renderTasks = () => {
    if (selected.id === "All Tasks") {
      return pendingTasks.map(item => {
        return <Tasks
        task={item}
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
              handleEditTask={handleEditTask}
              setSelectedToEdit={setSelectedToEdit}
              task={task}
              setTask={setTask}
              submitted={submitted}
              setSubmitted={setSubmitted}
              selectedToEdit={selectedToEdit}
            />}
            {openAddTask && <TaskForm 
              handleAddTask={handleAddTask}
              task={task}
              setTask={setTask}
              setOpenAddTask={setOpenAddTask} 
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
