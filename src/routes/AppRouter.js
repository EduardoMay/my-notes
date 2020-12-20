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
import { NoteScreen } from './../components/notes/NoteScreen';
import { AddNote } from './../components/notes/AddNote';
import { saveAllCategoriesAction } from '../actions/categories';
import { AddCategoryScreen } from '../components/categories/AddCategoryScreen';

export const AppRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllNotesStorageAction());
		dispatch(saveAllCategoriesAction());
	}, [dispatch]);

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/home" component={NotesScreen} />
					<Route exact path="/note/:id" component={NoteScreen} />
					<Route exact path="/newnote" component={AddNote} />
					<Route exact path="/newnote/:id" component={AddNote} />
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
					<Route
						exact
						path="/addcategory"
						component={AddCategoryScreen}
					/>

					<Redirect to="/home" />
				</Switch>

				<Navbar />
			</div>
		</Router>
	);
};
