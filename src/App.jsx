import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import screens
import HomeScreen from "./screens/HomeScreen";
import WorkoutsScreen from "./screens/WorkoutsScreen";
import ProgressScreen from "./screens/ProgressScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ExercisesScreen from "./screens/ExercisesScreen";
import ExerciseDetailScreen from "./screens/ExerciseDetailScreen";
import BodyMetricsScreen from "./screens/BodyMetricsScreen";
import AuthScreen from "./screens/AuthScreen";

// Layout component
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/workouts" element={<WorkoutsScreen />} />
          <Route path="/progress" element={<ProgressScreen />} />
          <Route path="/exercises" element={<ExercisesScreen />} />
          <Route path="/exercises/:id" element={<ExerciseDetailScreen />} />
          <Route path="/body-metrics" element={<BodyMetricsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
}
