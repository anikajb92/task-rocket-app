import React from 'react';
import TaskForm from './TaskForm';
import CategoryForm from './CategoryForm';

export default function Welcome() {
  const handleClick = () => {
    fetch('http://localhost:3000/users', {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(result => console.log(result));
  }
  return (
    <div>
      <h2>Welcome!</h2>
      <button onClick={handleClick}>Admin Access to see all users</button>
      <CategoryForm />
      <TaskForm />
    </div>
  )
}
