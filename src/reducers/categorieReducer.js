import { types } from './../types/types';

const initialState = { categories: [] };

export const categorieReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.addCategorie:
			console.log(state.categories);
			return {
				...state,
				categories: [action.payload, ...state.categories],
			};

		case types.saveCategorie:
			return {
				...state,
				categories: action.payload,
			};

		default:
			return state;
	}
};
