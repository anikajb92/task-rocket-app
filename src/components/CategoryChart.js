import React, {useState} from 'react';
import { Chart } from "react-google-charts";

export default function CategoryChart(props) {

  return (
    <div className="chart">
      <Chart
        width={'200px'}
        height={'200px'}
        chartType="PieChart"
        loader={<div>Preparing for Liftoff...</div>}
        data={[['Category', 'Number of Tasks Per'], ...props.data]}
        options={{
          legend: 'none',
          pieSliceText: 'label',
          title: 'Number of Tasks Per Category',
          pieStartAngle: 100,
          slices: {
            0: { color: '#FF416C' }, // pink
            1: { color: '#FF4B2B' }, // orange
            2: { color: '#FFB627' }, // yellow
            3: { color: '#00A6A6' },  // blue
            4: { color: '#F7EDF0' } // 
          }, 
          is3D: true, 
          fontName: "Montserrat", 
          chartArea: {
            width: "100%",
            height: "100%"
          }, 
          backgroundColor: "transparent",
          textStyle: {
              color: "233238",
              fontSize: 20
            }
        }}
        rootProps={{ 'data-testid': '4' }}
      />
    </div>
  )
}
