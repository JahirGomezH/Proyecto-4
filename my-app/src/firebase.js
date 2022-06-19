// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD8RkKEFeG3L2rotH3oynNB0lZhxHQx-gs",
  authDomain: "reserve-3af46.firebaseapp.com",
  projectId: "reserve-3af46",
  storageBucket: "reserve-3af46.appspot.com",
  messagingSenderId: "105215325795",
  appId: "1:105215325795:web:a4146945b66454b9246a56"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }
