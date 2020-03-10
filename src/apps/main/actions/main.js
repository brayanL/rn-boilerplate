//action types
export const REQUEST_MAIN_SERVICE = 'REQUEST_MAIN_SERVICE';
export const SUCCESS_MAIN_SERVICE = 'SUCCESS_MAIN_SERVICE';
export const FAILURE_MAIN_SERVICE = 'FAILURE_MAIN_SERVICE';

//action creators
export const requestMainService = () => ({
    type: REQUEST_MAIN_SERVICE
});

export const successMainService = response => ({
    type: SUCCESS_MAIN_SERVICE,
    payload: response
});

export const failureMainService = error => ({
    type: FAILURE_MAIN_SERVICE,
    payload: error
});
