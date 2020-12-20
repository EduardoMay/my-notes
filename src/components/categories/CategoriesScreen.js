import React from 'react';

import { NavTitle } from '../ui/NavTitle';
import { CategoriesList } from './CategoriesList';

export const CategoriesScreen = () => {
	return (
		<>
			<NavTitle title={'Categorias'} url="addcategory" />

			<CategoriesList />
		</>
	);
};
