import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer
} from "recharts";
import { Paper } from '@mui/material';
import "./BarGraph.css"

const BarGraph = ({title, data}) => {

  return (
    <Paper className='map-container-bar' elevation={8}>
      <p className='title'>Total Votes of the {title} Elections (In Million)</p>
      <ResponsiveContainer width="99%" height={420}>
      <BarChart width={400} height={420} data={data}>
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
      </ResponsiveContainer>
    </Paper>
  )
}

export default BarGraph