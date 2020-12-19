import React from 'react';
import { useDispatch } from 'react-redux';
import { activeNewNoteAction } from '../../actions/note';
import '../../styles/addButton.css';

export const AddButton = () => {
	const dispatch = useDispatch();

	const handleButton = () => {
		dispatch(activeNewNoteAction());
	};

	return (
		<button
			type="button"
			className="btn btn-outline-primary rounded-circle add-button"
			onClick={handleButton}
		>
			<i className="fa fa-plus"></i>
		</button>
	);
};
