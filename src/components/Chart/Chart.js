import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    let totalMaxium = Math.max(...dataPointValues);
    return <div className="chart">
        {props.dataPoints.map((datapoint,index) => 
        <ChartBar 
        key={index}
        value={datapoint.value} 
        maxValue={totalMaxium} 
        label={datapoint.label} />
        )}
    </div>
};
export default Chart;