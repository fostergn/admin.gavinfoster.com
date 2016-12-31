import firebase from 'firebase';
import store from './index';
import { addConversation, addMessageToConversation, updateConversation } from './actions/actions';

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

// On conversation changing
db.ref('conversations').on('child_changed', function(data, key) {
  const isConnected = data.val().isConnected;
  const isTyping = data.val().isTyping;
  const conversationId = data.val().conversationId;
  const newConversation = {
    conversationId,
    isTyping,
    isConnected,
  };

  console.log('conversation id changed from firebase: ', conversationId);

  store.dispatch(updateConversation(newConversation));

})

export default db;
