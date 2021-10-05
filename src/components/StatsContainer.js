import React from 'react';
import CategoryChart from './CategoryChart';
import ProgressBar from './ProgressBar';

import {BsClockHistory} from 'react-icons/bs';
import {AiOutlineThunderbolt} from 'react-icons/ai';
import {BiCalendarCheck} from 'react-icons/bi';

export default function StatsContainer(props) {

  return (
    <div className="allStats">
      <vl></vl>
      <p><BiCalendarCheck /> Interesting! Most of your tasks are completed on <span>{props.mostProductive}s</span>.</p>
      <vl></vl>
      <p><AiOutlineThunderbolt /> Great work! You have completed <span>{props.percentComplete[3]}%</span> of your tasks. That's <span>{props.percentComplete[1]}</span> tasks done and <span>{props.percentComplete[7]}</span> to go.</p>
      <ProgressBar data={props.percentComplete}/>
      <br/>
      <vl></vl>
      <p><BsClockHistory /> Your average task takes <span>{props.avgCompletion}</span> hours to complete.</p>
      <vl></vl>
      <CategoryChart data={props.tasksPer}/>
    </div>
  )
}
