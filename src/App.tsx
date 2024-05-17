import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import './App.css';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLoginSuccess = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
          <Route
            path="/"
            element={token ? <UserProfile token={token} onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to={token ? "/profile" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
