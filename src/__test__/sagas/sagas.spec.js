import configureMockStore from 'redux-mock-store';
import { call, put, select } from 'redux-saga/effects';
import { moveNotesAsync, addNotesAsync } from '../../app/sagas/sagas';
import { takeEvery } from 'redux-saga';
import { updateNotePosition } from '../../app/actions/notesBoardActions';
import { getNotes } from '../../app/actions/notesBoardActions';

const updateNotesPositions = (noteId, noteIndex) => ({
  type: 'UPDATE_NOTES_POSITIONS',
  payload: { noteId, noteIndex }
});

describe('moveNotesAsync', () => {

  it('should dispatch updateNotePosition action', () => {

      const testState = {
        notesList: [
          { index: 0, id: 0, text: 'note-1' },
          { index: 1, id: 1, text: 'note-2' },
          { index: 3 ,id: 2, text: 'note-3' }
        ]
      };

      const gen =  moveNotesAsync();
      const getTestNotesList = testState.notesList;
      gen.next();

      expect(gen.next(getTestNotesList).value).toEqual(put(updateNotePosition(2, 3)));

  });

  it('should dispatch getNotes action', () => {

      const gen =  addNotesAsync();

      expect(gen.next().value).toEqual(put(getNotes()));

  });

});
