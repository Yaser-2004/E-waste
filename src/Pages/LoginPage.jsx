// LoginPage.jsx with black input text color
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('user');
  
  const [userFormData, setUserFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [companyFormData, setCompanyFormData] = useState({
    companyId: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleUserInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(`User input changed: ${name} = ${type === 'checkbox' ? checked : value}`);
    
    setUserFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCompanyInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(`Company input changed: ${name} = ${type === 'checkbox' ? checked : value}`);
    
    setCompanyFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateUserForm = () => {
    const newErrors = {};
    
    if (!userFormData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userFormData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!userFormData.password) {
      newErrors.password = 'Password is required';
    } else if (userFormData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateCompanyForm = () => {
    const newErrors = {};
    
    if (!companyFormData.companyId) {
      newErrors.companyId = 'Company ID is required';
    }
    
    if (!companyFormData.password) {
      newErrors.password = 'Password is required';
    } else if (companyFormData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting user form:', userFormData);
    
    if (validateUserForm()) {
      console.log('User form validated successfully');
      navigate('/user/home');
    } else {
      console.log('User form validation failed:', errors);
    }
  };

  const handleCompanySubmit = (e) => {
    e.preventDefault();
    console.log('Submitting company form:', companyFormData);
    
    if (validateCompanyForm()) {
      console.log('Company form validated successfully');
      navigate('/company/home');
    } else {
      console.log('Company form validation failed:', errors);
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* Banner/Left Side */}
      <div className="flex-1 bg-green-700 flex items-center justify-center p-8 text-white">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-4">EcoCycle</h1>
          <h2 className="text-2xl mb-6">E-Waste Management System</h2>
          <p className="text-base leading-relaxed">
            Join us in creating a sustainable future by responsibly managing electronic waste.
          </p>
        </div>
      </div>
      
      {/* Login Form Container/Right Side */}
      <div className="flex-1 flex flex-col p-8 bg-white">
        {/* Tabs */}
        <div className="flex mb-8">
          <button 
            className={`flex-1 py-4 text-base border-none transition-all duration-300 ${
              activeTab === 'user' 
                ? 'bg-green-700 text-white' 
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setActiveTab('user')}
            type="button"
          >
            User Login
          </button>
          <button 
            className={`flex-1 py-4 text-base border-none transition-all duration-300 ${
              activeTab === 'company' 
                ? 'bg-green-700 text-white' 
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setActiveTab('company')}
            type="button"
          >
            Company Login
          </button>
        </div>
        
        {/* User Login Form */}
        {activeTab === 'user' ? (
          <form className="flex flex-col max-w-md mx-auto w-full" onSubmit={handleUserSubmit}>
            <h2 className="mb-8 text-center text-2xl text-gray-800 font-semibold">User Login</h2>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userFormData.email}
                onChange={handleUserInputChange}
                className={`w-full p-3 border rounded-md text-base text-black ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                autoComplete="email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.email}
                </span>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userFormData.password}
                onChange={handleUserInputChange}
                className={`w-full p-3 border rounded-md text-base text-black ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                autoComplete="current-password"
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.password}
                </span>
              )}
            </div>
            
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={userFormData.rememberMe}
                onChange={handleUserInputChange}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-600">
                Remember me
              </label>
            </div>
            
            <button 
              type="submit" 
              className="bg-green-700 text-white py-3 rounded-md text-base cursor-pointer transition-colors hover:bg-green-600 mt-4"
            >
              Login
            </button>
            
            <div className="flex justify-between mt-6">
              <a href="/forgot-password" className="text-green-700 text-sm hover:underline">
                Forgot Password?
              </a>
              <a href="/register" className="text-green-700 text-sm hover:underline">
                New User? Register
              </a>
            </div>
          </form>
        ) : (
          // Company Login Form
          <form className="flex flex-col max-w-md mx-auto w-full" onSubmit={handleCompanySubmit}>
            <h2 className="mb-8 text-center text-2xl text-gray-800 font-semibold">Company Login</h2>
            
            <div className="mb-6">
              <label htmlFor="companyId" className="block mb-2 text-gray-600">
                Company ID
              </label>
              <input
                type="text"
                id="companyId"
                name="companyId"
                value={companyFormData.companyId}
                onChange={handleCompanyInputChange}
                className={`w-full p-3 border rounded-md text-base text-black ${
                  errors.companyId ? 'border-red-500' : 'border-gray-300'
                }`}
                autoComplete="username"
              />
              {errors.companyId && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.companyId}
                </span>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="companyPassword" className="block mb-2 text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="companyPassword"
                name="password"
                value={companyFormData.password}
                onChange={handleCompanyInputChange}
                className={`w-full p-3 border rounded-md text-base text-black ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                autoComplete="current-password"
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.password}
                </span>
              )}
            </div>
            
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="companyRememberMe"
                name="rememberMe"
                checked={companyFormData.rememberMe}
                onChange={handleCompanyInputChange}
                className="mr-2"
              />
              <label htmlFor="companyRememberMe" className="text-gray-600">
                Remember me
              </label>
            </div>
            
            <button 
              type="submit" 
              className="bg-green-700 text-white py-3 rounded-md text-base cursor-pointer transition-colors hover:bg-green-600 mt-4"
            >
              Login
            </button>
            
            <div className="flex justify-between mt-6">
              <a href="/forgot-password" className="text-green-700 text-sm hover:underline">
                Forgot Password?
              </a>
              <a href="/register-company" className="text-green-700 text-sm hover:underline">
                New Company? Register
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;