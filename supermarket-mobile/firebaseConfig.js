// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPYUqMvv2C-zP4hCb7SK3-nh_sNGngWEw",
  authDomain: "iot-mobile-facisa.firebaseapp.com",
  projectId: "iot-mobile-facisa",
  storageBucket: "iot-mobile-facisa.appspot.com",
  messagingSenderId: "147767664933",
  appId: "1:147767664933:web:4daeec5c3906f953d07acc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;