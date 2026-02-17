import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home'; 
import TeacherDashboard from './pages/projects/teacherdashboard';
import StudentDashboard from './pages/projects/studentdashboard';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/pages/projects/studentdashboard" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;