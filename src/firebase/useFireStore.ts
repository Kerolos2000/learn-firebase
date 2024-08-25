import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useState, useEffect } from "react";

export const useFireStore = (collectionName) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCol = collection(db, collectionName);
        const itemsSnapshot = await getDocs(itemsCol);
        const itemsList = itemsSnapshot.docs.map((doc) => doc.data());
        setItems(itemsList);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [collectionName]);

  return items;
};
