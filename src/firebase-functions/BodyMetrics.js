import { collection, addDoc, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const addBodyMetrics = async (userId, bodyMetrics) => {
  try {
    const docRef = await addDoc(collection(db, "bodyMetrics"), {
      ...bodyMetrics,
      userId: userId,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export const getBodyMetrics = async (userId) => {
  try {
    const q = query(
      collection(db, "bodyMetrics"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    const bodyMetrics = [];
    querySnapshot.forEach((doc) => {
      bodyMetrics.push({ id: doc.id, ...doc.data() });
    });
    return bodyMetrics;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
};
