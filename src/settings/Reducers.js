import { combineReducers } from 'redux';
import mainReducers from '../apps/main/reducers';

const RESET_STATE = 'RESET_STATE';

const appReducers = combineReducers({
    ...mainReducers,
});


/**
 * Reset all state of all reducers.
 * */
const rootReducer = (state, action) => {
    if (action.type === RESET_STATE) {
        state = undefined;
    }
    return appReducers(state, action);
};

export default rootReducer;
