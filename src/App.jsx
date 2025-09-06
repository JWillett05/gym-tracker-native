// filepath: e:\Code\gym-tracker-native\src\App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaggeredMenu from "./components/StaggeredMenu";
import { Link } from "react-router-dom";

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
import Layout from "./Layout";

export default function App() {

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Auth", link: "/auth" },
    { label: "Workouts", link: "/workouts" },
    { label: "Progress", link: "/progress" },
    { label: "Exercises", link: "/exercises" },
    { label: "Body Metrics", link: "/body-metrics" },
    { label: "Profile", link: "/profile" },
  ];

  return (
    <Router>
      <Layout > 
        <div style={{ height: "100vh", background: "#1a1a1a" }}>
          <StaggeredMenu
            items={menuItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#24E810"
            openMenuButtonColor="#24E810"
            changeMenuColorOnOpen={true}
            colors={["#B19EEF", "#5227FF"]}
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log("Menu opened")}
            onMenuClose={() => console.log("Menu closed")}
          />
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
        </div>
      </Layout>
    </Router>
  );
}