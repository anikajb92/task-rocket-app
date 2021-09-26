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
        props.selected.category === "Work" ?
          <button onClick={handleClick} style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Work</button> :
          <button onClick={handleClick}>Work</button>
      }
      {
        props.selected.category === "Personal" ?
          <button onClick={handleClick} style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Personal</button> :
          <button onClick={handleClick}>Personal</button>
      }
      {
        props.selected.category === "Household" ?
          <button onClick={handleClick} style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Household</button> :
          <button onClick={handleClick}>Household</button>
      }
      {
        props.selected.category === "Social" ?
          <button onClick={handleClick} style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Social</button> :
          <button onClick={handleClick}>Social</button>
      }
      <h3>. . . . . . . . . .</h3>
      <p>Priority</p>
      {
        props.selected.priority === "3" ?
          <button onClick={handleClick} name="High" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>High</button> :
          <button onClick={handleClick} name="High">High</button>
      }
      {
        props.selected.priority === "2" ?
          <button onClick={handleClick} name="Medium" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Medium</button> :
          <button onClick={handleClick} name="Medium">Medium</button>
      }
      {
        props.selected.priority === "1" ?
          <button onClick={handleClick} name="Low" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Low</button> :
          <button onClick={handleClick} name="Low">Low</button>
      }
    </div>
  )
}
