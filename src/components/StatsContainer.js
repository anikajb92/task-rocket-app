import React from 'react';
import CategoryChart from './CategoryChart';
import ProgressBar from './ProgressBar';

import {BsClockHistory} from 'react-icons/bs';
import {AiOutlineThunderbolt} from 'react-icons/ai';
import {BiCalendarCheck} from 'react-icons/bi';

export default function StatsContainer(props) {

  return (
    <div className="allStats">
      <p><BiCalendarCheck /> Interesting! Most of your tasks are completed on <span>{props.mostProductive}s</span>.</p>
      <p><AiOutlineThunderbolt /> Great work! You have completed <span>{props.percentComplete[3]}%</span> of your tasks. That's <span>{props.percentComplete[1]}</span> tasks done and <span>{props.percentComplete[7]}</span> to go.</p>
      <ProgressBar data={props.percentComplete}/>
      <p><BsClockHistory /> You have been a member for <span>{props.userActive}</span> hours.</p>
      <CategoryChart data={props.tasksPer}/>
    </div>
  )
}
