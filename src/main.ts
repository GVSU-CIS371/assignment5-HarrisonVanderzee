import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import './styles/mug.scss'
import App from './App.vue'

const pinia = createPinia()

const firebaseConfig = {
  apiKey: "AIzaSyDVjWk9JSeRIvQyJh-w9_YjFmP98w5NdKc",
  authDomain: "cis371-78119.firebaseapp.com",
  projectId: "cis371-78119",
  storageBucket: "cis371-78119.firebasestorage.app",
  messagingSenderId: "106361976588",
  appId: "1:106361976588:web:9eb1d501e3a88c07a43b29"
};
const myapp: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(myapp);

createApp(App)
    .use(pinia)
    .mount('#app')