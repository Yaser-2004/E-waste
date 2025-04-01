import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import UserHomePage from './Pages/Home';
import CompanyHomePage from './Pages/CompanyHomePage';
import Dashboard from './CompanySide/Dashboard';
import EWasteTracking from './CompanySide/EWasteTracking';
import Store from './Sections/Store';
import About from './Pages/About';

import CollectionRequests from './CompanySide/CollectionRequest';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/home" element={<UserHomePage />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/store" element={<Store />} />
        
        {/* Company routes */}
        <Route path="/company/home" element={<CompanyHomePage />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="e-waste-tracking" element={<EWasteTracking />} 
          render={() => {
            console.log('E-Waste Tracking Route Matched');
            return <EWasteTracking />;}} />
          <Route path="collection-requests" element={<CollectionRequests />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;