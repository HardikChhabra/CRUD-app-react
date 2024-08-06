import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "./firebase";

const userCollection = "user";
const transactionCollection = "transactions";
const accountsCollection = "accounts";
/*   
  export const saveWebsite = (newLink) =>
    addDoc(collection(db, collectionName), newLink); */

/*   export const updateWebsite = (id, updatedFields) =>
    updateDoc(doc(db, collectionName, id), updatedFields); */

/*   export const onGetLinks = (callback) => {
    const unsub = onSnapshot(collection(db, collectionName), callback);
    return unsub;
  }; */

/*   export const getUsers = () => getDocs(collection(db, collectionName)); */

/*   export const deleteWebsite = (id) => deleteDoc(doc(db, collectionName, id));
  
  export const getWebsite = (id) => getDoc(doc(db, collectionName, id)); */

//USER INFO

//get user info
export const getUser = (userId) => getDoc(doc(db, userCollection, userId));

//get user's balance with userId
export const getBalanceWithUserId = async (userId) => {
  const accountsRef = collection(db, accountsCollection);
  const q = query(accountsRef, where("UserID", "==", userId));
  const querySnapshot = await getDocs(q);
  return (querySnapshot.docs[0]).data().amount;
};

/* //(FOR FUTURE)

  /*   //get user's balance with accountId 
    export const getBalanceWithAccountId = (accId) => {}; */
  /* //get account's net expense using a time period 
  export const getNetExpense = (timePeriod) => {};

  //get account's net income using a time period 
  export const getNetIncome = (timePeriod) => { }; 
  //add new transfer
export const transfer = (value, payment, receipt) => { };

//get transactions of a period
export const getTransactions = (userId, timePeriod) => { };
  */ 


//update balance of account
export const updateBalance = async (userId, balance) => {
  const accountsRef = collection(db, accountsCollection);
  const q = query(accountsRef, where("UserID", "==", userId));
  const querySnapshot = await getDocs(q);
  const docRef = querySnapshot.docs[0].ref;
  await updateDoc(docRef, {
    amount: balance
  })
};

//TRANSACTIONS

//add income
export const addTransaction = async (userId, value, category, desc, time, type) => {

  //getting accountId
  const accountsRef = collection(db, accountsCollection);
  const q = query(accountsRef, where("UserID", "==", userId));
  const querySnapshot = await getDocs(q);
  const docId = querySnapshot.docs[0].id

  //adding to transaction
  const transactionRef = collection(db, transactionCollection);
  await addDoc(transactionRef, {
    accountID: docId,
    category: category,
    desc: desc,
    time: time,
    type: type,
    value: value
  });

  /*updating the balance*/
  //getting current balance
  const currentBalance = await getBalanceWithUserId(userId);

  //update the balance
  await updateBalance(userId, (currentBalance+value));
  
}

export const getTransactions = () => {}

//add new category

//set goals

//add new account for user