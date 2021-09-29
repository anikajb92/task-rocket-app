import React from 'react';
import {useState} from 'react';
import Tasks from './Tasks';

export default function TaskForm(props) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Work');
  const [priority, setPriority] = useState(2);
  const [completed, setCompleted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // add in due date, and timer features later

  const handleSubmit = event => {
    event.preventDefault();
    console.log("form values logged as", description, category, priority, completed)

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({task: {description, category, priority, completed}})
    })
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        console.log(result.error)
      } else {
        console.log(result);
        props.setTasks([...props.tasks, result]);
        setSubmitted(true);
        // write function to have Thank You/Nice work modal pop up 
      }
    })
  }


  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="ghost" onClick={() => props.handleOpenAdd(false)}> X </button>
        <form onSubmit={handleSubmit} className="taskform">
          <h2>{submitted? "Add Another Task" : "Add A Task"}</h2>
          <label> Description: 
            <input
              type='text'
              placeholder='Type Here'
              value={description}
              name='description'
              onChange={(event) => setDescription(event.target.value)}
            />
          </label> {/* WORKING */}
          <br/>
          <label> Category: 
              <select 
                name="category" 
                value={category} 
                id="category" 
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="Work">Work</option>
                <option value="Household">Household</option>
                <option value="Personal">Personal</option>
                <option value="Social">Social</option>
              </select>
          </label> {/* WORKING, but need to change to drop down and add text field */}
          <br/>
          <label> Priority Level: 
            <input
              type='range'
              min="1"
              max="3"
              value={priority}
              name='priority'
              onChange={(event) => setPriority(event.target.value)}
            />
          </label> {/* WORKING, BUT NEED TO SEE DIGIT ON SLIDER */}
          <br/>
          <div className="editFormButtons">
            <button className="ghost" onClick={() => props.handleOpenAdd(false)}>Cancel</button>
            <button className="ghost">{submitted? "Added!" : "Add To My List"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
