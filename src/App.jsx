import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Dashboard = lazy(() => import('./dashboard/pages/Dashboard'));
const Attendance = lazy(() => import('./dashboard/pages/Attendance'));
const Requirement = lazy(() => import('./dashboard/pages/Requirement'));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 text-sm font-medium">
            Loading dashboard...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/attendance" element={<Attendance />} />
          <Route path="/dashboard/requirement" element={<Requirement />} />
          <Route path="/home" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
