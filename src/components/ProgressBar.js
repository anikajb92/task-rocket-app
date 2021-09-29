import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar({data}) {

  return (
    <div className="chart" style={{ width: 200, height: 200 }}>
      <CircularProgressbar 
        value={data[3]} 
        text={`${data[3]}%`}
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          textsize: '16px',
          textColor: '#FF416C',
          trailColor: '#eee',
          backgroundColor: '#eee',
        })}
      />
    </div>
  )
}
