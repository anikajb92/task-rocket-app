import React, {useState} from 'react';

export default function EditTask(props) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Work');
  const [priority, setPriority] = useState(2);
  const [completed, setCompleted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("form values updated as", description, category, priority, completed)

    fetch('http://localhost:3000/tasks', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({task: {description, category, priority, completed}})
    })
    .then(response => response.json())
    
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="editForm">
          <button className="ghost" onClick={() => props.handleEdit(false)}> X </button>
          <form onSubmit={handleSubmit} className="taskform">
            <h2>Update This Task</h2>
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
            </label> {/* WORKING, BUT NEED TO SEE DIGIT ON SLIDER */}
            <br/>
            <div className="editFormButtons">
              <button className="ghost">{submitted? "Updated!" : "Submit Update"}</button>
              <button className="ghost" onClick={() => props.handleEdit(false)}> Cancel </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
