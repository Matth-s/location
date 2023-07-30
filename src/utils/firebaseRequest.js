import { db } from "../firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";

export const getAllMateriel = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "materiel"));
    const materiels = [];
    querySnapshot.forEach((doc) => {
      materiels.push(doc.data());
    });
    return materiels;
  } catch (error) {
    return error;
  }
};

export const getOneMaterial = async (id) => {
  const materielCollection = collection(db, "materiel");
  const q = query(materielCollection, where("id", "==", parseInt(id)));

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return { message: `No document found` };
    } else {
      const data = querySnapshot.docs.map((doc) => doc.data());
      return { status: 200, data };
    }
  } catch (error) {
    return { status: 404, error };
  }
};
