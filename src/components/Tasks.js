import React from 'react';
import {BsCircle} from "react-icons/bs";
import {BsCheckCircle} from "react-icons/bs"; //when tasks are completed

export default function Tasks(props) {
  return (
    <div>
      <BsCircle />
      <h3>{props.description}</h3>
      <h3>{props.dueDate}</h3>
      <h3>{props.priority}</h3>
      <h3>{props.dueDate}</h3>
    </div>
  )
}
