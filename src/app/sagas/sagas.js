import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { updateNotePosition } from '../actions/notesBoardActions';
import { getNotes } from '../actions/notesBoardActions';

// worker saga
export function* moveNotesAsync() {

  const getNotesList = (state) => state.notesBoardReducer.notesList;

  try {
    const notesList = yield select(getNotesList);

    for (let i = 0; i < notesList.length; i++) {
      if(notesList[i].index !== i) {
        yield put(updateNotePosition(notesList[i].id, i));
      }
    }
  }
  catch (error) {
    console.log('Ooops we got an error: ', error);
  }
}

export function* addNotesAsync () {

  try {
    yield put(getNotes());
  }
  catch (error) {
    console.log('Ooops we got an error: ', error);
  }
}

// watcher saga triggers a new task on move and remove note actions
export function* watchNotes() {

  yield takeEvery('UPDATE_NOTES_POSITIONS', moveNotesAsync);
  yield takeEvery('REMOVE_NOTE_FULFILLED', moveNotesAsync);
  yield takeEvery('ADD_NOTE_FULFILLED', addNotesAsync);

}

// root saga
export default function* rootSaga() {

  yield [
    watchNotes()
  ];

}
