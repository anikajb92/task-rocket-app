import React from 'react'

export default function SideBar(props) {

  const handleClick = (event) => {
    props.changeSelected(event.target.name, event.target.id)
    console.log("(delayed) props.selected", props.selected);
  }

  return (
    <div className="aside">
      <p id="title" >Filter</p>
      {props.selected === "All Tasks" ?
        <button onClick={handleClick} id="All tasks" name="All Tasks" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>All Tasks</button> :
        <button onClick={handleClick} id="All tasks" name="All Tasks">All Tasks</button>
      }
      <h3>. . . . . . . . . .</h3>
      <p>Categories</p>
      {
        props.selected === "Work" ?
          <button onClick={handleClick} id="Category" name="Work" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Work</button> :
          <button onClick={handleClick} id="Category" name="Work">Work</button>
      }
      {
        props.selected === "Personal" ?
          <button onClick={handleClick} id="Category" name="Personal" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Personal</button> :
          <button onClick={handleClick} id="Category" name="Personal">Personal</button>
      }
      {
        props.selected === "Household" ?
          <button onClick={handleClick} id="Category" name="Household" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Household</button> :
          <button onClick={handleClick} id="Category" name="Household">Household</button>
      }
      {
        props.selected === "Social" ?
          <button onClick={handleClick} id="Category" name="Social" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Social</button> :
          <button onClick={handleClick} id="Category" name="Social">Social</button>
      }
      <h3>. . . . . . . . . .</h3>
      <p>Priority</p>
      {
        props.selected === "3" ?
          <button onClick={handleClick} id="Priority" name="3" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>High</button> :
          <button onClick={handleClick} id="Priority" name="3">High</button>
      }
      {
        props.selected === "2" ?
          <button onClick={handleClick} id="Priority" name="2" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Medium</button> :
          <button onClick={handleClick} id="Priority" name="2">Medium</button>
      }
      {
        props.selected === "1" ?
          <button onClick={handleClick} id="Priority" name="1" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Low</button> :
          <button onClick={handleClick} id="Priority" name="1">Low</button>
      }
    </div>
  )
}
