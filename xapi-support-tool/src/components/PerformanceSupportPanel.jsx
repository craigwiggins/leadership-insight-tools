import React, { useState, useEffect } from 'react';
import { resources } from '../data';
import Resource from './Resource';
import './PerformanceSupportPanel.css';

const PerformanceSupportPanel = () => {
  const [currentResources, setCurrentResources] = useState(resources.default);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const handleStatement = (event) => {
      const statement = event.detail;
      setHistory(prev => [...prev, statement]); // Add statement to history

      const verbId = statement.verb.id.split('/').pop(); // 'interacted', 'struggled', etc.
      const objectId = statement.object.id.split('#').pop(); // 'salesStage', 'estimatedValue', etc.

      // Check if there are specific resources for the current context
      if (resources[verbId] && resources[verbId][objectId]) {
        setCurrentResources(resources[verbId][objectId]);
      } else {
        // Fallback to default if no specific resources are found
        setCurrentResources(resources.default);
      }
    };

    window.addEventListener('statementSaved', handleStatement);

    // Cleanup
    return () => {
      window.removeEventListener('statementSaved', handleStatement);
    };
  }, []);

  return (
    <aside className="pst-panel">
      <div className="pst-header">
        <h3>Performance Support</h3>
      </div>
      <div className="pst-content">
        <h4>Recommended Resources</h4>
        {currentResources.map(res => (
          <Resource key={res.id} type={res.type} title={res.title} url={res.url} />
        ))}
      </div>
      <div className="pst-history">
        <h4>xAPI Statement History</h4>
        <div className="history-log">
          {history.length === 0 ? <p>No statements yet.</p> : history.map(s => (
            <div key={s.id} className="history-item">
              <span>Actor: {s.actor.name}</span><br />
              <span>Verb: {s.verb.display['en-US']}</span><br />
              <span>Object: {s.object.definition.name['en-US']}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default PerformanceSupportPanel;
