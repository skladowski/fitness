import "./App.css";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { HistoryPage } from "./pages/history/HistoryPage";
import { GoalsPage } from "./pages/goal/GoalsPage";
import { GoalsProvider } from "./context/goalsProvider";
import { ProfileEditPage } from "./pages/profile/ProfileEditPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { ProfileProvider } from "./context/ProfileProvider";
import { AddWorkoutPage } from "./pages/workout/AddWorkoutPage";
import { WorkoutProvider } from "./context/WorkoutProvider";

function App() {
  return (
    <WorkoutProvider>
      <ProfileProvider>
        <GoalsProvider>
          <div className="app-layout">
            <Sidebar />
            <main className="main">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/goals" element={<GoalsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/edit" element={<ProfileEditPage />} />
                <Route path="/workout" element={<AddWorkoutPage />} />
              </Routes>
            </main>
          </div>
        </GoalsProvider>
      </ProfileProvider>
    </WorkoutProvider>
  );
}

export default App;
