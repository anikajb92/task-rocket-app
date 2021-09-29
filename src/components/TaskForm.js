import React from 'react';
import {useState} from 'react';
import Tasks from './Tasks';

export default function TaskForm(props) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="ghost" onClick={() => props.setOpenAddTask(false)}> X </button>
        <form onSubmit={props.handleAddTask} className="taskform">
          <h2>Add A Task</h2>
          <label> Description: 
            <input
              type='text'
              placeholder='Type Here'
              value={props.task.description}
              name='description'
              onChange={(event) => props.setTask({ ...props.task, description: event.target.value})}
            />
          </label>
          <br/>
          <label> Category: 
              <select 
                name="category" 
                value={props.task.category} 
                id="category" 
                onChange={(event) => props.setTask({ ...props.task, category: event.target.value})}
              >
                <option value="Work">Work</option>
                <option value="Household">Household</option>
                <option value="Personal">Personal</option>
                <option value="Social">Social</option>
              </select>
          </label> 
          <br/>
          <label> Priority Level: 
            <input
              type='range'
              min="1"
              max="3"
              value={props.task.priority}
              name='priority'
              onChange={(event) => props.setTask({ ...props.task, priority: event.target.value})}
            />
          </label> 
          <br/>
          <div className="editFormButtons">
            {/* <button className="ghost" onClick={() => props.setOpenAddTask(false)}>Cancel</button> */}
            <button type="submit" className="ghost" onClick={() => props.setOpenAddTask(false)}>Add To My List</button>
          </div>
        </form>
      </div>
    </div>
  )
}
