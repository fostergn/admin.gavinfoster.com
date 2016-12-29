import firebase from 'firebase';
import { browserHistory } from 'react-router'

const provider = new firebase.auth.GoogleAuthProvider();

export function authenticate(cb){
  firebase.auth().signInWithPopup(provider).then(function(result){
    cb(result);
  });
}

export function signOut(){
  firebase.auth().signOut().then(function() {
    browserHistory.push('/login');
  }, function(error) {
    // An error happened.
  });
}

export function requireAuth(nextState, replace, callback){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      callback();
    } else {
      replace('/login');
      callback()
    }
  });
}

export function isLoggedIn(nextState, replace, callback){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      replace('/admin');
      callback();
    } else {
      callback()
    }
  });
}
