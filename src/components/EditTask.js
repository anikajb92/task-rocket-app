import React, {useState} from 'react';

export default function EditTask(props) {
  // const {id} = props.match.params.id
  

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="editForm">
          <button className="ghost" onClick={() => props.handleEdit(false)}> X </button>
          <form onSubmit={props.submitUpdate} className="taskform">
            <h2>Update This Task</h2>
            <label> Description: 
              <input
                type='text'
                placeholder="Type Here"
                value={props.description}
                name='description'
                onChange={(event) => props.setDescription(event.target.value)}
              />
            </label> 
            <br/>
            <label> Category: 
                <select 
                  name="category" 
                  value={props.category} 
                  id="category" 
                  onChange={(event) => props.setCategory(event.target.value)}
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
                value={props.priority}
                name='priority'
                onChange={(event) => props.setPriority(event.target.value)}
              />
            </label> {/* WORKING, BUT NEED TO SEE DIGIT ON SLIDER */}
            <br/>
            <label> Completed?
              <select
                name="completed"
                value={props.completed}
                id="completed"
                onChange={(event) => props.setCompleted(event.target.value)}
              >
                <option value="true" value="true">Affirmative</option>
                <option value="false" value="false">Negatory</option>
              </select>
            </label>

            <br/>
            <div className="editFormButtons">
              <button className="ghost" onClick={() => props.handleEdit(false)}> Cancel </button>
              <button className="ghost">{props.submitted? "Updated!" : "Submit Update"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
