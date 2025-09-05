import React from 'react';

export default function WorkoutsScreen() {
  // Sample data for workouts
  const workouts = [
    { id: 1, name: 'Push Day', date: '2025-06-14', exercises: 6 },
    { id: 2, name: 'Pull Day', date: '2025-06-12', exercises: 5 },
    { id: 3, name: 'Leg Day', date: '2025-06-10', exercises: 7 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">My Workouts</h1>
      
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
        + Add New Workout
      </button>
      
      <div className="grid gap-4">
        {workouts.map(workout => (
          <div key={workout.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{workout.name}</h3>
            <p className="text-gray-600 mb-1">{workout.date}</p>
            <p className="text-blue-600 font-medium">{workout.exercises} exercises</p>
          </div>
        ))}
      </div>
    </div>
  );
}
