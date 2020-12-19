import { types } from './../types/types';

const initialState = { activeNewNote: false, notes: [] };

export const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.addNote:
			return {
				...state,
				notes: [action.payload, ...state.notes],
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

		default:
			return state;
	}
};
