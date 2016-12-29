import firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();

export function authenticate(cb){
  firebase.auth().signInWithPopup(provider).then(function(result){
    cb(result);
  });
}
