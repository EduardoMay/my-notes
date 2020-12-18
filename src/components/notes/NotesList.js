import React from 'react';
import { NoteItem } from './NoteItem';

export const NotesList = () => {
	return (
		<div className="list-group">
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
		</div>
	);
};
