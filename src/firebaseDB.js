import firebase from 'firebase';
import store from './index';
import { addConversation, addMessageToConversation } from './actions/actions';

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

// Get conversations
db.ref('conversations').on('child_added', function(data) {
  const conversation = data.val();
  const conversationId = conversation.conversationId;
  // dispatch addConversation
  // get messages from conversations
  store.dispatch(addConversation(conversation));
  firebase.database()
    .ref('messages')
    .orderByChild('conversationId')
    .equalTo(conversationId)
    .on('child_added', function(data) {
      const message = data.val();
       store.dispatch(addMessageToConversation(message));
     });

});

export default db;
