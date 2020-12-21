export const getCategoryById = (id) => {
	const categories = localStorage.categories
		? JSON.parse(localStorage.categories)
		: [];

	return categories.find((category) => category.id === id);
};
