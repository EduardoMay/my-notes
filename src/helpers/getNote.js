export const getNote = (title) => {
	const notes = JSON.parse(localStorage.notes);

	return notes.find((note) => note.title === title);
};
