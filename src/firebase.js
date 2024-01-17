import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3IW3SA_SNgE3lFin9IrQqw0Sv6Jjaoqs",
  authDomain: "react-app-lms.firebaseapp.com",
  projectId: "react-app-lms",
  storageBucket: "react-app-lms.appspot.com",
  messagingSenderId: "397444110116",
  appId: "1:397444110116:web:37c05a914efbe8705385b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;