import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExercisesScreen() {
  const navigate = useNavigate();

  // Sample data for exercises
  const exercises = [
    {
      id: 1,
      name: "Bench Press",
      date: "2025-06-14",
      weight: 60,
      sets: 4,
      reps: 8,
    },
    {
      id: 2,
      name: "Pull-Ups",
      date: "2025-06-14",
      weight: 0,
      sets: 3,
      reps: 5,
    },
    {
      id: 3,
      name: "Squats",
      date: "2025-06-12",
      weight: 80,
      sets: 4,
      reps: 10,
    },
  ];

  const unitOfMeasurement = "kg"; // This will be dynamic based on user settings

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">My Exercises</h1>
      
      <div className="grid gap-4">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            onClick={() => navigate(`/exercises/${exercise.id}`, {
              state: { 
                exerciseName: exercise.name,
                exerciseId: exercise.id 
              }
            })}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{exercise.name}</h3>
            <p className="text-gray-600 mb-1">Last: {exercise.date}</p>
            <p className="text-blue-600 font-medium">
              {exercise.weight > 0 ? `${exercise.weight}${unitOfMeasurement} • ` : ''}
              {exercise.sets} sets • {exercise.reps} reps
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
