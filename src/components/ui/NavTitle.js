import React from 'react';
import { Link } from 'react-router-dom';

export const NavTitle = ({ title, url }) => {
	return (
		<div className="navbar navbar-dark bg-dark container">
			<span className="navbar-brand mb-0 h1">{title}</span>

			{url && (
				<div>
					<Link
						type="button"
						className="btn btn-outline-primary btn-sm rounded-circle"
						to={`/${url}`}
					>
						<i className="fa fa-plus"></i>
					</Link>
				</div>
			)}
		</div>
	);
};
