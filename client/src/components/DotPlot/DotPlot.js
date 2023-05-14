import React from 'react'
import { Paper, Card } from '@mui/material'
import { 
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Scatter,
  Label
} from 'recharts'

import './DotPlot.css'


const DotPlot = ({data}) => {

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      console.log(payload[0].payload)
      return (
        <Card className="custom-toolkit">
          <p className="label">{`State : ${payload[0].payload.state_name}`}</p>
          <p className="intro">{`Vote Percentage : ${payload[0].payload.registeredPer}%`}</p>
        </Card>
      )
      
    }
  
    return null;
  };
  
  return (
    <div className='dot-plot-container'>
      <Paper className='dot-plot-paper'>
        <p className='title-dot-plot'>Percentage of Registered Voters by State</p>
        <ScatterChart
          width={1500}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 10,
            left: 10,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <YAxis dataKey="registeredPer" type="number" name="registeredPer" domain={[40,80]}
            label={{ value: 'Registration Percentage (%)', angle: -90, position: 'center', dx: -20}}
          />
          <XAxis type="category" dataKey="state" name="state">
            <Label value="State Abbreviation" offset={5} position="bottom" />
          </XAxis>
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name='Percentage of Registered Voters'  data={data} fill='#00BBE0'/>
        </ScatterChart>
      </Paper>
    </div>
  )
}

export default DotPlot;