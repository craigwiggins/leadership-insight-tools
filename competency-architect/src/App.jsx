import React, { useState } from 'react';
import './App.css';
import CompetencySelector from './components/CompetencySelector';
import CurriculumDisplay from './components/CurriculumDisplay';
import { competencyModel } from './competencies';
import { GoogleGenerativeAI } from '@google/generative-ai';

function App() {
  const [curriculum, setCurriculum] = useState(null);
  const [selectedCompetencies, setSelectedCompetencies] = useState([]);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateCurriculum = async () => {
    if (!apiKey) {
      setError('Please enter your Gemini API key.');
      return;
    }

    setLoading(true);
    setError('');
    setCurriculum(null);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      const prompt = `
        As an expert in executive education and strategic curriculum design, create a comprehensive, multi-week blended learning curriculum for a ${competencyModel.role}.
        The curriculum should be based on the following selected competencies:
        - ${selectedCompetencies.join('\n- ')}

        For each competency, provide a mix of learning assets, including:
        - eLearning modules (suggested topics or platforms)
        - Relevant articles and book chapters (specific titles if possible)
        - Podcast episodes (specific shows or episodes)
        - On-the-job application projects (practical assignments)

        Also, include a section explaining the instructional justification for the curriculum design, linking it to established instructional design principles.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setCurriculum(text);
    } catch (err) {
      setError(err.message);
      console.error('Gemini API error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>LIT: Competency Architect</h1>
      </header>
      <main className="app-main">
        <div className="api-key-container">
          <label htmlFor="api-key">Gemini API Key:</label>
          <input
            type="password"
            id="api-key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your API key here"
          />
          <p className="api-key-warning">
            <strong>Warning:</strong> For demonstration purposes only. Do not use in production.
          </p>
        </div>
        <CompetencySelector
          competencyModel={competencyModel}
          selectedCompetencies={selectedCompetencies}
          setSelectedCompetencies={setSelectedCompetencies}
          onGenerateCurriculum={handleGenerateCurriculum}
          isLoading={loading}
        />
        {error && <p className="error-message">{error}</p>}
        {loading && <p className="loading-message">Generating curriculum...</p>}
        <CurriculumDisplay curriculum={curriculum} />
      </main>
    </div>
  );
}

export default App;
