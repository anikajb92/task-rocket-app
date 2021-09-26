import React from 'react';
import {useState} from 'react';

export default function TaskForm() {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState(2);
  const [completed, setCompleted] = useState(false);
  // add in due date, and timer features later

  const handleSubmit = event => {
    event.preventDefault();
    console.log("form values logged as", description, category, priority, completed)

    // fetch('http://localhost:3000/tasks', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json', 
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${localStorage.token}`
    //   },
    //   body: JSON.stringify({task: {description, category, priority, completed}})
    // })
    // .then(response => response.json())
    // .then(result => {
    //   if (result.error) {
    //     console.log(result.error)
    //   } else {
    //     console.log(result)
    //   }
    // })
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>------Task Form------</h2>
      <h3>Add A Task </h3>
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
        {/* <input
          type='text'
          placeholder=''
          value={category}
          name='Category'
          
          /> */}
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
       <button>Add To My List</button>
    </form>
  )
}
