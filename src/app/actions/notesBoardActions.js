import uuidv4 from 'uuid/v4';

export function addNote() {
  return {
    type: 'ADD_NEW',
    payload: uuidv4()
  };
}

export function removeNote(noteId) {
  return {
    type: 'REMOVE_NOTE',
    payload: noteId
  };
}
