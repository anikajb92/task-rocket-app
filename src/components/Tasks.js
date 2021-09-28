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
        <button className="edit" onClick={() => props.handleEdit(true)}> <FiEdit /></button>
      </div>
      {/* {props.category === "Work" ?
        <p style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}><BsCircle /> {props.description}</p> :
        <p><BsCircle /> {props.description}</p>
        <button><FiEdit /></button>
      } */}
        {/* <h3>Looks empty!</h3>
        <p>You have no pending tasks with this filter critera.</p> */}
      {/* <p>Priority: {props.priority}</p>
      <p>Category: {props.category}</p> */}
    </div>
  )
}
