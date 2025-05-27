import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Invoices from './components/invoicesPage.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
         <Route path="/dashboard" element={<Dashboard />} />
         
        <Route path="/invoicesPage" element={<Invoices />} />
         <Route path="/customers" element={<div>Customers Page</div>} />
        <Route path="/bills" element={<div>Bills Page</div>} />
        <Route path="/vendors" element={<div>Vendors Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;