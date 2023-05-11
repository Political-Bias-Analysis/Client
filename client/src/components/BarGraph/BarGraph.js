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

const BarGraph = ({title, data}) => {

  return (
    <div className='map-container-bar'>
      <p className='title'>Total Votes of the {title} Elections (In Million)</p>
      
      <BarChart width={400} height={400} data={data}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="year" width={100}>
          <Label value="Election Year" offset={1} position="bottom" />
        </XAxis>
        <YAxis label={{ value: 'Number of Votes (Million)', angle: -90, position: 'center', dx: -20}}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="REP" fill="#E63946" />
        <Bar dataKey="DEM" fill="#457B9D" />
        {/* {title !== 'President' && <Bar dataKey="IND" fill="#F9DEC9" />} */}
      </BarChart>
    </div>
  )
}

export default BarGraph