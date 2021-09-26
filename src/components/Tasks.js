import React from 'react';
import {BsCircle} from "react-icons/bs";
import {BsCheckCircle} from "react-icons/bs"; //when tasks are completed

export default function Tasks(props) {
  return (
    <div>
      <BsCircle />
      <p>{props.description}</p>
      <p>Priority: {props.priority}</p>
      <p>Category: {props.category}</p>
    </div>
  )
}
