import axios from "axios";
import React, { useEffect, useState } from "react";

const ProfileOverview = () => {
  const [user, setUser] = useState(null);
  const [disposalCount, setDisposalCount] = useState(0);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);

    const fetchDisposals = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/e-waste/count", {
          withCredentials: true, // Include cookies for auth
        });
        setDisposalCount(res.data.count);
      } catch (err) {
        console.error("Error fetching disposal count:", err);
      }
    };

    if (userData) {
      fetchDisposals();
    }
  }, []);

  return (
    <section id="profile-overview" className="bg-white dark:bg-neutral-900 py-24 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Profile Summary Card */}
          <div className="w-full md:w-1/3">
            <div className="bg-green-50 dark:bg-neutral-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
              <div className="relative">
                <div className="h-32 w-32 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 bg-green-500 dark:bg-green-600 h-8 w-8 rounded-full flex items-center justify-center border-4 border-white dark:border-neutral-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-4">{user?.firstName} {user?.lastName}</h2>
              <p className="text-green-600 dark:text-green-400 font-medium">Eco Warrior - Level 3</p>

              {/* Progress bar */}
              <div className="mt-6 w-full">
                <div className="flex items-center mb-2">
                  <div className="h-3 w-full bg-gray-200 dark:bg-neutral-700 rounded-full">
                    <div className="h-3 bg-green-500 dark:bg-green-600 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">65%</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">250 more points to reach Level 4</p>
              </div>

              {/* Stats */}
              <div className="mt-8 flex flex-col w-full space-y-2">
                {[
                  { label: "Member Since", value: new Date(user?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  }) },
                  { label: "Total Disposals", value: disposalCount },
                  { label: "Eco Points", value: disposalCount*100 },
                  { label: "Carbon Saved", value: "278 kg" },
                ].map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center py-2 ${idx < 3 ? 'border-b border-gray-200 dark:border-neutral-700' : ''}`}>
                    <span className="text-gray-600 dark:text-gray-300">{item.label}</span>
                    <span className="font-semibold text-gray-800 dark:text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User Information and Environmental Impact */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">

            {/* Personal Info */}
            <div className="bg-white dark:bg-neutral-800 shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-green-600 dark:bg-green-700">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Personal Information
                </h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Full Name", value:user?.firstName + " " + user?.lastName },
                  { label: "Email Address", value: user?.email },
                  { label: "Phone Number", value: "+1 (555) 123-4567" },
                  { label: "Location", value: user?.location },
                  { label: "Occupation", value: "Software Engineer" },
                  { label: "Preferred Collection Method", value: "Drop-off Center" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</label>
                    <p className="text-gray-800 dark:text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 px-6 pb-4">
                <button className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium flex items-center transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Edit Information
                </button>
              </div>
            </div>

            {/* Environmental Impact (Placeholder to continue) */}
            {/* You can continue similarly for "Your Environmental Impact" block here */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileOverview;
