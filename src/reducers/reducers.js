import {
    UPDATE_TEXT,
    UPDATE_MESSAGES,
    ADD_CONVERSATION,
    ADD_MESSAGE_TO_CONVERSATION,
    UPDATE_CONVERSATION,
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
        case UPDATE_CONVERSATION:
          const updateConversationId = action.conversation.conversationId;
          const updateConversationPos = state.conversations.findIndex(convo => convo.conversationId === updateConversationId );
          const updatePrevConversation = state.conversations[updateConversationPos];

          console.log('reducer convo id: ', updateConversationId);
          console.log('reducer prev convo id: ', updatePrevConversation);

          return Object.assign({}, state, {
            conversations: [
              ...state.conversations.slice(0,updateConversationPos),
              Object.assign({}, updatePrevConversation, {
                isTyping: action.conversation.isTyping,
                isConnected: action.conversation.isConnected
              }),
              ...state.conversations.slice(updateConversationPos + 1),
            ]
          });
        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
