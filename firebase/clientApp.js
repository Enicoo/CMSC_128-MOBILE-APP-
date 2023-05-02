import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAlR10_WYWAfYzlKha_kmem5cpbgqkRWbg",
    authDomain: "our-form-generator.firebaseapp.com",
    projectId: "our-form-generator",
    storageBucket: "our-form-generator.appspot.com",
    messagingSenderId: "32678761428",
    appId: "1:32678761428:web:3d8c57cb4ba50716c57c41"
  };

const app = initializeApp(firebaseConfig);


export default app;
