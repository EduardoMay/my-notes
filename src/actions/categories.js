import { types } from './../types/types';

export const addCategorieStorageAction = (category) => {
	return (dispatch) => {
		const categories = localStorage.categories
			? JSON.parse(localStorage.categories)
			: [];

		categories.push(category);

		localStorage.setItem('categories', JSON.stringify(categories));

		dispatch(addCategorieAction(category));
	};
};

export const saveAllCategoriesAction = () => {
	const categoriesStorage = localStorage.categories
		? JSON.parse(localStorage.categories)
		: [];

	return {
		type: types.saveCategorie,
		payload: categoriesStorage,
	};
};

export const addCategorieAction = (category) => ({
	type: types.addCategorie,
	payload: category,
});