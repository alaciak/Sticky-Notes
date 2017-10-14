import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { updateNotePosition } from '../actions/notesBoardActions';

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

  } catch (error) {
    console.log('Ooops we got an error: ', error);
  }
}

// watcher saga triggers a new task on move note action
export function* watchMoveNotes() {

  yield takeEvery('UPDATE_NOTES_POSITIONS', moveNotesAsync);
  yield takeEvery('REMOVE_NOTE_FULFILLED', moveNotesAsync);

}

// root saga
export default function* rootSaga() {

  yield [
    watchMoveNotes()
  ];

}
