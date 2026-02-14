import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home'; 
import TeacherDashboard from './pages/projects/teacherdashboard';
import StudentDashboard from './pages/projects/studentdashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/pages/projects/studentdashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;