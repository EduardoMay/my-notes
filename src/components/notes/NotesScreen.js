import React from 'react';
import { NotesList } from './NotesList';
import { AddButton } from './../ui/AddButton';
import { NavTitle } from '../ui/NavTitle';

export const NotesScreen = () => {
	return (
		<>
			<NavTitle title={'Mis notas'} />

			<NotesList />
			<AddButton />
		</>
	);
};
