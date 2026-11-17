import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './dashboard/pages/Dashboard';
import Attendance from './dashboard/pages/Attendance';
import Requirement from './dashboard/pages/Requirement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/attendance" element={<Attendance />} />
        <Route path="/dashboard/requirement" element={<Requirement />} />
        <Route path="/home" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
