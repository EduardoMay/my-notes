import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAllNotesStorageAction } from './../actions/note';

import { Navbar } from '../components/ui/Navbar';
import { NotesScreen } from '../components/notes/NotesScreen';
import { FavoritiesScreen } from '../components/favorities/FavoritiesScreen';
import { CategoriesScreen } from './../components/categories/CategoriesScreen';
import { AddButton } from '../components/ui/AddButton';
import { NoteScreen } from './../components/notes/NoteScreen';

export const AppRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllNotesStorageAction());
	}, [dispatch]);

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/home" component={NotesScreen} />
					<Route exact path="/note/:id" component={NoteScreen} />
					<Route
						exact
						path="/favorities"
						component={FavoritiesScreen}
					/>
					<Route
						exact
						path="/categories"
						component={CategoriesScreen}
					/>

					<Redirect to="/home" />
				</Switch>

				<AddButton />
				<Navbar />
			</div>
		</Router>
	);
};
