import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './Reducers';
import rootSaga from './Sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//create the store with reducers and middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//run the saga
sagaMiddleware.run(rootSaga);

export default store;
