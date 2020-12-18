import React from 'react';
import '../../styles/addButton.css';

export const AddButton = () => {
	return (
		<button
			type="button"
			className="btn btn-outline-primary rounded-circle add-button"
		>
			<i className="fa fa-plus"></i>
		</button>
	);
};
