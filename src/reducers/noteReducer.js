import { types } from './../types/types';

const initialState = { notes: [] };

export const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.addNote:
			return {
				...state,
				notes: [action.payload, ...state.notes],
			};

		case types.updateNote:
			return {
				...state,
				notes: state.notes.map((note) =>
					note.id === action.payload.id ? action.payload.note : note
				),
			};

		case types.activeNewNote:
			return {
				...state,
				activeNewNote: true,
			};

		case types.desactivateNewNote:
			return {
				...state,
				activeNewNote: false,
			};

		case types.addNotes:
			return {
				...state,
				notes: action.payload,
			};

		case types.deleteNote:
			return {
				...state,
				notes: state.notes.filter((note) => note.id !== action.payload),
			};

		default:
			return state;
	}
};
