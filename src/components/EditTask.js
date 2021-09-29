import React, {useState} from 'react';

export default function EditTask(props) {
  console.log("props.selectedToEdit", props.selectedToEdit);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="editForm">
          <button className="ghost" onClick={() => props.setOpenEditTask(false)}> X </button>
          <form onSubmit={props.handleEditTask} className="taskform">
            <h2>Update This Task</h2>
            <label> Description: 
              <input
                type='text'
                value={props.selectedToEdit.description}
                name="description"
                onChange={(event) => props.setSelectedToEdit({ ...props.selectedToEdit, description: event.target.value})}
              />
            </label> 
            <br/>
            <label> Category: 
                <select 
                  name="category" 
                  value={props.selectedToEdit.category}
                  id="category" 
                  onChange={(event) => props.setSelectedToEdit({ ...props.selectedToEdit, category: event.target.value})}
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
                value={props.selectedToEdit.priority}
                name='priority'
                onChange={(event) => props.setSelectedToEdit({ ...props.selectedToEdit, priority: event.target.value})}
              />
            </label> 
            <br/>
            {/* <label> Completed?
              <select
                name="completed"
                defaultValue={props.selectedToEdit.completed}
                id="completed"
                onChange={(event) => props.setCompleted(event.target.value)}
              >
                <option value={false} >Negatory</option>
                <option value={true} >Affirmative</option>
              </select>
            </label> */}
            <br/>
            <div className="editFormButtons">
              {/* <button className="ghost" onClick={() => props.setOpenEditTask(false)}> Cancel </button> */}
              <button className="ghost">Submit Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
