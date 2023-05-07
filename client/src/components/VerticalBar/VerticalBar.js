import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const VerticalBar = ({data}) => {

  return (
    <div style={{margin: '3rem'}}>
      <BarChart width={750} height={500} data={data}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="year"/>
        <YAxis/>
        <Tooltip />
        <Legend />
        <Bar dataKey="REP" fill="#E63946" />
        <Bar dataKey="DEM" fill="#457B9D" />
        <Bar dataKey="IND" fill="#F9DEC9" />
      </BarChart>
    </div>
  )
}

export default VerticalBar