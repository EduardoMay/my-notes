import { types } from './../types/types';

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
