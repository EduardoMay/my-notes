import React from 'react';
import { Provider } from 'react-redux';

import './styles/styles.css';

import { AppRouter } from './routes/AppRouter';
import { store } from './store/store';

export const MyNotes = () => {
	console.clear();

	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};
