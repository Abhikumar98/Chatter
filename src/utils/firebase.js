import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAJTAx_irAb89j3sqMZSvtpwAkgvM5hpBA',
	authDomain: 'chatter-a7197.firebaseapp.com',
	databaseURL: 'https://chatter-a7197.firebaseio.com',
	projectId: 'chatter-a7197',
	storageBucket: 'chatter-a7197.appspot.com',
	messagingSenderId: '321300421491',
	appId: '1:321300421491:web:396a60f01eae46320e0306',
	measurementId: 'G-JJ2G9JCDC6'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().enablePersistence();

export const firebaseAuth = firebase.auth;
export const firebaseDB = firebase.firestore();
