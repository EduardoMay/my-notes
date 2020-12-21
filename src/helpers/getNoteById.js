export const getNoteById = (id) => {
	const notes = localStorage.notes ? JSON.parse(localStorage.notes) : [];

	return notes.find((note) => note.id === id);
};
