import React from 'react';
import '../styles/home.css';

import {BsCircle, BsCheckCircle} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";

export default function Tasks(props) {

  return (
    <div className="task">
      <div className="task-left">
        {props.completed?
          <button className="check"><BsCheckCircle /> </button> :
          <button className="check"><BsCircle /> </button>
        }
       <p> {props.description}</p>
      </div>
      <div className="task-right">
        <button className="edit" onClick={() => props.taskToEdit(props.task)}> <FiEdit /></button>
      </div>
    </div>
  )
}
