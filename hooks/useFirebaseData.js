import { useEffect, useState } from "react";
import { collection, query, getDocs, updateDoc, doc, getFirestore } from "firebase/firestore";

import { app } from '../firebase'

const useFirebaseData = (collectionName) => {

  const db = getFirestore(app);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const itemsRef = query(collection(db, collectionName));
      const querySnapshot = await getDocs(itemsRef);
      const fetchedData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(fetchedData);
    };

    fetchData();
  }, [collectionName]);

  const updateData = async (id, newData) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, newData);
  };

  return [data, updateData];
};

export default useFirebaseData;