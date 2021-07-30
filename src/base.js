import Rebase from 're-base';
import firebase from 'firebase/app';
// eslint-disable-next-line no-unused-vars
import database from 'firebase/database';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBGl79utZRaAcUrLfISSvZfu2KK3W0K8qc',
  authDomain: 'catch-of-the-day-a63fd.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-a63fd-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebase.database(app));

export default base;
