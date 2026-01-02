import './App.css';
import Header from './components/Header';
import Kpi from './components/Kpi';
import CompetencyChart from './components/CompetencyChart';
import DetailedTable from './components/DetailedTable';
import { kpiData, competencyData, detailedData } from './data';

function App() {
  const formatCurrency = (value) => `$${(value / 1000).toFixed(0)}k`;
  const formatPercentage = (value) => `${value}%`;
  const formatROI = (value) => `${value}%`;

  return (
    <div className="app-container">
      <Header />
      <main className="dashboard-grid">
        <Kpi title="Total Investment" value={kpiData.totalInvestment} format={formatCurrency} />
        <Kpi title="Pipeline Impact" value={kpiData.pipelineImpact} format={formatCurrency} />
        <Kpi title="Avg. Competency Gain" value={kpiData.avgCompetencyGain} format={formatPercentage} />
        <Kpi title="Program ROI" value={kpiData.programROI} format={formatROI} />
        <div className="chart-section">
          <CompetencyChart data={competencyData} />
        </div>
        <div className="table-section">
          <DetailedTable data={detailedData} />
        </div>
      </main>
    </div>
  );
}

export default App;