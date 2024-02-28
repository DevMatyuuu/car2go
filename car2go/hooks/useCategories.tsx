import { categoryCollection } from "@/firebase/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

function useCategories() {
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(
    () => {
    const unsubscribe = onSnapshot(categoryCollection, (snapshot: QuerySnapshot<DocumentData>) => {
     setCategories( 
      snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
     );
  });
  return () => unsubscribe();
},
  []
);

  return { categories };
}
export default useCategories