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
        <button onClick={() => props.setOpenAddTask(true)} style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}> Add A Task </button>
      }
      <hr/>
      <p id="title" >Filter Tasks</p>
      {props.selected.name === "All Tasks" ?
        <button onClick={handleClick} id="All Tasks" name="All Tasks" style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}><RiBarChartHorizontalLine style={{fill: "#ffffff"}} /> All Pending Tasks</button> :
        <button onClick={handleClick} id="All Tasks" name="All Tasks"><RiBarChartHorizontalLine style={{fill: "#FF4B2B"}} /> All Pending Tasks</button>
      }
      {props.selected.name === "Completed" ?
        <button onClick={handleClick} id="Completed" name="Completed" style={{ backgroundColor: "#FF4B2B", color: "#ffffff" }}><RiBarChartHorizontalLine style={{fill: "#ffffff"}} /> All Completed Tasks</button> :
        <button onClick={handleClick} id="Completed" name="Completed"><RiBarChartHorizontalLine style={{fill: "#FF4B2B"}} /> All Completed Tasks</button>
      }
      <hr/>
      <p>Categories</p>
      {
        props.selected.name === "Work" ?
          <button onClick={handleClick} id="Category" name="Work" style={{ borderColor: "var(--deeppurple)", backgroundColor: "var(--deeppurple)", color: "#ffffff" }}><MdComputer style={{fill: "#ffffff"}}/> Work</button> :
          <button onClick={handleClick} id="Category" name="Work" style={{ borderColor: "var(--deeppurple)", color: "var(--deeppurple)"}}><MdComputer style={{fill: "var(--deeppurple)"}} /> Work</button>
      }
      {
        props.selected.name === "Personal" ?
          <button onClick={handleClick} id="Category" name="Personal" style={{ borderColor: "var(--deeppurple)", backgroundColor: "var(--deeppurple)", color: "#ffffff" }}><MdPersonOutline style={{fill: "#ffffff"}}/> Personal</button> :
          <button onClick={handleClick} id="Category" name="Personal" style={{ borderColor: "var(--deeppurple)", color: "var(--deeppurple)"}}><MdPersonOutline style={{fill: "var(--deeppurple)"}}/> Personal</button>
      }
      {
        props.selected.name === "Household" ?
          <button onClick={handleClick} id="Category" name="Household" style={{ borderColor: "var(--deeppurple)", backgroundColor: "var(--deeppurple)", color: "#ffffff" }}><BsHouseDoor style={{fill: "#ffffff"}}/> Household</button> :
          <button onClick={handleClick} id="Category" name="Household" style={{ borderColor: "var(--deeppurple)", color: "var(--deeppurple)"}}><BsHouseDoor style={{fill: "var(--deeppurple)"}}/> Household</button>
      }
      {
        props.selected.name === "Social" ?
          <button onClick={handleClick} id="Category" name="Social" style={{ borderColor: "var(--deeppurple)", backgroundColor: "var(--deeppurple)", color: "#ffffff" }}><MdPeopleOutline style={{fill: "#ffffff"}}/> Social</button> :
          <button onClick={handleClick} id="Category" name="Social" style={{ borderColor: "var(--deeppurple)", color: "var(--deeppurple)"}}><MdPeopleOutline style={{fill: "var(--deeppurple)"}}/> Social</button>
      }
      <br/>
      <hr/>
      <p>Priority</p>
      {
        props.selected.name === "3" ?
          <button onClick={handleClick} id="Priority" name="3" style={{ borderColor: "var(--deeppink)", backgroundColor: "var(--deeppink)", color: "#ffffff" }}>High</button> :
          <button onClick={handleClick} id="Priority" name="3" style={{ borderColor: "var(--deeppink)", color: "var(--deeppink)"}}>High</button>
      }
      {
        props.selected.name === "2" ?
          <button onClick={handleClick} id="Priority" name="2" style={{ borderColor: "var(--darkpink)", backgroundColor: "var(--darkpink)", color: "#ffffff" }}>Medium</button> :
          <button onClick={handleClick} id="Priority" name="2" style={{ borderColor: "var(--darkpink)", color: "var(--darkpink)"}}>Medium</button>
      }
      {
        props.selected.name === "1" ?
          <button onClick={handleClick} id="Priority" name="1" style={{ borderColor: "var(--lightblush)", backgroundColor: "var(--lightblush)", color: "#ffffff" }}>Low</button> :
          <button onClick={handleClick} id="Priority" name="1" style={{ borderColor: "var(--lightblush)", color: "var(--lightblush)"}}>Low</button>
      }
    </div>
  )
}
