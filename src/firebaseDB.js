import firebase from 'firebase';
import store from './index';
import { pushNotification } from './pushNotifications';
import icon from './images/icons/count.png';
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
let initialMessagesLoaded = false;

firebase.initializeApp(config);
const db = firebase.database();

// Get conversations
db.ref('conversations').on('child_added', function(data) {
  const conversation = data.val();
  const conversationId = conversation.conversationId;

  // check for blank objects etc.
  if (typeof conversation.conversationId === 'undefined'){return;}

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
       if(initialMessagesLoaded && message.author === 'client'){
         pushNotification(message.message.substr(0, 20), message.message, icon);
       }
     });

  var convoRef = db.ref('conversations/'+conversationId);
  convoRef.update({
   isAdminConnected: true
  })
  convoRef.onDisconnect().update({
   isAdminConnected: false
  })

});

// On conversation changing
db.ref('conversations')
    .orderByChild('lastChat')
    .on('child_changed', function(data, key) {
  const isConnected = data.val().isConnected;
  const lastChat = data.val().lastChat;
  const clientIsTyping = data.val().clientIsTyping;
  const name = data.val().name;
  const conversationId = data.val().conversationId;
  const newConversation = {
    conversationId,
    isConnected,
    lastChat,
    name,
    clientIsTyping,
  };

  console.log('child is changing: ', newConversation);

  store.dispatch(updateConversation(newConversation));

})

// Hack: initial messages loaded after 3 seconds
window.setTimeout(function(){
  initialMessagesLoaded = true;
}, 3000)

export default db;
