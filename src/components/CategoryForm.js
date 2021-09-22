import React from 'react';
import {useState} from 'react';

export default function CategoryForm() {
  const [category, setCategory] = useState('');

  const handleSubmit = event => {
    event.preventDefault()
    console.log('category created as', category)

    fetch('http://localhost:3000/categories', {
      method: 'POST', 
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({category})
    })
      .then(response => response.json())
      .then(result => console.log(result));
  }

  return (
    <div>
      <h2>Let's Get You Ready To Rock These Tasks</h2>
      <form onSubmit={handleSubmit}>
        <label> What Would You Like To Create Tasks For?
          <input
            type="text"
            placeholder="Type Here"
            value={category}
            name='category'
            onChange={(event) => setCategory(event.target.value)}
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
