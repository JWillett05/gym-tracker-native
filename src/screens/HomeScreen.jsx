import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const navigate = useNavigate();

  const menuItems = [
    { path: "/auth", label: "Auth for now", icon: "🔐" },
    { path: "/workouts", label: "My Workouts", icon: "💪" },
    { path: "/progress", label: "Progress", icon: "📊" },
    { path: "/exercises", label: "Exercises", icon: "🏋️" },
    { path: "/body-metrics", label: "Body Metrics", icon: "📏" },
    { path: "/profile", label: "Profile", icon: "👤" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-96 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Gym Tracker</h1>
      <p className="text-lg text-gray-600 mb-12">Track your fitness journey</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
