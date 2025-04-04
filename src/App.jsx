// import './App.css'
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import LoginPage from './Pages/LoginPage';
// import UserHomePage from './Pages/Home';
// import CompanyHomePage from './Pages/CompanyHomePage';
// import Dashboard from './CompanySide/Dashboard';
// import EWasteTracking from './CompanySide/EWasteTracking';
// import Store from './Pages/Store';
// import About from './Pages/About';
// // import CompanyStorePage from './CompanySide/CompanyStorePage';

// import CollectionRequests from './CompanySide/CollectionRequest';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/user/home" element={<UserHomePage />} />
//           <Route path="/about" element={<About />} /> 
//           <Route path="/store" element={<Store />} />
        
//         {/* Company routes */}
//         <Route path="/company/home" element={<CompanyHomePage />}>
//           <Route index element={<Dashboard />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="e-waste-tracking" element={<EWasteTracking />} 
//           render={() => {
//             console.log('E-Waste Tracking Route Matched');
//             return <EWasteTracking />;}} />
//           <Route path="collection-requests" element={<CollectionRequests />} />
//           {/* <Route path="store" element={<CompanyStorePage />} />  */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import UserHomePage from './Pages/Home';
import CompanyHomePage from './Pages/CompanyHomePage';
import Dashboard from './CompanySide/Dashboard';
import EWasteTracking from './CompanySide/EWasteTracking';
import Store from './Pages/Store';
import About from './Pages/About';
import CompanyStorePage from './CompanySide/CompanyStorePage';

import CollectionRequests from './CompanySide/CollectionRequest';
import DataTable from './CompanySide/DataTable';
import Profile from './Pages/profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/home" element={<UserHomePage />} />
        <Route path="/user/profile" element={<Profile />} />
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
          <Route path="store" element={<CompanyStorePage />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;