import { useState, useEffect } from "react";
import { collection, query, getDocs, updateDoc, doc, getFirestore } from "firebase/firestore";

import { app } from '../firebase'

const useFirebaseCollection = (collectionName) => {
  const [data, setData] = useState(null);
  const db = getFirestore(app);

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

  return data;
};

export default useFirebaseCollection;