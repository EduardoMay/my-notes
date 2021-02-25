import { types } from '../types/types';

const initialState = { categories: [] };

export const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.addCategory:
			return {
				...state,
				categories: [action.payload, ...state.categories],
			};

		case types.saveCategory:
			return {
				...state,
				categories: action.payload,
			};

		case types.deleteCategory:
			return {
				...state,
				categories: state.categories.filter(
					(category) => category.id !== action.payload
				),
			};

		case types.updatedCategory:
			return {
				...state,
				categories: state.categories.map((category) =>
					category.id === action.payload.id
						? action.payload
						: category
				),
			};

		default:
			return state;
	}
};
