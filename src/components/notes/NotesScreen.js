import React from 'react';
import { NotesList } from './NotesList';
import { NavTitle } from '../ui/NavTitle';

export const NotesScreen = () => {
	return (
		<>
			<NavTitle title={'Mis notas'} url="newnote" />

			<NotesList />
		</>
	);
};
