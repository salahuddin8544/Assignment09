import React ,{ PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const questions = useLoaderData();
    const data = questions.data;
 
    console.log('this is fakedata', data);
    return (
            <BarChart width={500} height={400} data={data}>
          <Bar dataKey="total" fill="#8884d8" />
          <Bar dataKey="id" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </BarChart>
         
    );
};

export default Statistics;