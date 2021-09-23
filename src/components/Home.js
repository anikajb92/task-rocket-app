import React from 'react';
import '../styles/home.css';
import {FaBuffer} from "react-icons/fa";

import TaskForm from './TaskForm';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

export default function Welcome(props) {
  const renderCategories = () => props.categories.map(category => {
    console.log(category);
    return <h2><FaBuffer/> Name: {category.name}</h2>
    
    // return <CategoryList 
    //   name={category.name}
    //   tasks={category.tasks}
    // />
  })
  
  return (
    <div className="home">
      <h1>Welcome back, {props.user.firstname}!</h1>
      <br/>
      <div className="board">
        {renderCategories()}
      </div>
      <div>
        <CategoryForm />
        <TaskForm categories={props.categories}/>
      </div>
    </div>
  )
}
