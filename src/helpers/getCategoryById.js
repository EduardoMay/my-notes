export const getCategoryById = (id) => {
	const categories = JSON.parse(localStorage.categories);

	return categories.find((category) => category.id === id);
};
