import React from 'react'

export default function SideBar(props) {

  const handleClick = (event) => {
    props.changeSelected(event.target.name)
  }

  return (
    <div className="aside">
      <p id="title" >Filter</p>
      {props.selected === "all" ?
        <button onClick={handleClick} name="all" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>All Tasks</button> :
        <button onClick={handleClick} name="all">All Tasks</button>
      }
      <h3>. . . . . . . . . .</h3>
      <p>Categories</p>
      {
        props.selected === "Hot Drink" ?
          <button onClick={handleClick} name="Hot Drink" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>(Category 1)</button> :
          <button onClick={handleClick} name="Hot Drink">Hot Drinks</button>
      }
      {
        props.selected === "Cold Drink" ?
          <button onClick={handleClick} name="Cold Drink" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>(Category 2)</button> :
          <button onClick={handleClick} name="Cold Drink">Cold Drinks</button>
      }
      <h3>. . . . . . . . . .</h3>
      <p>DueDate</p>
      {
        props.selected === "Pastry" ?
          <button onClick={handleClick} name="Pastry" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Today</button> :
          <button onClick={handleClick} name="Pastry">Today</button>
      }
      {
        props.selected === "Pastry" ?
          <button onClick={handleClick} name="Pastry" style={{ backgroundColor: "#FF4B2B", color: "#fffff" }}>Next 7 Days</button> :
          <button onClick={handleClick} name="Pastry">Next 7 Days</button>
      }
    </div>
  )
}
