import React from 'react';
import '../styles/home.css';

import {BsCircle} from "react-icons/bs";
import {BsCheckCircle} from "react-icons/bs"; //when tasks are completed
import {FiEdit} from "react-icons/fi";

export default function Tasks(props) {
  return (
    <div className="task">
       <p><BsCircle /> {props.description}</p>
      <button><FiEdit /></button>
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
