import React from 'react';
import {useState} from 'react';

export default function TaskForm() {
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueToday, setDueToday] = useState(false);
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState(2)
  const [timer, setTimer] = useState(0)

  return (
    <form>
      <h2>Add A Task</h2>
      <label> Description: 
        <input
          type='text'
          placeholder='Type Here'
          value={description}
          name='description'
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br/>
      <label> Due Date: 
        <input
          type='date'
          placeholder=''
          value={dueToday}
          name='dueToday'
          onChange={(event) => setDueDate(event.target.value)}
        />
          <select 
            name="dueToday" 
            value={dueDate} 
            onChange={(event) => setDueToday(event.target.value)}
          >
              <option selected value="null">Due Today?</option>
              <option value="true">Yes, I Have To Get This Done Today!</option>
              <option value="false">No, It Can Wait</option>
        </select>
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
      </label>
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
      </label>
      <br/>
      <label> How Much Time To You Expect To Spend On This Task?
        <input
          type='time'
          value={timer}
          name='timer'
          onChange={(event) => setTimer(event.target.value)}
        /> 
      </label>
       
    </form>
  )
}
