import React from 'react';
import ReactMarkdown from 'react-markdown';
import './CurriculumDisplay.css';

const CurriculumDisplay = ({ curriculum }) => {
  if (!curriculum) {
    return null;
  }

  return (
    <div className="curriculum-display">
      <h2>Generated Curriculum</h2>
      <div className="curriculum-content">
        <ReactMarkdown>{curriculum}</ReactMarkdown>
      </div>
    </div>
  );
};

export default CurriculumDisplay;
