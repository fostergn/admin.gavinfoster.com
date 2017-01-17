import { connect } from 'react-redux';
import { updateSearchText, sendMessage } from '../../actions/actions';
import ConversationList from './ConversationList';

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
    searchText: state.searchText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchText: text => {
      dispatch(updateSearchText(text));
    },
    sendMessage: msg => {
      dispatch(sendMessage(msg));
    },
  };
};

const ConversationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList);

export default ConversationListContainer;
