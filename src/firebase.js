import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBPKvsrSVIhUtjHEkbvDcuPILW1lUkY9dA",
  authDomain: "react-authentication-ac49c.firebaseapp.com",
  projectId: "react-authentication-ac49c",
  storageBucket: "react-authentication-ac49c.appspot.com",
  messagingSenderId: "598944643561",
  appId: "1:598944643561:web:69f296bce7c3f966bbb378",
  measurementId: "G-3KEPVMC1W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
