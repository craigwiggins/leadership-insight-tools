import React from 'react';
import './Resource.css';

const Resource = ({ type, title, url }) => {
  const getEmoji = () => {
    switch (type.toLowerCase()) {
      case 'article':
        return '📄';
      case 'video':
        return '🎬';
      case 'job aid':
        return '🛠️';
      case 'checklist':
        return '✅';
      case 'contact':
        return '📧';
      default:
        return '🔗';
    }
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="resource-card">
      <div className="resource-icon">{getEmoji()}</div>
      <div className="resource-details">
        <span className="resource-type">{type}</span>
        <p className="resource-title">{title}</p>
      </div>
    </a>
  );
};

export default Resource;
