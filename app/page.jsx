'use client'
import { useState, useEffect } from "react";
import { getUsers } from "./utils/firebase/firestoreFunctions";

export default function Home() {
  const [users, setUsers] = useState([]);

  const getProfiles = async () => {
    const querySnapshot = await getUsers();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setUsers(docs);
    // });
  };

  useEffect(() => {
    getProfiles();
  }, []);
  return (
    <>
    <h1 className="text-5xl text-center p-5">Fetched data from Firestore</h1>
    <div>
      {users.map((user) => (
          <div className="col-md-4" key={user.id}>
            <WebsiteCard link={user.username} />
          </div>
        ))}
    </div>
    </>

  );
}
