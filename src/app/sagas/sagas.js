import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { updateNotePosition } from '../actions/notesBoardActions';

// worker saga
export function* moveNoteAsync() {

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

// export function* deleteNoteAsync() {
//
//   const getNotesList = (state) => state.notesBoardReducer.notesList;
//
//   try {
//     const notesList = select(getNotesList);
//
//     for (let i = 0; i < notesList.length; i++) {
//       if(notesList[i].index !== notesList.indexOf(notesList[i])) {
//         notesList[i].index = notesList.indexOf(notesList[i]);
//         yield put();
//       }
//     }
//
//   } catch (error) {
//     console.log('Ooops we got an error: ', error);
//   }
// }

// watcher saga triggers a new task on move note action
export function* watchMoveNote() {

  yield takeEvery('UPDATE_NOTES_POSITIONS', moveNoteAsync);
  // yield takeEvery('DELETE_NOTE', deleteNoteAsync);

}

// root saga
export default function* rootSaga() {

  yield [
    watchMoveNote()
  ];

}
