import { connect } from 'react-redux';
import { updateText, sendMessage } from '../../actions/actions';
import ConversationList from './ConversationList';

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
    sendMessage: (msg) => {
      dispatch(sendMessage(msg));
    },
  };
};

const ConversationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList);

export default ConversationListContainer;
