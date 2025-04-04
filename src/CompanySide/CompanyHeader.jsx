import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NotificationBell from './NotificationBell';
import HelpButton from './HelpButton';
import axios from 'axios';

const CompanyHeader = ({ children }) => {
  const [companyName, setCompanyName] = useState('');
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const company = JSON.parse(localStorage?.getItem('company'));

    if (company) {
      setCompanyName(company.companyName);
    }
  }, []);

  const handleLogOut = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/company/logout", {}, {
        withCredentials: true, 
      });
  
      localStorage.removeItem('company');
      localStorage.removeItem('token');
  
      navigate('/login');
    } catch (error) {
      console.error("Logout failed: ", error.message);
      alert("Logout failed, please try again.");
    }
  }
  
  return (
    <header className="bg-green-800 text-white px-5 py-4 flex justify-between items-center">
      <div className="text-3xl font-bold">EcoCycle</div>
      <div className="flex items-center gap-5">
        {/* Store Link */}
        <Link 
          to="/company/home/store" 
          className="text-white hover:text-green-200 font-medium transition-colors duration-200"
        >
          Store
        </Link>
        {/* If children are passed, render them; otherwise, render default NotificationBell and HelpButton */}
        {children || (
          <>
            <NotificationBell />
            <HelpButton />
          </>
        )}
        <div className="flex items-center gap-3">
          <span>{companyName}</span>
          <div className="relative hover:cursor-pointer w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white" onClick={() => setDisplay(!display)}>
            {companyName.charAt(0)}

            <div className={`absolute p-3 text-black top-12 w-40 right-0 bg-white rounded-md border border-black ${!display ? 'hidden' : null}`}>
              <p className="pb-2 mb-2 border-b border-gray-200">{companyName}</p>
              <button className="block bg-green-400 rounded-md p-2 px-4 hover:cursor-pointer" onClick={() => handleLogOut()}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CompanyHeader;