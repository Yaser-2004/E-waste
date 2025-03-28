import React from 'react';
import { Link } from 'react-router-dom';
import NotificationBell from './NotificationBell';
import HelpButton from './HelpButton';

const CompanyHeader = ({ username = "Ram" }) => {
  const initials = username.split(' ').map(name => name[0]).join('');
  
  return (
    <header className="bg-green-800 text-white px-5 py-4 flex justify-between items-center">
      <div className="text-3xl font-bold ">EcoCycle</div>
      <div className="flex items-center gap-5">
        <NotificationBell />
        <HelpButton />
        <div className="flex items-center gap-3">
          <span>{username}</span>
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
            {initials}
          </div>
        </div>
      </div>
    </header>
  );
};


export default CompanyHeader;