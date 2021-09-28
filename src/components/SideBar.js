import React from 'react';
import {MdComputer, MdPersonOutline, MdPeopleOutline} from 'react-icons/md';
import{BsHouseDoor} from 'react-icons/bs';
import {RiBarChartHorizontalLine} from 'react-icons/ri';
import {IoRocketOutline} from 'react-icons/io5';

export default function SideBar(props) {

  const handleClick = (event) => {
    props.changeSelected(event.target.name, event.target.id)
    console.log("(delayed) props.selected", props.selected);
  }

  return (
    <div className="aside">
      <p id="title" >Get Rock'n</p>
      {props.openAddTask ? <button> Adding... </button>:
        <button onClick={() => props.handleOpenAdd(true)} style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}> Add Task </button>
      }
      <br/>
      <p id="title" >Filter Tasks</p>
      {props.selected.name === "All Tasks" ?
        <button onClick={handleClick} id="All Tasks" name="All Tasks" style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}><RiBarChartHorizontalLine style={{fill: "#ffffff"}} /> All Pending Tasks</button> :
        <button onClick={handleClick} id="All Tasks" name="All Tasks"><RiBarChartHorizontalLine style={{fill: "#FF4B2B"}} /> All Pending Tasks</button>
      }
      {props.selected.name === "Completed" ?
        <button onClick={handleClick} id="Completed" name="Completed" style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}><RiBarChartHorizontalLine style={{fill: "#ffffff"}} /> All Completed Tasks</button> :
        <button onClick={handleClick} id="Completed" name="Completed"><RiBarChartHorizontalLine style={{fill: "#FF4B2B"}} /> All Completed Tasks</button>
      }
      <h3>. . . . . . . . </h3>
      <p>Categories</p>
      {
        props.selected.name === "Work" ?
          <button onClick={handleClick} id="Category" name="Work" style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}><MdComputer style={{fill: "#ffffff"}}/> Work</button> :
          <button onClick={handleClick} id="Category" name="Work"><MdComputer style={{fill: "#FF4B2B"}} /> Work</button>
      }
      {
        props.selected.name === "Personal" ?
          <button onClick={handleClick} id="Category" name="Personal" style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}><MdPersonOutline style={{fill: "#ffffff"}}/> Personal</button> :
          <button onClick={handleClick} id="Category" name="Personal"><MdPersonOutline style={{fill: "#FF4B2B"}}/> Personal</button>
      }
      {
        props.selected.name === "Household" ?
          <button onClick={handleClick} id="Category" name="Household" style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}><BsHouseDoor style={{fill: "#ffffff"}}/> Household</button> :
          <button onClick={handleClick} id="Category" name="Household"><BsHouseDoor style={{fill: "#FF4B2B"}}/> Household</button>
      }
      {
        props.selected.name === "Social" ?
          <button onClick={handleClick} id="Category" name="Social" style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}><MdPeopleOutline style={{fill: "#ffffff"}}/> Social</button> :
          <button onClick={handleClick} id="Category" name="Social"><MdPeopleOutline style={{fill: "#FF4B2B"}}/> Social</button>
      }
      <br/>
      <h3>. . . . . . . . </h3>
      <p>Priority</p>
      {
        props.selected.name === "3" ?
          <button onClick={handleClick} id="Priority" name="3" style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}>High</button> :
          <button onClick={handleClick} id="Priority" name="3">High</button>
      }
      {
        props.selected.name === "2" ?
          <button onClick={handleClick} id="Priority" name="2" style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}>Medium</button> :
          <button onClick={handleClick} id="Priority" name="2">Medium</button>
      }
      {
        props.selected.name === "1" ?
          <button onClick={handleClick} id="Priority" name="1" style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}>Low</button> :
          <button onClick={handleClick} id="Priority" name="1">Low</button>
      }
    </div>
  )
}
