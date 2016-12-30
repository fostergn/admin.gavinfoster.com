import { connect } from 'react-redux';
import { updateText, sendMessage } from '../../actions/actions';
import Admin from './Admin';

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

const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);

export default AdminContainer;
