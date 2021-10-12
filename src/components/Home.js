import React, {useState, useEffect} from 'react';
import '../styles/home.css';

import TaskForm from './TaskForm';
import Tasks from './Tasks';
import SideBar from './SideBar';
import Gears from './Gears';
import Star from './Star';
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
  });
  const [tasksPer, setTasksPer]= useState([]);
  const [percentComplete, setPercentComplete] = useState([]);
  const [userActive, setUserActive] = useState('');
  const [mostProductive, setMostProductive] = useState('Monday');
  const [mostTasksPer, setMostTasksPer] = useState([]);
  const [avgCompletion, setAvgCompletion] = useState('');
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
    fetch('http://localhost:3000/allinfo', {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          alert(result.error);
        } else {
          console.log(result);
          setPendingTasks(result.sorted_tasks);
          setCompletedTasks(result.completed_tasks);
          setTasksPer(result.num_tasks_per_category);
          setPercentComplete(result.perc_tasks_completed);
          setUserActive(result.user_active);
          setMostProductive(result.most_productive_day); //need to complete code on BE
          setAvgCompletion(result.avg_completion_time);
          setMostTasksPer(result.most_tasks_per_category);
        }
      })
  }, [])

  // function to filter through tasks based on (selected) state
  const renderTasks = () => {
    if (selected.id === "All Tasks") {
      return pendingTasks.map(item => {
        return <Tasks
        task={item}
        key={item.id}
        taskToEdit={taskToEdit}
        selectedToEdit={selectedToEdit}
        setSelectedToEdit={setSelectedToEdit}
        handleMarkComplete={handleMarkComplete}
        handleDeleteTask={handleDeleteTask}
        />
      })
    } else if (selected.id === "Priority"){
      let items = pendingTasks.filter(item => item.priority == selected.name) // need to keep == b/c not same type
      return items? (
        items.map(item => {
          return <Tasks 
            task={item}
            key={item.id}
            taskToEdit={taskToEdit}
            selectedToEdit={selectedToEdit}
            setSelectedToEdit={setSelectedToEdit}
            handleMarkComplete={handleMarkComplete}
            handleDeleteTask={handleDeleteTask}
          />
        })
      )
        : "<p>Nothing is here</p>"
    } else if(selected.id === "Category"){
        let items = pendingTasks.filter(item => item.category === selected.name)
        return items.map(item => {
          return <Tasks 
            task={item}
            key={item.id}
            taskToEdit={taskToEdit}
            selectedToEdit={selectedToEdit}
            setSelectedToEdit={setSelectedToEdit}
            handleMarkComplete={handleMarkComplete}
            handleDeleteTask={handleDeleteTask}
          />
        })
    } else if(selected.id === "Completed"){
        return completedTasks.map(item => {
          return <Tasks 
          task={item}
          key={item.id}
          taskToEdit={taskToEdit} //cannot unclick checkmark on completed tasks
          handleDeleteTask={handleDeleteTask}
          />
        })
    }
  }

  // handles click of each Task: edit button
  const taskToEdit = (task) => {
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
        setPendingTasks([result.new_task, ...pendingTasks]);
        setSubmitted(true);
        setOpenAddTask(false);
        setPercentComplete(result.data);
        // write function to have Thank You/Nice work modal pop up 
      }
    })
  }

  //function to handle edit task on form submit
  const handleEditTask = event => {
    event.preventDefault();
    
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
          setPercentComplete(result.data);
          setSubmitted(true);
          setOpenEditTask(false);
      }
    })
  }

  //function to mark complete from checkmark
  const handleMarkComplete = (task) => {
    console.log(task.id);
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({...task, completed: true})
      })
      .then(response => response.json())
      .then(result => {
        console.log("backend result", result);
        removePendingTasks(task);
        setPercentComplete(result.data);
      })
  }

  // function to delete task from editform
  const handleDeleteTask = (task) => {
    console.log('hitting handledelete task', task.id);
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log("backend result", result);
        setOpenEditTask(false);
        removePendingTasks(task);
        setPercentComplete(result.data);
      })
  }
  
  // function to render pending tasks minus the recently edited task
  const removePendingTasks = (task) => {
    const newArray = pendingTasks.filter(t => t.id !== task.id);
    console.log(newArray);
    setPendingTasks(newArray);
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
          <Gears />
        </div>
        <div className="board">
          <div className="taskcolumn">
            <h2>{selected.id === "Completed" ? "Completed Tasks" : "Pending Tasks"}</h2>
            {renderTasks()}
            {openEditTask && <EditTask 
              setOpenEditTask={setOpenEditTask} //function to open/close modal
              handleEditTask={handleEditTask}
              selectedToEdit={selectedToEdit}
              setSelectedToEdit={setSelectedToEdit}
              task={task}
              setTask={setTask}
              submitted={submitted}
              setSubmitted={setSubmitted}
              handleDeleteTask={handleDeleteTask}
            />}
            {openAddTask && <TaskForm 
              handleAddTask={handleAddTask}
              task={task}
              setTask={setTask}
              openAddTask={openAddTask}
              setOpenAddTask={setOpenAddTask} 
            />}
          </div>
          <div className="statscolumn">
            <div className="statsheader">
              <Star />
              <h2>{props.user.firstname}'s Stats</h2> {/* User props from App.js */}
            </div>
            <StatsContainer 
              tasksPer={tasksPer}
              percentComplete={percentComplete}
              userActive={userActive}
              mostProductive={mostProductive}
              avgCompletion={avgCompletion}
              mostTasksPer={mostTasksPer}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
