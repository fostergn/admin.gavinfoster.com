import {
    UPDATE_TEXT,
    UPDATE_MESSAGES,
    ADD_NEW_MESSAGE,
    ADD_INITIAL_MESSAGES,
    ADD_CONVERSATION,
    ADD_MESSAGE_TO_CONVERSATION,
} from '../actions/actions';

const rootReducer = (state = {}, action) => {
    let previousView = '';
    switch (action.type) {
        case UPDATE_TEXT:
          return Object.assign({}, state, {
              messageInputText: action.messageInputText,
          });
        case ADD_CONVERSATION:
          action.conversation.messages = [];
          return Object.assign({}, state, {
              conversations: [...state.conversations, action.conversation],
          });
        case ADD_MESSAGE_TO_CONVERSATION:
          const conversationId = action.message.conversationId;
          const conversationPos = state.conversations.findIndex(convo => convo.conversationId === conversationId );
          const prevConversation = state.conversations[conversationPos];

          return Object.assign({}, state, {
            conversations: [
              ...state.conversations.slice(0,conversationPos),
              Object.assign({}, prevConversation, {
                messages: [...prevConversation.messages, action.message]
              }),
              ...state.conversations.slice(conversationPos + 1),
            ]
          });
        case ADD_NEW_MESSAGE:
          console.log('reducer adding new message: ', action.message);
          return Object.assign({}, state, {
            messageInputText: '',
          });
        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
