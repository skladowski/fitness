import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";

import "./App.css";
import { HistoryPage } from "./pages/history/HistoryPage";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main">
        <Routes>
          {<Route path="/" element={<Navigate to="/dashboard" replace />} />}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route
            path="/profile"
            element={<div> Страница в разработке с </div>}
          />
          <Route
            path="/workout/new"
            element={<div> Страница в разработке </div>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
