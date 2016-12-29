import {
    UPDATE_TEXT,
    UPDATE_MESSAGES,
    ADD_NEW_MESSAGE,
    ADD_INITIAL_MESSAGES,
} from '../actions/actions';

const rootReducer = (state = {}, action) => {
    let previousView = '';
    switch (action.type) {
        case UPDATE_TEXT:
          return Object.assign({}, state, {
              messageInputText: action.messageInputText,
          });
        case ADD_INITIAL_MESSAGES:
          return Object.assign({}, state, {
              messages: action.messages,
          });
        case ADD_NEW_MESSAGE:
          console.log('reducer adding new message: ', action.message);
          return Object.assign({}, state, {
            messages: [...state.messages, action.message],
            messageInputText: ''
          });
        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
