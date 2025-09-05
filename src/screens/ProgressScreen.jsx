import React from 'react';

export default function ProgressScreen() {
  const stats = [
    { label: 'Workouts This Week', value: '4' },
    { label: 'Total Workouts', value: '47' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Progress</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-lg text-gray-600 mb-4">{stat.label}</p>
            <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
