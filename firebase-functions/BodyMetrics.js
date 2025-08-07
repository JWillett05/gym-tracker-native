import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export async function addBodyMetrics(userId, metric) {
  try {
    const docRef = await addDoc(
      collection(db, "tracking", userId, "bodyMetrics"),
      {
        name: metric.name || "The exercise name goes here.",
        description: metric.description || "Description goes here.",
        unit: metric.unit || "kg",
        createdAt: new Date(),
      }
    );
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
