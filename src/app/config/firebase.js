import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCghUfKJE8M8ZnHedjjg_lP0Kd-c1qwLXI",
  authDomain: "revents-214215.firebaseapp.com",
  databaseURL: "https://revents-214215.firebaseio.com",
  projectId: "revents-214215",
  storageBucket: "revents-214215.appspot.com",
  messagingSenderId: "831921658635"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;
