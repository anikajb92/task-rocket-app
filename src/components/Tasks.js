import React from 'react';
import '../styles/home.css';

import {BsCircle, BsCheckCircle} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";
import {IoTrashBinOutline} from "react-icons/io5";

export default function Tasks(props) {

  return (
    <div className="task">
      <div className="task-left">
        {props.task.completed?
          <button className="check"><BsCheckCircle /> </button> :
          <button className="check" onClick={()=> props.handleMarkComplete(props.task)}><BsCircle /> </button>
        }
       <p> {props.task.description}</p>
      </div>
      <div className="task-right">
        <button className="edit" onClick={() => props.taskToEdit(props.task)}> <FiEdit /></button>
        <button className="edit" onClick={() => props.handleDeleteTask(props.task)}><IoTrashBinOutline /></button>
      </div>
    </div>
  )
}
