import { connect } from 'react-redux';
import { updateText, sendMessage } from '../../actions/actions';
import ConversationSingle from './ConversationSingle';

const mapStateToProps = (state) => {
  return {
    messageInputText: state.messageInputText,
    conversations: state.conversations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateText: (msg) => {
      dispatch(updateText(msg));
    },
    sendMessage: (msg, author, conversationId) => {
      dispatch(sendMessage(msg, author, conversationId));
    },
  };
};

const ConversationSingleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationSingle);

export default ConversationSingleContainer;
