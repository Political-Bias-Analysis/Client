import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import "./BarGraph.css"

const BarGraph = ({title, data}) => {

  return (
    <div className='map-container'>
      <p className='title'>Total Votes of the {title} Elections</p>
      
      <BarChart width={400} height={400} data={data}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="year"/>
        <YAxis/>
        <Tooltip />
        <Legend />
        <Bar dataKey="REP" fill="#E63946" />
        <Bar dataKey="DEM" fill="#457B9D" />
        {/* <Bar dataKey="IND" fill="#F9DEC9" /> */}
      </BarChart>
    </div>
  )
}

export default BarGraph