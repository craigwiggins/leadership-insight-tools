import './App.css';
import CrmForm from './components/CrmForm';
import PerformanceSupportPanel from './components/PerformanceSupportPanel';

function App() {
  return (
    <>
          <header className="app-header">
            <h1>LIT | Performance Support Tool</h1>
          </header>
      
      <div className="app-container">
        <main className="form-section">
          <CrmForm />
        </main>
        <aside className="pst-section">
          <PerformanceSupportPanel />
        </aside>
      </div>
    </>
  );
}

export default App;