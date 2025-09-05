import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export async function addBodyMetrics(userId, metric) {
  try {
    const docRef = await addDoc(
      collection(db, "tracking", userId, "bodyMetrics"),
      {
        name: metric.name || "The exercise name goes here.",
        description: metric.description || "Description goes here.",
        measurement: metric.measurement || 0,
        unit: metric.unit || "kg",
        userId: userId || "", 
        createdAt: new Date(),
      }
    );
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
