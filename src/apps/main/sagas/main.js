import { call, put, takeLatest } from 'redux-saga/effects';
import {
    failureMainService,
    REQUEST_MAIN_SERVICE,
    requestMainService,
    successMainService
} from '../actions/main';
import api from '../../../settings/AxiosConfig';

export function* watchRequestMainService() {
    yield takeLatest(REQUEST_MAIN_SERVICE, requestMainServiceSaga);
}

function* requestMainServiceSaga() {
    try {
        const response = yield call(fetchMainService);
        yield put(successMainService(response.data));
    } catch (e) {
        yield put(failureMainService(e));
        console.log('Error: ', e);
    }
}

const fetchMainService = () => api.get('https://jsonplaceholder.typicode.com/todos/1');

