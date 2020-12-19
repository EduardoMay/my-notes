import React from 'react';
import { AddButton } from './../ui/AddButton';

export const FavoritiesScreen = () => {
	return (
		<>
			<div className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">Favoritos</span>
			</div>

			<AddButton />
		</>
	);
};
