import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { noteReducer } from './../reducers/noteReducer';
import thunk from 'redux-thunk';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const reducers = combineReducers({
	notes: noteReducer,
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
