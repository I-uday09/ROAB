
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCxoxvkqRcGXaPcAFpUr3Z-LMi9jKuelzg",
  authDomain: "roab-b7f03.firebaseapp.com",
  projectId: "roab-b7f03",
  storageBucket: "roab-b7f03.firebasestorage.app",
  messagingSenderId: "125339742224",
  appId: "1:125339742224:web:a01a70ceb4003b9e2c5a95",
  measurementId: "G-QE8P6FY3D0",
  databaseURL: "https://roab-b7f03-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const storage = getStorage(app);
