import React from 'react';
import './DetailedTable.css';

const DetailedTable = ({ data }) => {
  return (
    <div className="table-container">
      <h2>Detailed Learner Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Competency</th>
            <th>Progress</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.role}</td>
              <td>{row.competency}</td>
              <td>{row.progress}%</td>
              <td>{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailedTable;
