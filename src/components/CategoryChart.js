import React from 'react';
import { Chart } from "react-google-charts";

export default function CategoryChart(props) {

  return (
    <div className="chart">
      <Chart
        width={'210px'}
        height={'210px'}
        chartType="PieChart"
        loader={<div>Preparing for Liftoff...</div>}
        data={[['Category', 'Number of Tasks Per'], ...props.data]}
        options={{
          legend: 'none',
          pieSliceText: 'label',
          title: 'Number of Tasks Per Category',
          pieStartAngle: 100,
          slices: {
            0: { color: '#FF416C',textStyle: {fontSize: 15}, offset: 0.1 }, // pink
            1: { color: '#FFB627', textStyle: {fontSize: 12} }, // yellow
            2: { color: '#FF4B2B', textStyle: {fontSize: 13} }, // orange
            3: { color: '#00A6A6', textStyle: {fontSize: 15}},  // blue
            4: { color: '#F7EDF0' } //FF4B2B 
          }, 
          is3D: true, 
          fontName: "Montserrat", 
          chartArea: {
            width: "96%",
            height: "96%"
          }, 
          backgroundColor: "transparent"
        }}
        rootProps={{ 'data-testid': '4' }}
      />
    </div>
  )
}
