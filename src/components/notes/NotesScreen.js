import React from 'react';
import { useSelector } from 'react-redux';
import { NotesList } from './NotesList';
import { AddNote } from './AddNote';

export const NotesScreen = () => {
	const { activeNewNote } = useSelector((state) => state.notes);

	return (
		<>
			<div className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">
					{activeNewNote ? 'Nueva nota' : 'Mis notas'}
				</span>
			</div>

			{activeNewNote ? <AddNote /> : <NotesList />}
		</>
	);
};
