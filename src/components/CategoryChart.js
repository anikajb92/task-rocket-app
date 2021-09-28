import React, {useState} from 'react';
import { Chart } from "react-google-charts";

export default function CategoryChart(props) {

  return (
    <div>
      <Chart
        width={'200px'}
        height={'200px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={props.data}
        options={{
          legend: 'none',
          pieSliceText: 'label',
          title: 'Number of Tasks Per Category',
          pieStartAngle: 100,
        }}
        rootProps={{ 'data-testid': '4' }}
      />
    </div>
  )
}
