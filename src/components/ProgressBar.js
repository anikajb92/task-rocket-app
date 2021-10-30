import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar({data}) {

  return (
    <div className="chart" style={{ width: 150, height: 150 }}>
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
