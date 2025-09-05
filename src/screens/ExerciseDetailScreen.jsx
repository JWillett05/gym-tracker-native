import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ExerciseDetailScreen() {
  const { id } = useParams();
  const location = useLocation();
  const exerciseName = location.state?.exerciseName || 'Bench Press';

  // Extended dummy data for bench press over time
  const exerciseData = [
    { date: '2025-05-15', weight: 50, sets: 3, reps: 10 },
    { date: '2025-05-18', weight: 52, sets: 3, reps: 9 },
    { date: '2025-05-22', weight: 55, sets: 4, reps: 8 },
    { date: '2025-05-25', weight: 55, sets: 4, reps: 10 },
    { date: '2025-05-29', weight: 57, sets: 4, reps: 8 },
    { date: '2025-06-01', weight: 60, sets: 4, reps: 8 },
    { date: '2025-06-04', weight: 60, sets: 4, reps: 9 },
    { date: '2025-06-08', weight: 62, sets: 4, reps: 8 },
    { date: '2025-06-11', weight: 65, sets: 3, reps: 8 },
    { date: '2025-06-14', weight: 65, sets: 4, reps: 9 },
  ];

  const chartData = exerciseData.map(d => ({
    ...d,
    date: d.date.slice(5), // Show only month-day
    setsScaled: d.sets * 10,
    repsScaled: d.reps * 5,
  }));

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">{exerciseName}</h1>
        <p className="text-gray-300">Progress Tracking</p>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-6 text-white">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Performance Over Time</h2>
          <p className="text-purple-100">Weight, Sets & Reps Progress</p>
        </div>
        
        <div className="bg-white/10 rounded-2xl p-4 mb-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis dataKey="date" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: 'white'
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="weight" 
                stroke="#ff4757" 
                strokeWidth={3}
                name="Weight (kg)"
              />
              <Line 
                type="monotone" 
                dataKey="setsScaled" 
                stroke="#4a90e2" 
                strokeWidth={3}
                name="Sets (×10)"
              />
              <Line 
                type="monotone" 
                dataKey="repsScaled" 
                stroke="#2ed573" 
                strokeWidth={3}
                name="Reps (×5)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-3 gap-4 bg-white/10 rounded-xl p-4">
          <div className="text-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2"></div>
            <p className="text-sm text-purple-100">Weight</p>
            <p className="font-bold">{exerciseData[exerciseData.length - 1].weight}kg</p>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div>
            <p className="text-sm text-purple-100">Sets</p>
            <p className="font-bold">{exerciseData[exerciseData.length - 1].sets}</p>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
            <p className="text-sm text-purple-100">Reps</p>
            <p className="font-bold">{exerciseData[exerciseData.length - 1].reps}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 rounded-xl p-6 text-center text-white">
          <p className="text-2xl font-bold">+15kg</p>
          <p className="text-sm text-gray-300">Total Gain</p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 text-center text-white">
          <p className="text-2xl font-bold">10</p>
          <p className="text-sm text-gray-300">Sessions</p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 text-center text-white">
          <p className="text-2xl font-bold">30%</p>
          <p className="text-sm text-gray-300">Improvement</p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 text-center text-white">
          <p className="text-2xl font-bold">4.2</p>
          <p className="text-sm text-gray-300">Avg Sets</p>
        </div>
      </div>

      <div className="bg-white/10 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4 text-center">Recent Sessions</h3>
        <div className="space-y-2">
          {exerciseData.slice(-5).reverse().map((session, index) => (
            <div key={index} className="flex justify-between items-center bg-white/5 rounded-lg p-3">
              <span className="font-semibold">{session.date}</span>
              <div className="flex space-x-4 text-sm">
                <span>{session.weight}kg</span>
                <span>{session.sets} sets</span>
                <span>{session.reps} reps</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
