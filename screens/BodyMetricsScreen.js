import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";

import { auth } from "../firebaseConfig";
import { addBodyMetrics } from "../firebase-functions/BodyMetrics";

export default function BodyMetricsScreen({}) {
  const [modalVisible, setModalVisible] = useState(false);
    const [metrics, setMetrics] = useState({
    name: "",
    description: "",
    measurement: "",
    unit: "",
  });

  const handleAddMetric = async () => {
    const userId = auth.currentUser.uid;
    if (!userId) {
      console.error("User not Authenticated");
      return;
    }
    const addedMetric = {
      name: metrics.name,
      description: metrics.description,
      measurement: metrics.measurement,
      unit: metrics.unit,
    };
    try {
      const result = await addBodyMetrics(userId, addedMetric);
      console.log("Metric added successfully:", result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    console.log("User ID:", userId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Body Metrics</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add New Metric</Text>
      </TouchableOpacity>

      {/* Modal for Adding Metrics */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Add New Metric</Text>
          <TextInput
            style={styles.input}
            placeholder="Metric Name"
            value={metrics.name}
            onChangeText={(text) => setMetrics({ ...metrics, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={metrics.description}
            onChangeText={(text) => setMetrics({ ...metrics, description: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Measurement"
            keyboardType="numeric"
            value={metrics.measurement}
            onChangeText={(text) => setMetrics({ ...metrics, measurement: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Unit (e.g., inches, cm)"
            value={metrics.unit}
            onChangeText={(text) => setMetrics({ ...metrics, unit: text })}
          />
          <View style={styles.modalButtons}>
            <Button title="Add" onPress={handleAddMetric} />
            <Button
              title="Cancel"
              color="red"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: "80%",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
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
});
