import React from 'react';
import '../styles/home.css';

import {BsCircle, BsCheckCircle} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";
import {IoTrashBinOutline} from "react-icons/io5";
import {GoPrimitiveDot} from "react-icons/go";

export default function Tasks(props) {

  const priorityColor = (arg) => {
    if (arg == '1') {
      console.log('it works, low priority found')
      return 'lowpriority'
    } else if (arg == '2') {
      return 'medpriority'
    } else {
      return 'highpriority'
    }
  }

  return (
    <div className={`task ${priorityColor(props.task.priority)}`}>
      <div className="task-left">
        {props.task.completed?
          <button className="check"><BsCheckCircle /> </button> :
          <button className="check" onClick={()=> props.handleMarkComplete(props.task)}><BsCircle /> </button>
        }
       <p> {props.task.description} </p>
       {/* <GoPrimitiveDot fill={priorityColor(props.task.priority)} className="priorityDot"/> */}
      </div>
      <div className="task-right">
        <button className="edit" onClick={() => props.taskToEdit(props.task)}> <FiEdit /></button>
        <button className="edit" onClick={() => props.handleDeleteTask(props.task)}><IoTrashBinOutline /></button>
      </div>
    </div>
  )
}
