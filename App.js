import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import screens
import HomeScreen from "./screens/HomeScreen";
import WorkoutsScreen from "./screens/WorkoutsScreen";
import ProgressScreen from "./screens/ProgressScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ExercisesScreen from "./screens/ExercisesScreen";
import ExerciseDetailScreen from "./screens/ExerciseDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#007AFF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Gym Tracker" }}
        />
        <Stack.Screen
          name="Workouts"
          component={WorkoutsScreen}
          options={{ title: "My Workouts" }}
        />
        <Stack.Screen
          name="Progress"
          component={ProgressScreen}
          options={{ title: "Progress" }}
        />
        <Stack.Screen
          name="Exercises"
          component={ExercisesScreen}
          options={{ title: "Exercises" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="ExerciseDetail"
          component={ExerciseDetailScreen}
          options={({ route }) => ({ 
            title: route.params?.exerciseName || 'Exercise Details' 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
