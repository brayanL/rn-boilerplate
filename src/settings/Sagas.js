import { all, fork } from 'redux-saga/effects';
import mainSagas from '../apps/main/sagas';

function* rootSaga() {
    yield all(
        [
            ...Object.values(mainSagas),
        ].map(fork),
    );
}

export default rootSaga;
