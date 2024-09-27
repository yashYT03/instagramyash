
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD69oB2simVuopTD5k_SChRLy83pzij1Pw",
  authDomain: "anonymousyash-277b9.firebaseapp.com",
  projectId: "anonymousyash-277b9",
  storageBucket: "anonymousyash-277b9.appspot.com",
  messagingSenderId: "354810617439",
  appId: "1:354810617439:web:9020e04922c725fe1545ea"
};

const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db=getFirestore();
const storage = getStorage();

export { app, db, storage };