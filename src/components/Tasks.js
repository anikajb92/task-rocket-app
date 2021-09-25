import React from 'react';
import {BsCircle} from "react-icons/bs";
import {BsCheckCircle} from "react-icons/bs"; //when tasks are completed

export default function Tasks(props) {
  return (
    <div>
      <BsCircle />
      <h3>{props.description}</h3>
      <h3>Priority: {props.priority}</h3>
      <h3>Category: {props.category}</h3>
    </div>
  )
}
