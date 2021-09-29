import React, {useState, useEffect} from 'react';
import CategoryChart from './CategoryChart';

import {BsClockHistory} from 'react-icons/bs';
import {AiOutlineThunderbolt} from 'react-icons/ai';
import {BiCalendarCheck} from 'react-icons/bi';

export default function StatsContainer() {
  const [tasksPer, setTasksPer]= useState([])
  const [percentComplete, setPercentComplete] = useState([])
  const [userActive, setUserActive] = useState('')
  const [mostProductive, setMostProductive] = useState('Monday')

  useEffect(() => {
    fetch('http://localhost:3000/stats', {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      setTasksPer(result.num_tasks_per_category);
      setPercentComplete(result.perc_tasks_completed);
      setUserActive(result.user_active);
    })
  }, [])

  return (
    <div className="allStats">
      <p><AiOutlineThunderbolt /> Great work! You have completed <span>{percentComplete[3]}%</span> of your tasks. That's <span>{percentComplete[1]}</span> tasks done and <span>{percentComplete[7]}</span> to go.</p>
      <p><BsClockHistory /> You have been a member for <span>{userActive}</span> hours.</p>
      <p><BiCalendarCheck /> Most of your tasks are completed on <span>{mostProductive}s</span>.</p>
      <CategoryChart data={tasksPer}/>
    </div>
  )
}
