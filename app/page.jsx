'use client'
import { useState, useEffect } from "react";
import { getUser } from "./utils/firebase/firestoreFunctions";
import Navbar from "./components/Navbar";

export default function Home() {
  const [user, setUser] = useState();

  const getUserProfile = async () => {
    const querySnapshot = await getUser('hardikchhabra3003@gmail.com');
    /* querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    }); */

    setUser({...querySnapshot.data()});
  };

  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <>
    <Navbar />
    <h1 className="text-5xl text-center p-5">Fetched data from Firestore</h1>
    <div>
      {
        user && user.username
      }
    </div>
    </>

  );
}
