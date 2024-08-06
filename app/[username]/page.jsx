'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import { getUser } from '../utils/firebase/firestoreFunctions';
import PrimaryDashboard from '../components/PrimaryDashboard';
import { balance, username, expense, income } from '../context/context';

const page = () => {
  const [user, setUser] = useState();

  const getUserProfile = async () => {
    const querySnapshot = await getUser('hardikchhabra3003@gmail.com');
    /* querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    }); */

    setUser({ ...querySnapshot.data() });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      <Navbar />
      <username.Provider value={'Hardik'}>
        <balance.Provider value={5000}>
          <expense.Provider value={1000}>
            <income.Provider value={6000}>
              <PrimaryDashboard balPer={12.5} incPer={23.5} exPer={10} />
            </income.Provider>
          </expense.Provider>
        </balance.Provider>
      </username.Provider>


    </>
  )
}

export default page