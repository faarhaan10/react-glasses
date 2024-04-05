 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpdyTkl9jpS_2GE1JHDJB_xhhaxHVK8jE",
  authDomain: "glasses-authentication.firebaseapp.com",
  projectId: "glasses-authentication",
  storageBucket: "glasses-authentication.appspot.com",
  messagingSenderId: "233349205700",
  appId: "1:233349205700:web:5d00f4eff4684c90c38391"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;