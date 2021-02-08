import React from 'react';
import { useSelector } from 'react-redux';
import { NoteItem } from './NoteItem';

export const NotesList = () => {
	const { notes } = useSelector((state) => state.notes);

	return (
		<ul className="list-group" style={{ marginBottom: '90px' }}>
			{notes.length > 0 &&
				notes.map((note) => <NoteItem key={note.id} {...note} />)}
		</ul>
	);
};
