import firebase from 'firebase';
import store from './index';
import { addNewMessage, addInitialMessages } from './actions/actions';

const config = {
  apiKey: "AIzaSyCOj3piZf-HrV-WjDy30WlY_F7rCLqCIAk",
  authDomain: "portfoliochat-c02b2.firebaseapp.com",
  databaseURL: "https://portfoliochat-c02b2.firebaseio.com",
  storageBucket: "portfoliochat-c02b2.appspot.com",
  messagingSenderId: "500384902525"
};

let initMessageCount = 10;
let firstMessageLoaded = false;

firebase.initializeApp(config);
const db = firebase.database();

// Get initial messages
db.ref('messages').limitToLast(initMessageCount).once('value').then(function(messages) {
  var initialMessages = [];
  messages.forEach(function(msgData) {
    var msg = msgData.val();
    initialMessages.push(msg);
  });
  store.dispatch(addInitialMessages(initialMessages))
})

// Get new message
db.ref('messages').limitToLast(1).on('child_added', function(data) {
   var message = {
     message: data.val().message,
     author: data.val().author,
     createdOn: data.val().createdOn,
   }
   if(!firstMessageLoaded){
     firstMessageLoaded = true;
   } else {
     store.dispatch(addNewMessage(message));
   }
});

export default db;
