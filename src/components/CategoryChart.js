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
            0: { color: '#24D9F8',textStyle: {fontSize: 12, color: '#5A5A5A'}}, // --darkblue
            1: { color: '#92EBFA', textStyle: {fontSize: 12, color: '#5A5A5A'} }, // --medorange
            2: { color: '#76E1F8', textStyle: {fontSize: 12, color: '#5A5A5A'} }, // --darkyellow
            3: { color: '#E1E1E7', textStyle: {fontSize: 12, color: '#5A5A5A'}},  // --lightorange
            4: { color: '#76E1F8' } // --medblue
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
