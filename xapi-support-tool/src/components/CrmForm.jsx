import React, { useState, useEffect, useRef } from 'react';
import { initializeXAPI, sendInteractedStatement, sendSelectedStatement, sendStruggledStatement } from '../lib/xapi';
import './CrmForm.css';

const CrmForm = () => {
  const [stage, setStage] = useState('');
  const [value, setValue] = useState('');
  const struggleTimer = useRef(null);

  useEffect(() => {
    initializeXAPI(); // Initialize xAPI when the component mounts
    return () => clearTimeout(struggleTimer.current);
  }, []);

  const handleFocus = (fieldId, fieldName) => {
    sendInteractedStatement(fieldId, fieldName);
    // Start a timer to detect if the user is struggling
    if (fieldId === 'estimatedValue') {
      struggleTimer.current = setTimeout(() => {
        sendStruggledStatement(fieldId, fieldName);
      }, 10000); // 10 seconds
    }
  };

  const handleBlur = () => {
    // Clear the struggle timer if the user moves on
    clearTimeout(struggleTimer.current);
  };

  const handleStageChange = (e) => {
    const newStage = e.target.value;
    setStage(newStage);
    sendSelectedStatement('salesStage', 'Sales Stage', newStage);
  };

  return (
    <div className="crm-form-container">
      <h2>Create New Opportunity</h2>
      <form className="crm-form">
        <div className="form-group">
          <label htmlFor="opportunityName">Opportunity Name</label>
          <input
            type="text"
            id="opportunityName"
            onFocus={() => handleFocus('opportunityName', 'Opportunity Name')}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountName">Account Name</label>
          <input
            type="text"
            id="accountName"
            onFocus={() => handleFocus('accountName', 'Account Name')}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="salesStage">Sales Stage</label>
          <select
            id="salesStage"
            value={stage}
            onFocus={() => handleFocus('salesStage', 'Sales Stage')}
            onChange={handleStageChange}
            onBlur={handleBlur}
          >
            <option value="">Select a stage...</option>
            <option value="prospecting">Prospecting</option>
            <option value="qualification">Qualification</option>
            <option value="proposal">Proposal</option>
            <option value="negotiation">Negotiation</option>
            <option value="closed-won">Closed-Won</option>
            <option value="closed-lost">Closed-Lost</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="estimatedValue">Estimated Value ($)</label>
          <input
            type="number"
            id="estimatedValue"
            value={value}
            onFocus={() => handleFocus('estimatedValue', 'Estimated Value')}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
            placeholder="e.g., 50000"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-btn">Create Opportunity</button>
        </div>
      </form>
    </div>
  );
};

export default CrmForm;
