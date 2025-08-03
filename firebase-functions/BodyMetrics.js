import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export async function addBodyMetrics(userId, metrics) {
  try {
    const docRef = await addDoc(collection(db, "tracking", userId, "bodyMetrics"), {
      ...metrics,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}