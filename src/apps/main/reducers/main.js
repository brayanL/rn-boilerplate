import { FAILURE_MAIN_SERVICE, REQUEST_MAIN_SERVICE, SUCCESS_MAIN_SERVICE } from '../actions/main';

const INITIAL_STATE = {
    loading: false,
    response: {},
    isError: false
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_MAIN_SERVICE:
            return {
                ...state,
                loading: true,
                isError: false
            };
        case SUCCESS_MAIN_SERVICE:
            return {
                ...state,
                loading: false,
                response: action.payload,
                isError: false
            };
        case FAILURE_MAIN_SERVICE:
            return {
                ...state,
                loading: false,
                response: action.payload,
                isError: true
            };
        default:
            return state;
    }
};
