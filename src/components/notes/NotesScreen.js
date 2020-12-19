import React from 'react';
import { NotesList } from './NotesList';
import { AddButton } from './../ui/AddButton';

export const NotesScreen = () => {
	return (
		<>
			<div className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">Mis notas</span>
			</div>

			<NotesList />
			<AddButton />
		</>
	);
};
