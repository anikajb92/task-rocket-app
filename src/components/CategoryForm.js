import React from 'react';
import {useState} from 'react';

export default function CategoryForm() {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault()
    console.log('category created as', name)

    fetch('http://localhost:3000/categories', {
      method: 'POST', 
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({category: {name} })
    })
      .then(response => response.json())
      .then(result => console.log(result));
  }

  return (
    <div>
      <h2>-----Category Form------</h2>
      <h3>Let's Get You Ready To Rock These Tasks</h3>
      <form onSubmit={handleSubmit}>
        <label> What Would You Like To Create Tasks For?
          <input
            type="text"
            placeholder="Type Here"
            value={name}
            name='name'
            onChange={(event) => setName(event.target.value)}
          ></input>
        </label>
        <input
          type="submit"
          value="Let's Get Started"
        ></input>
      </form>
    </div>
  )
}
