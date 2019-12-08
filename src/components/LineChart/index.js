// @packages
import React from 'react';
import {
  LineChart as LineChartFromLibrary, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
} from 'recharts';

const LineChart = ({
  data, 
  dataKey, 
  width, 
  height
}) => (
  <LineChartFromLibrary
    data={data}
    width={width}
    height={height}
    margin={{
      top: 5, right: 30, left: 20, bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis yAxisId="left" />
    <Tooltip />
    <Legend />
    <Line 
      yAxisId="left" 
      type="number" 
      dataKey={dataKey} 
      stroke="#8884d8" 
      activeDot={{ r: 8  }} 
    />
  </LineChartFromLibrary>
);

LineChart.defaultProps = {
  data: [],
  dataKey: '$',
  width: 500,
  height: 300,
};

export default LineChart;
