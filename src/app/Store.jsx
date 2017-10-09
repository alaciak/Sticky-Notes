import { createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { notesBoardReducer } from "./reducers/notesBoardReducer";


export default createStore(
    combineReducers({
      notesBoardReducer
    }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);
