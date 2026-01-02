import React from 'react';
import './Kpi.css';

const Kpi = ({ title, value, format = (v) => v }) => {
  return (
    <div className="kpi-card">
      <h3 className="kpi-title">{title}</h3>
      <p className="kpi-value">{format(value)}</p>
    </div>
  );
};

export default Kpi;
