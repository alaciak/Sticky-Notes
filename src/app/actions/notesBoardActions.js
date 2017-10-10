import uuidv4 from 'uuid/v4';
import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';

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

export function addNote() {

const randomColor = backgroundColors[Math.floor(backgroundColors.length * Math.random())];
const note = {
  id: uuidv4(),
  background: randomColor
 };

return dispatch => {
  return dispatch({
    type: 'ADD_NOTE',
    payload: fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json"
        }
      })
  }).then(() => dispatch(getNotes()));
};
}

export function updateNote(note) {
  console.log(note);

  return dispatch => {
      return dispatch({
        type: 'UPDATE_NOTE',
        payload: fetch(baseUrl + '/' + note.id, {
          method: 'PUT',
          body: JSON.stringify(note),
          headers: {
            "Content-Type": "application/json"
          }
        })
      });
    };
}

export function removeNote(noteId) {

 return dispatch => {
     return dispatch({
       type: 'REMOVE_NOTE',
       payload: fetch(baseUrl + '/' + noteId, { method: 'DELETE' })
     }).then(() => dispatch(getNotes()));
   };
}
