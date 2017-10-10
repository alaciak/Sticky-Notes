import { notesBoardReducer } from '../../app/reducers/notesBoardReducer';

describe('notesBoardReducer', () => {

  const testNotesList = ['note-1', 'note-2', 'note-3'];

  it('should return initial state', () => {
    expect(notesBoardReducer(undefined, {})).toEqual({
      notesList: [],
      loading: true
    });
  });

  it('should handle GET_NOTES_FULFILLED', () => {
    expect(notesBoardReducer(undefined, {
      type: 'GET_NOTES_FULFILLED',
      payload: testNotesList
    })).toEqual({
      notesList: testNotesList,
      loading: false
    });
  });

  it('should handle ADD_NOTE_FULFILLED', () => {
    expect(notesBoardReducer(undefined, {
      type: 'ADD_NOTE_FULFILLED',
    })).toEqual({
      notesList: [],
      loading: false
    });
  });

  it('should handle UPDATE_NOTE_FULFILLED', () => {
    expect(notesBoardReducer(undefined, {
      type: 'UPDATE_NOTE_FULFILLED',
    })).toEqual({
      notesList: [],
      loading: false
    });
  });

  it('should handle REMOVE_NOTE_FULFILLED', () => {
    expect(notesBoardReducer(undefined, {
      type: 'REMOVE_NOTE_FULFILLED',
    })).toEqual({
      notesList: [],
      loading: false
    });
  });

});
