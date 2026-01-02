import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CompetencyChart.css';

const CompetencyChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h2>Competency Improvement</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pre" fill="#8884d8" name="Pre-Program" />
          <Bar dataKey="post" fill="#82ca9d" name="Post-Program" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompetencyChart;
