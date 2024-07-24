import { initializeApp } from 'firebase/app'
import {collection, getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDBgTQDNalktd5J68YunhAsqLwOYueTOgw',
  authDomain: 'ecommercewebsite-10ac9.firebaseapp.com',
  projectId: 'ecommercewebsite-10ac9',
  storageBucket: 'ecommercewebsite-10ac9.appspot.com',
  messagingSenderId: '982429847735',
  appId: '1:982429847735:web:e36169572adf22b3dfbd32',
  measurementId: 'G-2VSKCLNGMW'
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);


export   {app ,db} ;