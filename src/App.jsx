import { DashboardPage } from './pages/dashboard/DashboardPage';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

import './App.css';

function App() {
  return (
  <div className="app-layout">
    <Sidebar /> 
    
    <main className="main">
    <DashboardPage />
    </main>
  </div>
);
}

export default App;