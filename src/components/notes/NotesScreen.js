import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotesList } from './NotesList';
import { AddNote } from './AddNote';
import { addNotes } from '../../actions/note';

export const NotesScreen = () => {
	const dispatch = useDispatch();
	const { activeNewNote, notes } = useSelector((state) => state.notes);

	useEffect(() => {
		notes.length === 0 && dispatch(addNotes(getAllNoteStorage()));
		notes.length > 0 && saveNotesStorage(notes);
	}, [notes, dispatch]);

	const saveNotesStorage = (notes) => {
		localStorage.setItem('notes', JSON.stringify(notes));
	};

	const getAllNoteStorage = () => JSON.parse(localStorage.getItem('notes'));

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
