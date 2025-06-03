import React, { useState, useEffect } from 'react';
import ScratchieGrowthDeck from './ScratchieGrowthDeck';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('scratchie-auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('scratchie-auth');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <ScratchieGrowthDeck onLogout={handleLogout} />
    </div>
  );
}

export default App;