import { vehicleCollection } from "@/firebase/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicles[]>([]);

  useEffect(
    () => {
    const unsubscribe = onSnapshot(vehicleCollection, (snapshot: QuerySnapshot<DocumentData>) => {
     setVehicles( 
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

  return { vehicles };
}
export default useVehicles