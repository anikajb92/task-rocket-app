import React from 'react';
import CategoryChart from './CategoryChart';
import ProgressBar from './ProgressBar';

import {BsClockHistory} from 'react-icons/bs';
import {AiOutlineThunderbolt, AiOutlinePieChart} from 'react-icons/ai';
import {BiCalendarCheck} from 'react-icons/bi';

export default function StatsContainer(props) {

  return (
    <div className="allStats">
      <vl></vl>
      <p><BiCalendarCheck /> Interesting! Most of your tasks are completed on <span>{props.mostProductive[0]}s</span>.</p>
      <vl></vl>
      <p><AiOutlineThunderbolt /> Great work! You have completed <span>{props.percentComplete[1]}</span> of your <span>{props.percentComplete[5]}</span> tasks.</p>
      <ProgressBar data={props.percentComplete}/>
      <br/>
      <vl></vl>
      <p><BsClockHistory /> Your average task takes <span>{props.avgCompletion}</span> hours to complete.</p>
      <vl></vl>
      <p><AiOutlinePieChart /> Most of your tasks are associated with <span>{props.mostTasksPer[0]}.</span></p>
      <CategoryChart data={props.tasksPer}/>
    </div>
  )
}
