import React from 'react';
import { useSelector } from 'react-redux';
import { CategoryItem } from './CategoryItem';

export const CategoriesList = () => {
	const { categories } = useSelector((state) => state.categories);

	return (
		<div>
			<ul className="list-group mt-4" style={{ marginBottom: '90px' }}>
				{categories.map((category) => (
					<CategoryItem key={category.id} {...category} />
				))}
			</ul>
		</div>
	);
};
