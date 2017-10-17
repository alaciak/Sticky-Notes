import uuidv4 from 'uuid/v4';
import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:3000/notes';
const backgroundColors = ['#f2c9ee', '#c5e5e5', '#f6fccf'];

export function getNotes() {

  const fetchPromise = fetch(baseUrl).then(resp => resp.json()).then(data => {
    return data;
  });
  return {
    type: 'GET_NOTES',
    payload: fetchPromise
  };
}

export function addNote(index) {

const randomColor = backgroundColors[Math.floor(backgroundColors.length * Math.random())];
const note = {
  id: uuidv4(),
  background: randomColor,
  index: index
 };

  return  {
    type: 'ADD_NOTE',
    payload: fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json"
      }
    })
  };
}

export function updateNote(note) {

  return {
    type: 'UPDATE_NOTE',
    payload: fetch(baseUrl + '/' + note.id, {
      method: 'PUT',
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json"
      }
    })
  };
}

export function removeNote(noteId) {

  return {
    type: 'REMOVE_NOTE',
    payload: fetch(baseUrl + '/' + noteId, { method: 'DELETE' }).then(() => noteId)
  };
}

export function moveNote(dragIndex, hoverIndex) {

  return {
    type: 'MOVE_NOTE',
    payload: { dragIndex, hoverIndex }
  };
}

export function updateNotesPositions(noteId, noteIndex) {

  return {
    type: 'UPDATE_NOTES_POSITIONS',
    payload: { noteId, noteIndex }
  };
}

export function updateNotePosition(noteId, noteIndex) {

 return {
    type: 'UPDATE_NOTE_POSITION',
    payload: fetch(baseUrl + '/' + noteId, {
      method: 'PATCH',
      body: JSON.stringify({index: noteIndex}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      return { noteId, noteIndex };
    })
  };
}
