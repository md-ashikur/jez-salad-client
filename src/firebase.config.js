// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGN2H4k6YjtlhnbuHQ_QgIlz1HVarlGW8",
  authDomain: "jez-salad.firebaseapp.com",
  projectId: "jez-salad",
  storageBucket: "jez-salad.appspot.com",
  messagingSenderId: "972035922657",
  appId: "1:972035922657:web:065d19579701e82aa3f5a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;