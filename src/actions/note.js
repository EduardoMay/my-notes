import { types } from './../types/types';

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

export const activeNewNoteAction = () => ({
	type: types.activeNewNote,
});

export const desactivateNewNoteAction = () => ({
	type: types.desactivateNewNote,
});
