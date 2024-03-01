import { carPreviewCollection } from "@/firebase/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";


function useCarPreview() {
  const [CarPreview, setCarPreview] = useState<CarPreview[]>([]);

  useEffect(
    () => {
    const unsubscribe = onSnapshot(carPreviewCollection, (snapshot: QuerySnapshot<DocumentData>) => {
     setCarPreview( 
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

  return { CarPreview };
}
export default useCarPreview