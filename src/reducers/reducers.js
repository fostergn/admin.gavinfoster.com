import {
    UPDATE_TEXT,
    UPDATE_SEARCH_TEXT,
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
        case UPDATE_SEARCH_TEXT:
          return Object.assign({}, state, {
              searchText: action.text,
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

          if(updateConversationPos === -1){return state;}

          return Object.assign({}, state, {
            conversations: [
              ...state.conversations.slice(0,updateConversationPos),
              Object.assign({}, updatePrevConversation, {
                isConnected: action.conversation.isConnected,
                lastChat: action.conversation.lastChat,
                name: action.conversation.name,
                clientIsTyping: action.conversation.clientIsTyping,
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
