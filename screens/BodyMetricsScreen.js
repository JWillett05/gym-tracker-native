import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { auth } from "../firebaseConfig";
import { addBodyMetrics } from "../firebase-functions/BodyMetrics";

export default function BodyMetricsScreen({}) {
  const handleAddMetric = async () => {
    const userId = auth.currentUser.uid;
    if (!userId) {
      console.error("User not Authenticated");
      return;
    }
    const newMetric = {
      date: "2025-06-15",
      name: "Thigh",
      description: "Thigh at midpoint",
      measurement: 24,
      unit: "inches",
    };
    await addBodyMetrics(userId, newMetric);
    console.log("New metric added:", newMetric);
    console.log("User ID:", userId);
  };

  // Sample data for body metrics
  const bodyMetrics = [
    {
      id: 1,
      date: "2025-06-14",
      name: "Bicep",
      description: "Bicep over freckle",
      measurement: 13,
      unit: "inches",
    },
    {
      id: 2,
      date: "2025-06-14",
      name: "Chest",
      description: "Chest over nipple",
      measurement: 40,
      unit: "inches",
    },
    {
      id: 3,
      date: "2025-06-12",
      name: "Waist",
      description: "Waist at navel",
      measurement: 32,
      unit: "inches",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Body Metrics</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleAddMetric}>
        <Text style={styles.addButtonText}>+ Add New Metric</Text>
      </TouchableOpacity>
      {bodyMetrics.map((metric) => (
        <View key={metric.id} style={styles.metricItem}>
          <Text style={styles.metricName}>{metric.name}</Text>
          <Text style={styles.metricDescription}>{metric.description}</Text>
          <Text style={styles.metricValue}>
            {metric.measurement} {metric.unit}
          </Text>
        </View>
      ))}
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
  bodyMetricsList: {
    flex: 1,
  },
  metricItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  metricName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  metricDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  metricValue: {
    fontSize: 16,
    color: "#007AFF",
  },
  metricUnit: {
    fontSize: 14,
    color: "#666",
  },
  metricDate: {
    fontSize: 12,
    color: "#999",
  },
});
