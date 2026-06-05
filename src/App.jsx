import { DashboardPage } from './pages/dashboard/DashboardPage';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

import './App.css';
import { HistoryPage } from './pages/history/HistoryPage';

function App() {
  return (
  <div className="app-layout">
    <Sidebar /> 
    <main className="main">
      <Routes>
        {/* <Route path='/' element={<WelcomePage />} /> */}
        <Route path='/dashboard' element={<DashboardPage />} />
        {/* <Route path='/analytics' element={<AnalyticsPage />} /> */}
        <Route path='/history' element={<HistoryPage />} /> 
        {/* <Route path='/sleep' element={</SleepPage>} /> */}
     </Routes>
    </main>
  </div>
);
}

export default App;