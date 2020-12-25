import React from 'react';
import { AddButton } from './AddButton';

export const NavTitle = ({ title, url }) => {
	return (
		<div className="navbar navbar-dark bg-dark ps-3 pe-3">
			<span className="navbar-brand mb-0 h1">{title}</span>

			{url && (
				<div>
					<AddButton url={url} />
				</div>
			)}
		</div>
	);
};
