import { types } from './../types/types';
import { getNoteById } from '../helpers/getNoteById';

export const getAllNotesStorageAction = () => {
	return (dispatch) => {
		const notes = localStorage.notes ? JSON.parse(localStorage.notes) : [];

		dispatch(addNotesAction(notes));
	};
};

export const addNoteStorageAction = (note) => {
	return (dispatch) => {
		const notes = localStorage.notes ? JSON.parse(localStorage.notes) : [];
		notes.push(note);

		localStorage.setItem('notes', JSON.stringify(notes));

		dispatch(addNoteAction(note));
	};
};

export const addNotesAction = (notes) => ({
	type: types.addNotes,
	payload: notes,
});

export const addNoteAction = (note) => ({
	type: types.addNote,
	payload: note,
});

export const favoriteNoteAction = (id) => {
	return (dispatch) => {
		const note = getNoteById(id);

		note.favorite = !note.favorite;

		updateNoteStorageAction(id, note);
		dispatch(updateNoteAcion(note));
	};
};

export const updateNoteStorageAction = (id, note) => {
	const notes = JSON.parse(localStorage.notes);

	const notesUpdate = notes.map((noteItem) =>
		noteItem.id === note.id ? note : noteItem
	);

	localStorage.setItem('notes', JSON.stringify(notesUpdate));
};

export const deleteNoteStorageAction = (id) => {
	return (dispatch) => {
		const notes = JSON.parse(localStorage.notes);

		const notesUpdate = notes.filter((note) => note.id !== id);

		localStorage.setItem('notes', JSON.stringify(notesUpdate));

		dispatch(deleteNoteAction(id));
	};
};

export const deleteNoteAction = (id) => ({
	type: types.deleteNote,
	payload: id,
});

export const updateNoteAcion = (note) => ({
	type: types.updateNote,
	payload: { id: note.id, note },
});

export const activeNewNoteAction = () => ({
	type: types.activeNewNote,
});

export const desactivateNewNoteAction = () => ({
	type: types.desactivateNewNote,
});
