import fetch from 'isomorphic-fetch'
import firebaseDB from '../firebaseDB';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
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

export function sendMessage(message) {
    // send message to firebase
    firebaseDB.ref('messages').push({
      author: 'gavin',
      message,
      createdOn: Date.now(),
    }, function(){
      console.log('success');
    })
    return {
        type: UPDATE_TEXT,
        messageInputText: ''
    }
}

function requestPosts(category) {
  return {
    type: REQUEST_POSTS,
    category
  }
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts.data.children.map(child => child.data),
  }
}


export function fetchPosts(category) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPosts(category))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://www.gavinfoster.com/api/v2/${category}.json`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePosts(json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
