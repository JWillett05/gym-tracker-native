import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function ExercisesScreen({ navigation }) {
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
    <View style={styles.container}>
      <Text style={styles.title}>My Exercises</Text>      <ScrollView style={styles.exerciseList}>
        {exercises.map((exercise) => (
          <TouchableOpacity 
            key={exercise.id} 
            style={styles.exerciseCard}
            onPress={() => navigation.navigate('ExerciseDetail', { 
              exerciseName: exercise.name,
              exerciseId: exercise.id 
            })}
          >
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseDate}>Last: {exercise.date}</Text>
            <Text style={styles.exerciseStats}>
              {exercise.weight > 0 ? `${exercise.weight}${unitOfMeasurement} • ` : ''}
              {exercise.sets} sets • {exercise.reps} reps
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#34C759",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  exerciseList: {
    flex: 1,
  },
  exerciseCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  exerciseDate: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },  exerciseStats: {
    fontSize: 14,
    color: "#007AFF",
    marginTop: 5,
  },
});
