import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMEMENT_ID,
  apiKey: process.env.REACT_APP_FIREBASE,
});

export const auth = app.auth();
export default app;
