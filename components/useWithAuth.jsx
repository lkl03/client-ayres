import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function useWithAuth(Component) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        setUser(loggedInUser);
      } else {
        router.push("/login"); // Redirect to login page if not authenticated
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!user) {
    return [null, <div key={'1'}>Loading...</div>]; // Loading state while checking authentication
  }

  return [user, <Component key={'2'} user={user} />];
}