import {
    TOGGLE_VIEW,
    UPDATE_TEXT,
    SEND_MESSAGE,
} from '../actions/actions';

const rootReducer = (state = {}, action) => {
    let previousView = '';
    switch (action.type) {
        case UPDATE_TEXT:
            return Object.assign({}, state, {
                message: action.message,
            });
        case SEND_MESSAGE:
            return Object.assign({}, state, {
                message: '',
            });
        case TOGGLE_VIEW:
            return Object.assign({}, state, {
                view: !state.view,
            });
        default:
            return state;
    }
};

// Export Reducer
export default rootReducer;
