import { createStore, combineReducers } from 'redux';
import { noteReducer } from './../reducers/noteReducer';

const reducers = combineReducers({
	notes: noteReducer,
});

export const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
