import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { addBodyMetrics } from "../../firebase-functions/BodyMetrics";

export default function BodyMetricsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [metrics, setMetrics] = useState({
    name: "",
    description: "",
    measurement: "",
    unit: "",
  });

  const handleAddMetric = async () => {
    const userId = auth.currentUser?.uid;
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
      setModalVisible(false);
      setMetrics({ name: "", description: "", measurement: "", unit: "" });
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    console.log("User ID:", userId);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">My Body Metrics</h1>
      
      <button
        onClick={() => setModalVisible(true)}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
      >
        + Add New Metric
      </button>

      {/* Modal for Adding Metrics */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Add New Metric</h2>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Metric Name"
                value={metrics.name}
                onChange={(e) => setMetrics({ ...metrics, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <input
                type="text"
                placeholder="Description"
                value={metrics.description}
                onChange={(e) => setMetrics({ ...metrics, description: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <input
                type="number"
                placeholder="Measurement"
                value={metrics.measurement}
                onChange={(e) => setMetrics({ ...metrics, measurement: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <input
                type="text"
                placeholder="Unit (e.g., inches, cm)"
                value={metrics.unit}
                onChange={(e) => setMetrics({ ...metrics, unit: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex space-x-4 mt-6">
              <button
                onClick={handleAddMetric}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Add
              </button>
              <button
                onClick={() => setModalVisible(false)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
