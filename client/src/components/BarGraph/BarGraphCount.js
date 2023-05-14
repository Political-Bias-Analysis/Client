import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";

import "./BarGraph.css"

const BarGraphCount = ({ data}) => {
    console.log(data)
  return (
    <div className='map-container-bar'>
      <p className='title'>Article Count By Source and Biased Term</p>
      
      <BarChart width={500} height={400} data={data}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="main_bias" width={100}>
          <Label value="Biased Term" offset={1} position="bottom" />
        </XAxis>
        <YAxis
            label={{ value: 'Number of Article Count', angle: -90, position: 'center', dx: -20}}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="CNN" fill="#D62828" />
        <Bar dataKey="NPR" fill="#3A405A" />
        <Bar dataKey="FOX" fill="#003049" />
        <Bar dataKey="CBS" fill="#FCBF49" />
      </BarChart>
    </div>
  )
}

export default BarGraphCount