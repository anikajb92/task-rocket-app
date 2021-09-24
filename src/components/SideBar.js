import React from 'react'

export default function SideBar(props) {

  const handleClick = (event) => {
    props.changeSelected(event.target.name)
    console.log(props.selected);
  }

  return (
    <div className="aside">
      <p id="title" >Filter</p>
      {props.selected === "all" ?
        <button onClick={handleClick} name="all tasks" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>All Tasks</button> :
        <button onClick={handleClick} name="all tasks">All Tasks</button>
      }
      <h3>. . . . . . . . . .</h3>
      <p>Categories</p>
      {
        props.selected === "Category 1" ?
          <button onClick={handleClick} style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>(Category 1)</button> :
          <button onClick={handleClick}>(Category 1)</button>
      }
      {
        props.selected === "Category 2" ?
          <button onClick={handleClick} style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>(Category 2)</button> :
          <button onClick={handleClick}>(Category 2)</button>
      }
      <h3>. . . . . . . . . .</h3>
      <p>Priority</p>
      {
        props.selected === "High" ?
          <button onClick={handleClick} name="High" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>High</button> :
          <button onClick={handleClick} name="High">High</button>
      }
      {
        props.selected === "Medium" ?
          <button onClick={handleClick} name="Medium" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Medium</button> :
          <button onClick={handleClick} name="Medium">Medium</button>
      }
      {
        props.selected === "Low" ?
          <button onClick={handleClick} name="Low" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Low</button> :
          <button onClick={handleClick} name="Low">Low</button>
      }
    </div>
  )
}
