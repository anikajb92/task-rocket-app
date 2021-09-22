import React from 'react';
import {useState} from 'react';

export default function TaskForm() {
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState();
  const [dueToday, setDueToday] = useState(false);
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState(2)
  const [timer, setTimer] = useState(0)

  const handleSubmit = event => {
    event.preventDefault();
    console.log("form values logged as", description, dueDate, dueToday, category, priority, timer)
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
      <label> Due Date: 
        <input
          type='date'
          placeholder=''
          value={dueToday}
          name='dueToday'
          onChange={(event) => setDueDate(event.target.value)}
        /> {/* NEED TO CHANGE FORMAT AND ALLOW DATE TO SHOW UP IN OPTION FIELD UPON SELECTION */}
          <select 
            name="dueToday" 
            value={dueDate} 
            onChange={(event) => setDueToday(event.target.value)}
          >
              <option value="null">Due Today?</option>
              <option value="true">Yes, I Have To Get This Done Today!</option>
              <option value="false">No, It Can Wait</option>
        </select> {/* ON CHANGE NOT SHOWING IN DROP DOWN */}
      </label>
      <br/>
      <label> Category: 
        <input
          type='text'
          placeholder=''
          value={category}
          name='dueDate'
          onChange={(event) => setCategory(event.target.value)}
          />
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
      <label> How Much Time To You Expect To Spend On This Task?
        <input
          type='time'
          value={timer}
          name='timer'
          onChange={(event) => setTimer(event.target.value)}
        /> 
      </label> {/* NEED TO CHANGE TYPE, "03:54 PM" shows as "15:54" in console when we need timer not time */}
      <br/>
       <input
        type="submit"
        value="Add To My List"
       >
       </input>
    </form>
  )
}
