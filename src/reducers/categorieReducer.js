import { types } from './../types/types';

const initialState = { categories: [] };

export const categorieReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.addCategorie:
			return {
				...state,
				categories: [action.payload, ...state.categories],
			};

		case types.saveCategorie:
			return {
				...state,
				categories: action.payload,
			};

		case types.deleteCategorie:
			return {
				...state,
				categories: state.categories.filter(
					(category) => category.id !== action.payload
				),
			};

		default:
			return state;
	}
};
