import React from 'react';
import '../styles/home.css';

import {BsCircle, BsCheckCircle} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";
import {IoTrashBinOutline} from "react-icons/io5";
import {GoPrimitiveDot} from "react-icons/go";

export default function Tasks(props) {

  const priorityColor = (arg) => {
    if (arg == '1') {
      console.log('1 priority');
      return 'yellow'
    } else if (arg == '2') {
      console.log('2 priority');
      return 'orange'
    } else {
      console.log('3 priority');
      return 'red'
    }
  }

  return (
    <div className="task">
      <div className="task-left">
        {props.task.completed?
          <button className="check"><BsCheckCircle /> </button> :
          <button className="check" onClick={()=> props.handleMarkComplete(props.task)}><BsCircle /> </button>
        }
       <p> {props.task.description} </p>
       <GoPrimitiveDot fill={priorityColor(props.task.priority)}/>
      </div>
      <div className="task-right">
        <button className="edit" onClick={() => props.taskToEdit(props.task)}> <FiEdit /></button>
        <button className="edit" onClick={() => props.handleDeleteTask(props.task)}><IoTrashBinOutline /></button>
      </div>
    </div>
  )
}
