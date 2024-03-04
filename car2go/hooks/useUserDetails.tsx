'use client'

import { auth } from "@/firebase/firebase";
import { useEffect, useState } from "react";

export default function useUserDetails() {
  const [user, setUser] = useState<user | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, uid} = user;
        setUser({ email, uid});
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);



  

  return { user };

}