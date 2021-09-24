import React, {useState} from 'react';
import '../styles/home.css';
import {FaBuffer} from "react-icons/fa";

import TaskForm from './TaskForm';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import SideBar from './SideBar';

export default function Welcome(props) {
  const [selected, setSelected]= useState("all");

  const renderCategories = () => props.categories.map(category => {
    console.log(category);
    return <h2><FaBuffer/> {category.name}</h2>
    
    // return <CategoryList 
    //   name={category.name}
    //   tasks={category.tasks}
    // />
  })

  const changeSelected = (value) => {setSelected(value)}
  
  return (
    <div className="home">
      {/* <h1>Welcome back, {props.user.firstname}!</h1>
      <br/> */}
      <div className="existing-tasks">
        <div className="aside-container">
          <SideBar 
          selected={selected} 
          changeSelected={changeSelected}
          />
        </div>
        <div className="board">
          {renderCategories()}
        </div>
      </div>
      <div className="new-tasks">
        <CategoryForm />
        <TaskForm categories={props.categories}/>
      </div>
    </div>
  )
}
