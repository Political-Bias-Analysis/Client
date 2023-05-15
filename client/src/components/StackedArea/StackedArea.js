import React from 'react';
import { 
    AreaChart, 
    Area, XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    Legend
 } from 'recharts';
import { Paper } from '@mui/material';
import './StackedArea.css';

const StackedArea = ({data}) => {

    return (
        <Paper className='stacked-area-container' elevation={8}>
            <p className='article-title'>Number of Articles from 2016-2022 by Biased Term</p>
            <ResponsiveContainer width="99%" height={450}>
                <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Year', position: 'center', dy: 30}}/>
                <YAxis/>
                <Tooltip />
                    <Area type="monotone" dataKey="abortion" stackId="1" stroke="#264653" fill="#264653" />
                    <Area type="monotone" dataKey="racial" stackId="1" stroke="#2A9D8F" fill="#2A9D8F" />
                    <Area type="monotone" dataKey="socioeconomic" stackId="1" stroke="#E9C46A" fill="#E9C46A" />
                    <Area type="monotone" dataKey="immigration" stackId="1" stroke="#E76F51" fill="#E76F51" />
                <Tooltip />
                <Legend/>
                </AreaChart>
            </ResponsiveContainer>
        </Paper>
    );
  }


export default StackedArea 