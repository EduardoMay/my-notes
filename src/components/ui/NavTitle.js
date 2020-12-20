import React from 'react';

export const NavTitle = ({ title }) => {
	return (
		<div className="navbar navbar-dark bg-dark container">
			<span className="navbar-brand mb-0 h1">{title}</span>
		</div>
	);
};
