import { types } from './../types/types';
import { sweetToast } from '../config/sweet';

export const addCategorieStorageAction = (category) => {
	return (dispatch) => {
		const categories = localStorage.categories
			? JSON.parse(localStorage.categories)
			: [];

		categories.push(category);

		localStorage.setItem('categories', JSON.stringify(categories));

		dispatch(addCategorieAction(category));

		sweetToast.fire({
			icon: 'success',
			title: 'Guardado',
		});
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

export const deleteCategoryStorageAction = (id) => {
	return (dispatch) => {
		const categories = JSON.parse(localStorage.categories);

		const newCategories = categories.filter(
			(category) => category.id !== id
		);

		localStorage.setItem('categories', JSON.stringify(newCategories));

		dispatch(deleteCategoryAction(id));

		sweetToast.fire({
			icon: 'success',
			title: 'Eliminado',
		});
	};
};

export const deleteCategoryAction = (id) => ({
	type: types.deleteCategorie,
	payload: id,
});

export const updateCategoryStorageAction = (id, category) => {
	return (dispatch) => {
		const categories = JSON.parse(localStorage.categories);

		const newCategories = categories.map((c) =>
			c.id === id ? category : c
		);

		localStorage.setItem('categories', JSON.stringify(newCategories));

		dispatch(updateCategoryAction(category));

		sweetToast.fire({
			icon: 'success',
			title: 'Guardado',
		});
	};
};

export const updateCategoryAction = (category) => ({
	type: types.updatedCategorie,
	payload: category,
});
