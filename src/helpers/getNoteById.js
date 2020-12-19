export const getNoteById = (id) => {
	const notes = JSON.parse(localStorage.notes);

	return notes.find((note) => note.id === id);
};
