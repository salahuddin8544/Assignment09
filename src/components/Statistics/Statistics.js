import React ,{ PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const questions = useLoaderData();
    const totalData = questions.data;
    console.log(totalData);
    for(const total of totalData){
        const data = total.total
        
    }
    return (
            <BarChart width={150} height={40} data={questions.data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
    );
};

export default Statistics;