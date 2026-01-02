import React from 'react';
import './CompetencySelector.css';

const CompetencySelector = ({
  competencyModel,
  selectedCompetencies,
  setSelectedCompetencies,
  onGenerateCurriculum,
  isLoading,
}) => {
  const handleCheckboxChange = (competencyName) => {
    setSelectedCompetencies(prev =>
      prev.includes(competencyName)
        ? prev.filter(item => item !== competencyName)
        : [...prev, competencyName]
    );
  };

  return (
    <div className="competency-selector">
      <h2>Select Competencies for {competencyModel.role}</h2>
      <div className="competency-list">
        {competencyModel.competencies.map(competency => (
          <div key={competency.name} className="competency-item">
            <input
              type="checkbox"
              id={competency.name}
              value={competency.name}
              checked={selectedCompetencies.includes(competency.name)}
              onChange={() => handleCheckboxChange(competency.name)}
              disabled={isLoading}
            />
            <label htmlFor={competency.name} title={competency.description}>
              {competency.name}
            </label>
          </div>
        ))}
      </div>
      <button
        className="generate-btn"
        onClick={onGenerateCurriculum}
        disabled={isLoading || selectedCompetencies.length === 0}
      >
        {isLoading ? 'Generating...' : 'Generate Curriculum'}
      </button>
    </div>
  );
};

export default CompetencySelector;
