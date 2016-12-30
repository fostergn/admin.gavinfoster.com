import firebaseDB from '../firebaseDB';

export const UPDATE_TEXT = 'UPDATE_TEXT';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
export const ADD_INITIAL_MESSAGES = 'ADD_INITIAL_MESSAGES';
export const ADD_CONVERSATION = 'ADD_CONVERSATION';
export const ADD_MESSAGE_TO_CONVERSATION = 'ADD_MESSAGE_TO_CONVERSATION';

// export function addInitialMessages(messages) {
//   return {
//       type: ADD_INITIAL_MESSAGES,
//       messages
//   }
// }
//
// export function addNewMessage(message) {
//   return {
//       type: ADD_NEW_MESSAGE,
//       message
//   }
// }

export function addConversation(conversation){
  return {
    type: ADD_CONVERSATION,
    conversation: conversation,
  }
}

export function addMessageToConversation(message){
  return {
    type: ADD_MESSAGE_TO_CONVERSATION,
    message,
  }
}

export function updateText(messageInputText) {
    return {
        type: UPDATE_TEXT,
        messageInputText
    }
}

export function sendMessage(message, author, conversationId) {
    // send message to firebase
    firebaseDB.ref('messages').push({
      author,
      message,
      conversationId,
      createdOn: Date.now(),
    }, function(){
      console.log('success');
    })
    return {
        type: UPDATE_TEXT,
        messageInputText: ''
    }
}
