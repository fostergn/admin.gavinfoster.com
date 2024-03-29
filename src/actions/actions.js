import firebaseDb from '../firebaseDB';

export const UPDATE_TEXT = 'UPDATE_TEXT';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const ADD_CONVERSATION = 'ADD_CONVERSATION';
export const UPDATE_CONVERSATION = 'UPDATE_CONVERSATION';
export const ADD_MESSAGE_TO_CONVERSATION = 'ADD_MESSAGE_TO_CONVERSATION';
export const UPDATE_IS_TYPING = 'UPDATE_IS_TYPING';

export function updateSearchText(text){
  return {
    type: UPDATE_SEARCH_TEXT,
    text
  }
}

export function updateConversation(conversation){
  return {
    type: UPDATE_CONVERSATION,
    conversation,
  }
}

export function addConversation(conversation){
  return {
    type: ADD_CONVERSATION,
    conversation,
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

export function updateIsTyping(typing, conversationId){
    firebaseDb.ref(`conversations/${conversationId}`).update({
        adminIsTyping: typing
    });
    return {
        type: UPDATE_IS_TYPING,
    }
}

export function sendMessage(message, author, conversationId) {
    // send message to firebase
    firebaseDb.ref('messages').push({
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
