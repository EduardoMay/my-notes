import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/addButton.css';

import { activeNewNoteAction } from '../../actions/note';

export const AddButton = () => {
	const { activeNewNote } = useSelector((state) => state.notes);
	const dispatch = useDispatch();

	const handleButton = () => {
		dispatch(activeNewNoteAction());
	};

	return (
		<>
			{!activeNewNote ? (
				<button
					type="button"
					className="btn btn-outline-primary rounded-circle add-button"
					onClick={handleButton}
				>
					<i className="fa fa-plus"></i>
				</button>
			) : (
				''
			)}
		</>
	);
};
