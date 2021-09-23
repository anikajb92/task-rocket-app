import React from 'react';
import Tasks from './Tasks';

export default function CategoryList(props) {

  const renderTasks = () => props.tasks.map(task => {
    return <Tasks 
      description={task.description}
      dueDate={task.dueDate}
      dueToday={task.dueToday}
      priority={task.priority}
    />
  })
  return (
    <div className="categorylist">
      <h3>{}</h3>
    </div>
  )
}
