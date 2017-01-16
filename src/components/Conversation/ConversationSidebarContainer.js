import { connect } from 'react-redux';
import { updateText, sendMessage } from '../../actions/actions';
import ConversationSidebar from './ConversationSidebar';

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateText: (msg) => {
    //   dispatch(updateText(msg));
    // },
    // sendMessage: (msg) => {
    //   dispatch(sendMessage(msg));
    // },
  };
};

const ConversationSidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationSidebar);

export default ConversationSidebarContainer;
