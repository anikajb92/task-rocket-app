import React from 'react';
import {MdComputer, MdPersonOutline, MdPeopleOutline} from 'react-icons/md';
import{BsHouseDoor} from 'react-icons/bs';
import {RiBarChartHorizontalLine} from 'react-icons/ri';

export default function SideBar(props) {

  //triggers changeSelected function on home.js level to setSelected filters
  const handleClick = (event) => {
    props.changeSelected(event.target.name, event.target.id)
  }

  return (
    <div className="aside">
      <h4 id="title" >Get Rock'n</h4>
      {props.openAddTask ? <button> Adding... </button>:
        <button onClick={() => props.setOpenAddTask(true)} style={{ backgroundColor: 'var(--medorange)', color: "#ffffff" }}> Add Task </button>
      }
      <hr/>
      <p id="title" >Filter Tasks</p>
      {props.selected.name === "All Tasks" ?
        <button onClick={handleClick} id="All Tasks" name="All Tasks" style={{ backgroundColor: 'var(--medorange)', color: "#ffffff" }}><RiBarChartHorizontalLine style={{fill: "#ffffff"}} /> All Pending Tasks</button> :
        <button onClick={handleClick} id="All Tasks" name="All Tasks"><RiBarChartHorizontalLine style={{fill: 'var(--medorange)'}} /> All Pending Tasks</button>
      }
      {props.selected.name === "Completed" ?
        <button onClick={handleClick} id="Completed" name="Completed" style={{ backgroundColor: 'var(--medorange)', color: "#ffffff" }}><RiBarChartHorizontalLine style={{fill: "#ffffff"}} /> All Completed Tasks</button> :
        <button onClick={handleClick} id="Completed" name="Completed"><RiBarChartHorizontalLine style={{fill: 'var(--medorange)'}} /> All Completed Tasks</button>
      }
      <hr/>
      <p>Categories</p>
      {
        props.selected.name === "Work" ?
          <button onClick={handleClick} id="Category" name="Work" style={{ backgroundColor: 'var(--medorange)', color: "#ffffff" }}><MdComputer style={{fill: "#ffffff"}}/> Work</button> :
          <button onClick={handleClick} id="Category" name="Work"><MdComputer style={{fill: 'var(--medorange)'}} /> Work</button>
      }
      {
        props.selected.name === "Personal" ?
          <button onClick={handleClick} id="Category" name="Personal" style={{ backgroundColor: 'var(--medorange)', color: "#ffffff" }}><MdPersonOutline style={{fill: "#ffffff"}}/> Personal</button> :
          <button onClick={handleClick} id="Category" name="Personal"><MdPersonOutline style={{fill: 'var(--medorange)'}}/> Personal</button>
      }
      {
        props.selected.name === "Household" ?
          <button onClick={handleClick} id="Category" name="Household" style={{ backgroundColor: 'var(--medorange)', color: "#ffffff" }}><BsHouseDoor style={{fill: "#ffffff"}}/> Household</button> :
          <button onClick={handleClick} id="Category" name="Household"><BsHouseDoor style={{fill: 'var(--medorange)'}}/> Household</button>
      }
      {
        props.selected.name === "Social" ?
          <button onClick={handleClick} id="Category" name="Social" style={{ backgroundColor: 'var(--medorange)', color: "#ffffff" }}><MdPeopleOutline style={{fill: "#ffffff"}}/> Social</button> :
          <button onClick={handleClick} id="Category" name="Social"><MdPeopleOutline style={{fill: 'var(--medorange)'}}/> Social</button>
      }
      <br/>
      <hr/>
      <p>Priority</p>
      {
        props.selected.name === "3" ?
          <button onClick={handleClick} id="Priority" name="3" style={{ backgroundColor: 'var(--medorange)', color: "#ffffff" }}>High</button> :
          <button onClick={handleClick} id="Priority" name="3" style={{ color: 'var(--medorange)', borderColor: 'var(--medorange)' }}>High</button>
      }
      {
        props.selected.name === "2" ?
          <button onClick={handleClick} id="Priority" name="2" style={{ backgroundColor: 'var(--lightorange)', color: "#ffffff" }}>Medium</button> :
          <button onClick={handleClick} id="Priority" name="2" style={{ color: 'var(--lightorange)'}}>Medium</button>
      }
      {
        props.selected.name === "1" ?
          <button onClick={handleClick} id="Priority" name="1" style={{ backgroundColor: 'var(--darkyellow)', color: "#ffffff", borderColor: 'var(--darkyellow)' }}>Low</button> :
          <button onClick={handleClick} id="Priority" name="1" style={{ color: 'var(--darkyellow)', borderColor: 'var(--darkyellow)' }}>Low</button>
      }
    </div>
  )
}
