import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { NotesScreen } from '../components/notes/NotesScreen';
import { FavoritiesScreen } from '../components/favorities/FavoritiesScreen';
import { CategoriesScreen } from './../components/categories/CategoriesScreen';
import { AddButton } from '../components/ui/AddButton';
import { NoteScreen } from './../components/notes/NoteScreen';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/home" component={NotesScreen} />
					<Route exact path="/note/:title" component={NoteScreen} />
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
