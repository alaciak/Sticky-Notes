import { createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { notesBoardReducer } from './reducers/notesBoardReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({ notesBoardReducer }),
    {},
    applyMiddleware(sagaMiddleware, createLogger(), thunk, promise())
);

sagaMiddleware.run(rootSaga);

export default store;
