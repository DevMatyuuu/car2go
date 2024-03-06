'use client'

import { auth } from "@/firebase/firebase";
import { useEffect, useState } from "react";

export default function useUserDetails() {
  const [user, setUser] = useState<user | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, uid} = user;
        setLoading(true)
        setUser({ email, uid});
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);



  

  return { user, loading };

}