import React from 'react';

export default function ProfileScreen() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
      
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h2>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h3 className="text-lg font-bold text-gray-800 p-4 bg-gray-50">Settings</h3>
        
        <div className="space-y-0">
          <button className="w-full text-left p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
            <span className="text-gray-800">Notifications</span>
          </button>
          
          <button className="w-full text-left p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
            <span className="text-gray-800">Units</span>
          </button>
          
          <button className="w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200">
            <span className="text-gray-800">Privacy</span>
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h3 className="text-lg font-bold text-gray-800 p-4 bg-gray-50">Support</h3>
        
        <div className="space-y-0">
          <button className="w-full text-left p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
            <span className="text-gray-800">Help Center</span>
          </button>
          
          <button className="w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200">
            <span className="text-gray-800">Contact Us</span>
          </button>
        </div>
      </div>
      
      <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
        Sign Out
      </button>
    </div>
  );
}
