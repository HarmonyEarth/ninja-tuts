import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD2CTEhgcWjvSG-l6wcPC5_MWp1GWghDRM',
  authDomain: 'fire-ninja-f215a.firebaseapp.com',
  projectId: 'fire-ninja-f215a',
  storageBucket: 'fire-ninja-f215a.appspot.com',
  messagingSenderId: '275021466990',
  appId: '1:275021466990:web:94c54da07b1ff4faf7057f',
};

// init firebase app
initializeApp(firebaseConfig);

// init services

const db = getFirestore();
const auth = getAuth();

// collection ref

const colRef = collection(db, 'songs');

// queries

const q = query(
  colRef,
  // where('artist', '==', 'Takayuki Miyauchi'),
  orderBy('title', 'asc')
);

// get collection data

getDocs(q)
  .then((snapshot) => {
    console.log(snapshot.docs);
    let songs = [];
    snapshot.docs.forEach((doc) => {
      songs.push({ ...doc.data(), id: doc.id });
    });
    console.log('songs', songs);
  })
  .catch((err) => {
    console.log(err.message);
  });

// real time collection data

// const unsubCol = onSnapshot(q, (snapshot) => {
//   let songs = [];
//   snapshot.docs.forEach((doc) => {
//     songs.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(songs);
// });

// adding documents
const addSongForm = document.querySelector('.add');
addSongForm.addEventListener('submit', (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addSongForm.title.value,
    artist: addSongForm.artist.value,
    createdAt: serverTimestamp(),
  }).then(() => {
    addSongForm.reset();
  });
});

// deleting documents
const deleteSongForm = document.querySelector('.delete');
deleteSongForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const docRef = doc(db, 'songs', deleteSongForm.id.value);

  deleteDoc(docRef).then(() => {
    deleteSongForm.reset();
  });
});

// get a single document

const docRef = doc(db, 'songs', 'LamKjZyMluJtSCjHKkEK');

const unsubDoc = onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id);
});

// updating a song

const updateSongForm = document.querySelector('.update');
updateSongForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const docRef = doc(db, 'songs', updateSongForm.id.value);

  updateDoc(docRef, {
    title: 'updated title',
  }).then(() => {
    updateSongForm.reset();
  });
});

// signing users up

const signUpForm = document.querySelector('.signUp');
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signUpForm.email.value;

  const password = signUpForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      // console.log('User Created:', cred.user);
      signUpForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// Log In & Log Out
const logOutButton = document.querySelector('.logOut');
logOutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      // console.log('User Signed Out');
    })
    .catch((err) => {
      console.log(err.message);
    });
});

const logInForm = document.querySelector('.logIn');
logInForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = logInForm.email.value;

  const password = logInForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      // console.log('User Logged In', cred.user);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// Subscribing to Auth Changes

const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log('User Status Changed', user);
});

// Unsubscribing from Auth & DB
const unsubButton = document.querySelector('.unsub');
unsubButton.addEventListener('click', () => {
  console.log('Unsubscribed');
  unsubCol();
  unsubDoc();
  unsubAuth();
});
