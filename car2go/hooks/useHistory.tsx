import { historyCollection } from "@/firebase/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";


function useHistory() {
  const [histories, setHistories] = useState<history[]>([]);

  useEffect(
    () => {
    const unsubscribe = onSnapshot(historyCollection, (snapshot: QuerySnapshot<DocumentData>) => {
     setHistories( 
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

  return { histories };
}
export default useHistory