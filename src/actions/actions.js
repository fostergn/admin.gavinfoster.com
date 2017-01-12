import firebaseDB from '../firebaseDB';

export const UPDATE_TEXT = 'UPDATE_TEXT';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_CONVERSATION = 'ADD_CONVERSATION';
export const UPDATE_CONVERSATION = 'UPDATE_CONVERSATION';
export const ADD_MESSAGE_TO_CONVERSATION = 'ADD_MESSAGE_TO_CONVERSATION';

export function updateConversation(conversation){
  return {
    type: UPDATE_CONVERSATION,
    conversation: conversation,
  }
}

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
      author: 'admin',
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
