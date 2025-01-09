import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import App from './App';
import Login from './components/Login'; // Import the Login component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define the route for the Home page */}
        <Route path="/" element={<App />} />

        {/* Define the route for the Login page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// Performance monitoring
reportWebVitals();
