import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function WorkoutsScreen({ navigation }) {

  // Sample data for workouts
  const workouts = [
    { id: 1, name: 'Push Day', date: '2025-06-14', exercises: 6 },
    { id: 2, name: 'Pull Day', date: '2025-06-12', exercises: 5 },
    { id: 3, name: 'Leg Day', date: '2025-06-10', exercises: 7 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Workouts</Text>
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add New Workout</Text>
      </TouchableOpacity>
      
      <ScrollView style={styles.workoutList}>
        {workouts.map(workout => (
          <TouchableOpacity key={workout.id} style={styles.workoutCard}>
            {/* Will replace with real data */}
            <Text style={styles.workoutName}>{workout.name}</Text>
            <Text style={styles.workoutDate}>{workout.date}</Text>
            <Text style={styles.workoutExercises}>{workout.exercises} exercises</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#34C759',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  workoutList: {
    flex: 1,
  },
  workoutCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  workoutDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  workoutExercises: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 5,
  },
});
