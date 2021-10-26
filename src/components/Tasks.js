import React from 'react';
import '../styles/home.css';

import {BsCircle, BsCheckCircle, BsHouseDoor} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";
import {IoTrashBinOutline} from "react-icons/io5";
import {MdComputer, MdPersonOutline, MdPeopleOutline} from 'react-icons/md';

export default function Tasks(props) {

  const priorityColor = (arg) => {
    if (arg == '1') {
      return 'lowpriority'
    } else if (arg == '2') {
      return 'medpriority'
    } else {
      return 'highpriority'
    }
  }

  const categoryIcon = (arg) => {
    if (arg == 'Work') {
      return <MdComputer />
    } else if (arg == 'Personal') {
      return <MdPeopleOutline />
    } else if (arg == 'Household') {
      return <BsHouseDoor />
    } else if (arg == 'Social') {
      return <MdPeopleOutline />
    } else {
      return null
    }
  }

  return (
    <div className={`task ${priorityColor(props.task.priority)}`}> 
      <div className="task-left">
        {props.task.completed?
          <button className="check"><BsCheckCircle /> </button> :
          <button className="check" onClick={()=> props.handleMarkComplete(props.task)}><BsCircle /> </button>
        }
       <p> {categoryIcon(props.task.category)} {props.task.description} </p>
      </div>
      <div className="task-right">
        <button className="edit" onClick={() => props.taskToEdit(props.task)}> <FiEdit /></button>
        <button className="edit" onClick={() => props.handleDeleteTask(props.task)}><IoTrashBinOutline /></button>
      </div>
    </div>
  )
}
